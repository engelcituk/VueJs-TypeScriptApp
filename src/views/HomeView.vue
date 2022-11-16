<template>
  <div class="home">
    <ItemsListComponent :items="items"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import ItemsListComponent from '@/components/items/ItemsList.component.vue'
import { ItemInterface } from '@/models/items/Item.interface'

export default defineComponent({
  name: 'Home',
  components: {
    ItemsListComponent,
  },
  setup(){
    const items: ItemInterface[] = reactive([
      {
        id:1,
        name: 'item 1',
        selected: false,
      },
      {
        id:3,
        name: 'item 2',
        selected: false,
      },
      {
        id:3,
        name: 'item 3',
        selected: false,
      }
    ])
    return{
      items
    }
  }
});
</script>
