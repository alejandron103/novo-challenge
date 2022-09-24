export default async function getItemsMenu(){
    const request = await fetch('servicio.json')
    if(request.ok){
        const itemsMenuJson = await request.json()
        const { lista } = itemsMenuJson
        const itemsMenu = Object.entries(lista[0])
        return itemsMenu
    }
    console.warn('items menu not found')
    return null
}