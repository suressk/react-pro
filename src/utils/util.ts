/**
 * 生成虚拟列表数据
 * @param len 数组长度 默认 1000 条
 * @returns 
 */
export function randomVirualData(len: number = 1000) {
    const arr = new Array(len)
    for (let i = 0; i < len; i++) {
        arr[i] = {
            id: i,
            txt: `${i} - ${randomTxt(getRandomInteger(5, 20))}`
        }
    }
    return arr
}

/**
 * 生成区间内的随机整数 [min, max)
 * @param min 最小值
 * @param max 最大值
 * @returns integer number
 */
export function getRandomInteger(min: number, max: number) {
    return ~~(Math.random() * (max - min) + min)
}

const str = '0123456789qwertyuiopasdfghjklzxcvbnm'
const strLen = str.length - 1

/**
 * 生成随机字符串
 * @param len 字符串长度
 * @returns string txt
 */
export function randomTxt(len: number) {
    let res = ''
    for (let i = 0; i < len; i++) {
        res += str[getRandomInteger(0, strLen)]
    }
    return res
}
