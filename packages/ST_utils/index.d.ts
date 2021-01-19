/**
 * 添加 0
 * @param {string} num
 */
export declare function __num(num: string): string;
/**
 * 时间格式转化
 * 转化结果 YYMMDD HH:ii:ss
 * @param {Date} date
 */
export declare function __Time(date: Date): string;
/**
 * 将URL参数转化为对象形势
 * @param {String} params URL参数
 */
export declare function urlParams(params: string): object;
/**
 * 文件下载
 * @param {string} url
 * @returns {File}
 */
export declare function __DownLoad(href: string, name: string): void;
/**
 * 更改树形结构的键名
 * @param {Object} ref 对象
 * @param {String} children 子节点名称
 * @param {Object} props 更改的键名映射 { oldKey: newKey }
 */
export declare function mapTree(ref: object, children?: string, props?: object): object;
/**
 * 生成 guid
 */
export declare function __guid(): string;
/**
 * 设置图片、文字水印
 * @param {string} str 字符串
 */
export declare const setWatermark: (str: string) => string;
export declare const watermark: {
    set: (str: string) => void;
};
