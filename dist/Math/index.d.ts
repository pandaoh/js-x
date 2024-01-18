/**
 * 除法函数
 * @example
 * div(1, 2); /// 0.5
 * div(0.55, 100); /// 0.0055
 * @param div1 被除数
 * @param div2 除数
 * @returns
 */
export declare function div(div1: number | string, div2: number | string): number;
/**
 * 乘法函数
 * @example
 * times(1, 2); /// 2
 * times(0.55, 100); /// 55
 * @param mul1 被乘数
 * @param mul2 乘数
 * @returns
 */
export declare function times(mul1: number | string, mul2: number | string): number;
/**
 * 加法函数
 * @example
 * add(1, 2); /// 3
 * add(0.1, 0.2); /// 0.3
 * @param add1 被加数
 * @param add2 加数
 * @returns
 */
export declare function add(add1: number | string, add2: number | string): number;
/**
 * 减法函数
 * @example
 * sub(1, 2); /// -1
 * sub(0.55, 0.1); /// 0.45
 * @param sub1 被减数
 * @param sub2 减数
 * @returns
 */
export declare function sub(sub1: number | string, sub2: number | string): number;
/**
 * 获取平均数
 * @example
 * average(1, 2, 3, 4); /// 2.5
 * average(1, 2, 3, 4.123); /// 2.53075
 * @param args 需要计算的数...
 * @returns
 */
export declare function average(...args: any[]): number;
/**
 * 计算所有数
 * @example
 * calculate('+', 1, 2, 3, 4); /// 10
 * calculate('+', 1, 2, 3, undefined); /// 6
 * calculate('*', 1, 2, 3); /// 6
 * calculate('*', 1, 2, 3, undefined); /// 0
 * calculate('-', 10, 2, 3); /// 5
 * calculate('/', 10, 2, 2); /// 2.5
 * @param operator 操作符
 * @param args 需要计算的数...
 * @returns
 */
export declare function calculate(operator: string, ...args: any[]): number;
/**
 * 获取绝对值
 * @example
 * abs(-1); /// 1
 * abs(1); /// 1
 * @param value 数值
 * @returns
 */
export declare function abs(value: number): number;
/**
 * 检查一个数字是否偶数
 * @example
 * isEven(-2); /// true
 * isEven(1); /// false
 * @param value 数值
 * @returns
 */
export declare function isEven(value: number): boolean;
/**
 * 去尾法获取数值
 * @example
 * float(1.135, 0, true); /// '1'
 * float(1.135, 2, true); /// '1.13'
 * float(1.135, 1); /// 1.1
 * float(1.135, 4); /// 1.135
 * float(1.135, 4, true); /// '1.1350'
 * @param value 数值
 * @param d 精度
 * @param isStr 是否返回字符串
 * @returns
 */
export declare function float(value: number, d?: number, isStr?: boolean): number | string;
/**
 * 判断一个数是否在指定范围（闭区间）
 * @example
 * inRange(null, 0, 3); /// false
 * inRange(0, 0, 3); /// true
 * inRange(3, 0, 3); /// true
 * inRange(5, 0, 3); /// false
 * @param value 数值
 * @param min 最小值
 * @param max 最大值
 * @returns
 */
export declare function inRange(value: any, min: number, max: number): boolean;
/**
 * 获取百分比
 * @example
 * getPercentage(102, 1020, 2); /// 10
 * getPercentage(102, 1020, 2, { float: true, suffix: true }); /// '10.00%'
 * getPercentage(17, 1020, 2); /// 1.67
 * getPercentage(1020, null, 2); /// 0
 * getPercentage(0, 1020, 2, { float: false, suffix: true }); /// '0%'
 * @param value 数值
 * @param total 总数
 * @param options 配置
 * @returns
 */
export declare function getPercentage(value: any, total: any, decimals?: number, options?: {
    float: boolean;
    suffix: boolean;
}): string | number;
/**
 * 转换数字为大致数字描述
 * @example
 * markNumber(10000123111); /// '100.00 亿'
 * markNumber(12345); /// '1.2 万'
 * markNumber(123); /// '123'
 * @param value 数值
 * @returns
 */
export declare function markNumber(value: number): string;
/**
 * 提供进制转换，最大为 64 进制。
 * @example
 * transferNumber(100); /// '1100100'
 * transferNumber(1100100, 2, 10); /// 100
 * @param number 数值
 * @param from 原进制
 * @param to 目标进制
 * @returns
 */
export declare function transferNumber(number: number, from?: number, to?: number): string | number;
//# sourceMappingURL=index.d.ts.map