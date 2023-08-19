<template>
  <section v-if="getModuleConstants(doc.name).length">
    <h3>Constants summary</h3>

    <table>
      <tr>
        <th>Constant</th>
        <th>Description</th>
      </tr>

      <tr v-for="constant in getModuleConstants(doc.name)">
        <td><code>{{ constant.name }}</code></td>
        <td>{{ constant.description }}</td>
      </tr>
    </table>
  </section>
</template>

<script>
  import {mapActions} from 'pinia'
  import {docsStore} from '../stores/docs-store'
  import {mixins} from '../mixins/mixins'

  export default {
    name: 'ConstantsSummary',
    mixins: [mixins],
    props: {
      doc: Object,
    },
    methods: {
      ...mapActions(docsStore, [
        'getModuleConstants'
      ])
    }
  }
</script>
