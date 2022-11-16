<template>
  <div class="home">
    <ItemsListComponent :items="items"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ItemsListComponent from '@/components/items/ItemsList.component.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ItemsListComponent,
  },
  setup(){
    const items: any[] = [
      {
        id:1,
        name: 'item 1'
      },
      {
        id:3,
        name: 'item 1'
      },
      {
        id:3,
        name: 'item 1'
      }
    ]
    return{
      items
    }
  }
});
</script>
