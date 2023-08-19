<template>
  <span class="visually-hidden" :id="id" style="top: -65px;"></span>
</template>

<script>
  export default {
    name: 'Anchor',
    props: {
      id: String,
    }
  }
</script>
