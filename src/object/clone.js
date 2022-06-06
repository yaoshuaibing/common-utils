/**
 * 浅拷贝
 * @param {*} target 
 * @returns 
 */
export function clone (target) {
  if (target instanceof Array) {
    return target.reduce((pre, item) => {
      pre.push(item)
      return pre
    }, [])
  } else if (target!==null && typeof target==='object') {
    return {...target}
  } else {// 如果不是数组或对象, 直接返回
    return target
  }
}
