<script lang="ts" setup>
const count = ref(0)
</script>

<template>
  <div>
    <Button @click="count++">Clicked {{ count }} times</Button>
  </div>
</template>