<template>
  <ul class="nav nav-pills flex-column">
    <li class="nav-item" v-for="(doc, index) in docs">
      <a class="nav-link" :class="{ active: index === 0 }" :href="'#' + doc.name" data-bs-toggle="tab">
        <span class="badge bg-primary">{{ doc.kind }}</span> <span>{{ doc.name }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      docs: Array,
        default: []
    },
    name: 'NavPills'
  }
</script>
