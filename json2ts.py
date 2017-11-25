# encoding: utf-8
import sys
import json
from io import StringIO
header = 'import { Model } from "./baseModel";\n\n'
tpl = '''export class %s extends Model {
    %s

  public constructor(data = {}) {
    super(data);
%s
    this.populate(data);
    this.commit();
  }
}\n'''

field = '    public {}: {};'
fieldDefine = '''        this.defineField('%s', {
      type: %s,
    });'''

typeMap = {'integer': 'number', 'file': 'any'}


def fromField(name, desc, define=False):
    type = desc.get('type')
    type = typeMap.get(type, type)
    if desc.get('$ref'):
        type = desc['$ref'].split('/')[-1]
    elif define:
        type = "'{}'".format(type.capitalize())
    if define:
        return fieldDefine % (name, type)
    txt = field.format(name, type)
    description = desc.get('description')
    if description:
        description = '    // {}'.format(description)
        txt = ''.join((description, '\n', txt))
    return txt


def fromModel(sio, key, value):
    items = value['properties'].items
    body = '\n'.join(fromField(k, v) for k, v in items())
    txtDefine = '\n'.join(fromField(k, v, True) for k, v in items())
    model = tpl % (key, body, txtDefine)
    sio.write(model)
    sio.write('\n')


def main(src, dist):
    sio = StringIO()
    if src.startswith('http'):
        import requests
        data = requests.get(src).json()
    else:
        with open(src, 'r') as fd:
            data = json.load(fd)
    models = data['definitions']
    [fromModel(sio, key, value) for key, value in models.items()]
    txt = sio.getvalue()
    custom = None  # 自定义的model
    with open(dist, 'r') as fd:
        old = fd.read().splitlines()
        index = [index for index, line in enumerate(old) if line.startswith('////')]
        if index:
            custom = '\n'.join(old[index[0]:])
    with open(dist, 'w') as fd:
        fd.write(header)
        fd.write(txt)
        fd.write('\n\n')
        custom and fd.write(custom)


if __name__ == '__main__':
    if len(sys.argv) == 2:
        print('''src: 源json文件
              dist: 目标ts文件''')
        sys.exit()
    elif len(sys.argv) == 3:
        src, dict = sys.argv[1:3]
    else:
        src = 'http://127.0.0.1:8888/?format=openapi'
        dist = 'src/apis/model.ts'
    main(src, dist)
