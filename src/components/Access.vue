<template>
  <p v-if="doc.access" class="mb-3">
    <b>Access: </b>
    <span>{{ doc.access }}</span>
  </p>
</template>

<script>
  export default {
    name: 'Access',
    props: {
      doc: Object,
    }
  }
</script>
