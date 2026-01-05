// using literal strings instead of numbers so that it's easier to inspect
// debugger events

export enum TrackOpTypes {
  GET = 'get',
  HAS = 'has',
  ITERATE = 'iterate',
}

export enum TriggerOpTypes {
  SET = 'set',
  ADD = 'add',
  DELETE = 'delete',
  CLEAR = 'clear',
}

export enum ReactiveFlags {
  SKIP = '__v_skip',//是否跳过
  IS_REACTIVE = '__v_isReactive',//是否是相应式
  IS_READONLY = '__v_isReadonly',//是否只读
  IS_SHALLOW = '__v_isShallow',//是否是浅响应
  RAW = '__v_raw',//是否是源文件
  IS_REF = '__v_isRef',
}
