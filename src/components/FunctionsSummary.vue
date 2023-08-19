<template>
  <section v-if="getModuleFunctions(doc.name).length">
    <h3>Functions summary</h3>

    <table>
      <tr>
        <th>Function</th>
        <th>Description</th>
      </tr>

      <tr v-for="method in getModuleFunctions(doc.name)">
        <td>
          <a :href="'#' + doc.name + '-' + method.name">{{ method.name }}()</a>
        </td>
        <td>{{ method.description }}</td>
      </tr>
    </table>
  </section>
</template>

<script>
  import {mapActions} from 'pinia'
  import {docsStore} from '../stores/docs-store'
  import {mixins} from '../mixins/mixins'

  export default {
    name: 'FunctionsSummary',
    mixins: [mixins],
    props: {
      doc: Object,
    },
    methods: {
      ...mapActions(docsStore, [
        'getModuleFunctions'
      ])
    }
  }
</script>
