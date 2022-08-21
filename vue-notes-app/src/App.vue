<script lang="ts">
import { defineComponent } from "vue";
import List from "./components/List.vue";

export default defineComponent({
  components:{
    List
  }
})
</script>

<template>
  <header>
      <h1> your notes</h1>
  </header>

  <main>
    <List />
  </main>
</template>
