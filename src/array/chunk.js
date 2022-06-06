/* 
将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组
*/

export function chunk(array, size=1) {
  if(size === 1){
    return array
  }
  if(array.lenth<size){
    return array
  }
  return array.reduce((total,item,index)=>{
    if(index % size){
      const lastItem =  total.pop()
      total.push([...lastItem,item])
      return total
    }else{
      return [...total,[item]]
    }
  },[])
}