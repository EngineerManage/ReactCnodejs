import { get } from './instance';

const origin = 'https://cnodejs.org/api/v1';
/**
 * 获取主题首页
 * @param 参数如下{page:1,tab:ask,limit,mdrender}
 * page 页数
 * tab 主题分类。目前有 ask share job good
 * limit 每一页的主题数量
 * mdrender 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本
 */
export function getTopics(data) {
    const url = `${origin}/topics`;
    return get(url, data);
}
