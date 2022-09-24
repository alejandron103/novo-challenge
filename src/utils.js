export function getSubItems(items){
    const [ subItems ] = items
    return typeof subItems === 'object' ? Object.entries(subItems) : []
}

export function findElementInMapObject(key, mapObject){
    if(mapObject.has(key)){
       return mapObject.get(key)
    }
    return key
}