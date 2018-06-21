# encoding: utf-8
import sys
import json
from io import StringIO
defaultMap = {
    'pictures': '[]',
    'systemCases': '[]',
    'systems': '[]',
    'attatchment': '[]',
    'logs': '[]'
}

exclude = {'Cart'}

config = {'Project': {'content': "Payload"}}

default = 'defaultValue () { return %s }'
header = '''import { Model } from "./baseModel";

interface Payload {
    [key: string]: any;
}
'''
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
      %s
    });'''

typeMap = {'integer': 'number', 'file': 'any'}


def fromField(name, desc, _config, define=False):
    # define 写this.defineField的时候传真
    type = desc.get('type')
    type = typeMap.get(type, type)
    if desc.get('$ref'):
        type = desc['$ref'].split('/')[-1]
    elif define:
        type = "'{}'".format(type.capitalize())
    defaultValue = defaultMap.get(name, '')
    if defaultValue:
        type = '[' + type + ']'
        defaultValue = default % defaultValue
    type = _config.get(name, type)
    if define:
        return fieldDefine % (name, type, defaultValue)
    txt = field.format(name, type)
    description = desc.get('description')
    if description:
        description = '    // {}'.format(description)
        txt = ''.join((description, '\n', txt))
    return txt


def fromModel(sio, key, value):
    if key in exclude:
        return
    items = value['properties'].items
    _config = config.get(key, {})
    body = '\n'.join(fromField(k, v, _config) for k, v in items())
    txtDefine = '\n'.join(fromField(k, v, _config, True) for k, v in items())
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
        index = [
            index for index, line in enumerate(old) if line.startswith('////')
        ]
        if index:
            custom = '\n'.join(old[index[0]:])
    with open(dist, 'w') as fd:
        fd.write(header)
        fd.write(txt)
        fd.write('\n\n')
        custom and fd.write(custom)


def replace():
    with open('index.html', 'r') as fd:
        content = fd.read()
        src = '<!-- <script src="<%= webpackConfig.output.publicPath %>static/js/vendor.dll.js"></script> -->'
        target = '<script src="<%= webpackConfig.output.publicPath %>static/js/vendor.dll.js"></script>'
        content = content.replace(src, target)
                        
    with open('index.html', 'w') as fd:
        fd.write(content)



if __name__ == '__main__':
    if 'replace' in sys.argv:
        replace()
        sys.exit()
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
