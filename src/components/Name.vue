<template>
  <h2>{{ doc.kind }}: {{ doc.name }}</h2>
</template>

<script>
  export default {
    name: 'Name',
    props: {
      doc: Object,
    }
  }
</script>
