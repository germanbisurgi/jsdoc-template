<template>
  <p v-if="description" class="mb-3">
    <b>Description: </b>
    <span>{{ description }}</span>
  </p>
</template>

<script>
  export default {
    name: 'Augments',
    props: {
      description: String,
    }
  }
</script>
