
import { Store } from 'vuex'
import { RootStoreInterface } from './RootStore.interface'
/**
* @name RootStoreModel
* @description
* Extiende la declaración del store de Vuex con RootStoreInterface
*/
export class RootStoreModel<S> extends Store<RootStoreInterface> {
}
