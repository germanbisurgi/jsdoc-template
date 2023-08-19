<template>
  <caption class="visually-hidden">Params</caption>
  <table v-if="doc.params && doc.params.length">
    <tr>
      <th>Param</th>
      <th>Description</th>
      <th>Type</th>
    </tr>

    <tr v-for="param in doc.params">
      <td>
        <code>{{ param.name }}</code>
      </td>
      <td>{{ param.description }}</td>
      <td>
        <code v-if="param.type">{{ param.type.names.join(' | ') }}</code>
      </td>
    </tr>
  </table>
</template>

<script>
  export default {
    name: 'Params',
    props: {
      doc: Object,
    }
  }
</script>
