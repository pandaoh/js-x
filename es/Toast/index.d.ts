/**
 * @type
 * xToast Options Type
 * @category Toast-组件
 */
export declare type xToastOptions = {
    content: string;
    type?: 'info' | 'success' | 'error' | 'warning' | 'loading' | 'default';
    delay?: number;
    position?: string;
    parent?: string;
    color?: string;
    background?: string;
    fontSize?: string;
    iconSize?: string;
};
/**
 * 显示 Toast
 * `export function showToast(options: xToastOptions);`
 * @example
 * showToast({ type: 'success', content: '这是一个演示 Toast' }); /// 显示 success 类型的 toast
 * @param options 显示配置
 * @returns
 * @category Toast-组件
 */
export declare const showToast: (options: xToastOptions) => HTMLDivElement;
/**
 * 隐藏 toast 不传值关闭所有 toast
 * @example
 * const $toast = showToast({ content: '这是一个演示 Toast' }); /// hideToast($toast);
 * @param toast toast 实例
 * @returns
 * @category Toast-组件
 */
export declare function hideToast(toast?: any): void;
/**
 * 快速展示 Toast
 * @example
 * const hide = Toast('这是一个快速演示 Toast'); /// hide();
 * @param msg 内容
 * @param type 类型
 * @returns
 * @category Toast-组件
 */
export declare function Toast(msg: string, type?: 'info' | 'success' | 'error' | 'warning' | 'loading' | 'default'): any;
/**
 * Loading Toast 不会自动关闭
 * @example
 * const hide = Loading(msg?); /// hide();
 * @param msg 内容
 * @returns
 * @category Toast-组件
 */
export declare function Loading(msg: string): any;
//# sourceMappingURL=index.d.ts.map