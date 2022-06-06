/**
 * 
 * @param {*} data 
 * @returns 'bool' | 'number' | 'string' | 'undefined' | 'null' | 'array' | 'object' | 'function' | 'sorry! unrecognized'
 */
export function type(data){
  const dataType = Object.prototype.toString.call(data);
	return dataType.slice(8,-1).toLowerCase()
}
