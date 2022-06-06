/* 
入口js
向外暴露工具函数
*/
export { throttle } from './function/throttle'
export { debounce } from './function/debounce'
export {extractTree,makeTree} from './array/tree'
export {chunk} from './array/chunk'
export {compareArr} from './array/compareArr'
export {mergeObject} from './object/mergeObject'
export {clone} from './object/clone'
export {compareObj} from './object/compareObj'
export {deepClone1, deepClone2, deepClone3, deepClone} from './object/deepClone'
export {reverseString, palindrome, truncate, getDate, stampInterval, getQuery, dateByday, trim, changeCase} from './string/index'

export { formatFloat, formatAmount, sumBigNumber,random,numToChinese,amountToChinese } from './number/index'
export { browserType } from './browser/index'
export {default as storage} from './storage/index'