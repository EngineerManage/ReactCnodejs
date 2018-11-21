/*
 * @Author: WuFengliang 
 * @Date: 2018-11-21 14:27:05 
 * @Description:   工具 
 * @Last Modified time: 2018-11-21 14:27:05 
 */

export function BeforeDay(date) {
    const compare = new Date().getTime() - new Date(date).getTime();
    const day = 1000 * 60 * 60 * 24;
    const hour = 1000 * 60 * 60;
    const minute = 1000 * 60;

    if (compare / day > 1) {
        return `${parseInt(compare / day)}天前`;
    }

    if (compare / hour > 1) {
        return `${parseInt(compare / hour)}小时前`;
    }

    if (compare / minute > 1) {
        return `${parseInt(compare / minute)}分钟前`;
    }
}