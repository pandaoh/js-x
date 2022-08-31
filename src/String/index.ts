/*
 * @Author: HxB
 * @Date: 2022-04-26 15:45:48
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-31 15:05:14
 * @Description: 字符串常用方法
 * @FilePath: \js-xxx\src\String\index.ts
 */

/**
 * 字符转 unicode
 * Example: `unicode2str("我是老A") => '\\u6211\\u662f\\u8001a'`
 * @param value 中文字符串
 * @returns
 */
export function unicode2str(value: string): string {
  return escape(value).toLocaleLowerCase().replace(/%u/gi, '\\u');
}

/**
 * unicode 转字符
 * Example: `str2unicode("\\u6211\\u662f\\u8001a") => '我是老a'`
 * @param value unicode 字符串
 * @returns
 */
export function str2unicode(value: string): string {
  return unescape(value.replace(/\\u/gi, '%u'));
}

/**
 * 去除字符串空格
 * 可选值：0|ba：去除前后空格，1|b：去除前空格，2|a：去除后空格，3|all：去除所有空格，4|pro：去除所有空格，中间的空格保留一个。
 * Example: `trim('  a  b  ', 4) => 'a b'`
 * @param str 字符串
 * @param type 类型，默认为 0|ba，错误 type 会返回原字符串。
 * @returns
 */
export function trim(str: string, type: number | string = 0): string {
  switch (type) {
    case 0:
    case 'ba':
      return (str = str.trim());
    case 1:
    case 'b':
      return (str = str.replace(/^[\s]*/, ''));
    case 2:
    case 'a':
      return (str = str.replace(/[\s]*$/g, ''));
    case 3:
    case 'all':
      return (str = str.replace(/\s/g, ''));
    case 4:
    case 'pro':
      return (str = str.replace(/(^\s*)|(\s*$)|\s(?=\s)/g, '')); //去除前后空格并将中间的单个空格保留，多个空格变为一个空格。
    default:
      return str;
  }
}

/**
 * base64 编码
 * 使用 url 中时建议使用 encodeURIComponent 再次编码，因为单独 + 号在 url 中会被解析成空格。
 * 使用 encodeURIComponent 会把 + 解析为 %2B 与空格 %20 区分
 * Example:
 * `base64Encode('我是 leo') => '5oiR5pivIGxlbw=='`
 * `base64Encode('我是 leo', true) => '5oiR5pivIGxlbw'`
 * @param str 字符串
 * @param replaceChar 是否替换结果字符串中的特殊字符 '+/='，适用于 url 编码。
 * @returns
 */
export function base64Encode(str: string, replaceChar: boolean = false): string {
  // btoa(str).replace(/\+\//g, '-_').replace(/=/g, '');
  let result: string = Buffer.from(str, 'utf-8').toString('base64');
  return replaceChar ? result.replace(/\+\//g, '-_').replace(/=/g, '') : result;
}

/**
 * base64 解码
 * Example:
 * `base64Decode('5oiR5pivIGxlbw==') => '我是 leo'`
 * `base64Decode('5oiR5pivIGxlbw') => '我是 leo'`
 * @param str base64 字符串
 * @returns
 */
export function base64Decode(str: string): string {
  // let remainder = str.length % 4;
  // let padlen;
  // if (remainder) {
  //   padlen = 4 - remainder;
  //   str += str.repeat('=', padlen);
  // }
  // return atob(str.replace('-_', '+/'));
  return Buffer.from(str, 'base64').toString('utf8');
}

/**
 * 字符串脱敏(biugle 自定义规则)
 * Example:
 * `maskString(undefined) => '-'`
 * `maskString('13579246810') => '135****6810'`
 * `maskString('王小二') => '王***二'`
 * `maskString('123456789') => '123****89'`
 * `maskString('130223199809282927') => '130223********927'`
 * `maskString('广东省深圳市龙华区') => 广东省****华区'`
 * `maskString('广东省深圳市福田区福田保税区xxx小区xxx单元x栋x楼xxx号') => '广东省深圳市福田区******xx号'`
 * @param str
 * @returns
 */
export function maskString(str: string): string {
  str = str ? `${str}` : '';
  switch (str.length) {
    case 0:
      return '-';
    case 1:
      return '***';
    case 2:
      return str.charAt(0) + '***';
    case 3:
    case 4:
    case 5:
      return str.charAt(0) + '***' + str.charAt(str.length - 1);
    case 11:
      return str.substring(0, 3) + '*****' + str.substring(7);
    case 18:
      return str.substring(0, 5) + '********' + str.substring(15);
  }
  if (str.length > 6 && str.length < 11) {
    return str.substring(0, 3) + '****' + str.substring(str.length - 2);
  }
  if (str.length <= 11) {
    return str.substring(0, 3) + '*****';
  }
  if (str.length <= 18) {
    return str.substring(0, 3) + '*****' + str.substring(str.length - 3);
  }
  return str.substring(0, 9) + '******' + str.substring(str.length - 3);
}
