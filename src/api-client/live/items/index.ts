import { ItemsApiClientUrlsInterface, ItemsApiClientInterface, ItemsApiClientModel } from '@/models/api-client/items'

const urls: ItemsApiClientUrlsInterface = {
    fetchItems: '/ruta/a/un/endpoint/de/api/real'
}

// instancia ItemsApiClient apuntando a la URL que devuelve datos reales
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(urls)
// exporta la instancia
export default itemsApiClient
    