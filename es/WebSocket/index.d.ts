/**
 * 初始化 websocket
 * Example: `initWebSocket({ url: 'ws://localhost:8080/ws', timeout: 30000, onOpen: () => {}, onMessage: () => {}, onClose: () => {}, onError: () => {}, reconnect: {} })`
 * @param options `{url, onOpen, onMessage, onClose, onError, timeout, reconnect: {times, delay, onReconnect} | boolean} WebSocket 配置`
 * @returns {WebSocket}
 */
export declare function initWebSocket(options: {
    url: string;
    onOpen?: Function;
    onClose?: Function;
    onMessage?: Function;
    onError?: Function;
    timeout?: number;
    reconnect?: {
        times: number;
        delay?: number;
        onReconnect?: Function;
    };
}): WebSocket | undefined;
/**
 * 发送消息
 * Example:
 * `sendWsMessage({ type: 'login', data: { username: 'admin', password: '123456' }}, true) => true/false`
 * `sendWsMessage('testMsg') => true/false`
 * @param message 消息
 * @param isJSONEncode 是否 JSON 序列化
 * @returns
 */
export declare function sendWsMessage(message: any, isJSONEncode?: boolean): boolean;
/**
 * 关闭 websocket
 * Example: `closeWebSocket() => true/false`
 * @returns
 */
export declare function closeWebSocket(): boolean;
/**
 * 获取 websocket 实例
 * Example: `getWebSocket() => [websocket object]`
 * @returns
 */
export declare function getWebSocket(): WebSocket | undefined;
/**
 * 设置 websocket binaryType default: 'blob'
 * Example: `setWsBinaryType() => true/false`
 * @param binaryType 二进制类型 default: 'arraybuffer'
 * @returns
 */
export declare function setWsBinaryType(binaryType?: BinaryType): boolean;
//# sourceMappingURL=index.d.ts.map