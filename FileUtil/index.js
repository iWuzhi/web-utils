/**
 * author iWuzhi
 * date 2020-05-21 21:08:28
 */

//  备注：使用(?:xxx)?是为了防止没有后缀名或不匹配的情况导致结果返回null
export const extension = fileName => /(?:\.([^.]+))?$/.exec(fileName)[1];