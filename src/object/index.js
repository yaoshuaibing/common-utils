export const  omit = function(object, props=[]){
  let res = {}
  Object.keys(object).forEach(key=>{
    if(!props.includes(key)){
      res[key] = typeof object[key] === 'object' && object[key] !== null ?
        JSON.parse(JSON.stringify(object[key])):
        object[key]
    }
  })
  return res
}