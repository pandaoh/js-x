/**
 * 睡眠
 * Example: `await sleep(1000) => 等待 1000 毫秒再执行后面的`
 * @param milliseconds 睡眠时间
 * @returns
 */
export declare function sleep(milliseconds: number | undefined): Promise<void>;
/**
 * 参考了 to.js，扩展 Promise 用来直接帮助执行且处理异常。
 * promise 报错不会阻断后面的 Promise，适用于多个 await Promise 情况。
 * Example: `to(Promise.resolve(1)) => Promise.resolve(1)`
 * @param promise promise
 * @param res 成功回调
 * @param rej 失败回调
 * @returns
 */
export declare function to(promise: Promise<any>, res?: any, rej?: any): Promise<any>;
/**
 * Promise 重试
 * Example: `retry(() => Promise.reject(new Error('error')), 3) => Promise.reject(new Error('error')) 执行 3 次`
 * @param promise promise
 * @param count 次数
 * @param delay 延迟时间
 * @returns
 */
export declare function retry(promise: Promise<any>, count?: number, delay?: number): Promise<unknown>;
/**
 * 同步执行 promise，已做错误处理。
 * Example: `await all(...promise array) => [...result array]`
 * @param promises promises
 * @param errorHandler errorHandler
 * @returns
 */
export declare function all(promises: Promise<any>[], errorHandler?: any): Promise<any>;
/**
 * 同步执行多个 promise，返回最先成功的结果，已做错误处理。
 * Example: `await any(...promise array) => success result`
 * @param promises promises
 * @param errorHandler errorHandler
 * @returns
 */
export declare function any(promises: Promise<any>[], errorHandler?: any): Promise<any>;
/**
 * New 一个自带错误处理的 Promise，适用于只处理成功情况，不关注失败的 Promise，省去写 catch 的时间与空间。
 * Example: `new catchPromise(resolve, reject, rejectHandler) => Promise`
 * @param promiseHandler promiseHandler
 * @param errorHandler errorHandler
 * @returns
 */
export declare function catchPromise(promiseHandler: any, errorHandler?: any): Promise<any>;
//# sourceMappingURL=index.d.ts.map