<template>
  <div class="home">
    <ItemsListComponent :items="items" :loading="loading"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted } from 'vue';
import ItemsListComponent from '@/components/items/ItemsList.component.vue'
import { ItemInterface } from '@/models/items/Item.interface'
import store from '@/store'


export default defineComponent({
  name: 'Home',
  components: {
    ItemsListComponent,
  },
  setup(){
    const items = computed( () => {
      return store.state.items
    })
    const loading = computed(() => {
      return store.state.loading
    })

    //una vez montado se pide al action los datos
    onMounted(() => {
      store.dispatch('loadItems')
    })

    return{
      items,
      loading
    }
  }
});
</script>
