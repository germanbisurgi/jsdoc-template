<template>
  <section v-if="getMethods(doc.name).length">
    <h3>Methods summary</h3>

      <table>
        <tr>
          <th>Method</th>
          <th>Description</th>
          <th>Defined By</th>
        </tr>

        <tr v-for="method in getMethods(doc.name)">
          <td>
            <a :href="'#' + doc.name + '-' + method.name">{{ method.name }}()</a>
          </td>
          <td>{{ method.description }}</td>
          <td>
            <a v-if="method.inherits" class="btn btn-link" @click="changeTab('#' + method.inherits.split('#')[0])">
              {{ method.inherits.split('#')[0] }}
            </a>
            <span v-else>{{ doc.name }}</span>
          </td>
        </tr>
      </table>
  </section>
</template>

<script>
  import { mapActions } from 'pinia'
  import { docsStore } from '../stores/docs-store'
  import { mixins } from '../mixins/mixins'

  export default {
    name: 'MethodsSummary',
    mixins: [mixins],
    props: {
      doc: Object,
    },
    methods: {
      ...mapActions(docsStore, [
        'getMethods'
      ])
    }
  }
</script>
