interface Rule {
  required?: Boolean;
  message: string;
  trigger?: string;
}
export interface Rules {
  [key: string]: Array<Rule>;
}
export interface Data {
  [key: string]: any;
}
export interface Model {
  data: Data;
  rules: Rules;
}
export interface Err {
  name: string;
  value: string;
}
interface Table {
  search: string;
  pageIndex: number;
  pageSize: number;
  RecordCount: number;
  Records: Array<any>;
  [key: string]: any;
}
