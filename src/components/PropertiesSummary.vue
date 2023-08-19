<template>
  <section v-if="getProperties(doc.name).length">
    <h3>Properties summary</h3>

      <table>
        <tr>
          <th>Property</th>
          <th>Description</th>
          <th>Defined By</th>
        </tr>

        <tr v-for="property in getProperties(doc.name)">
          <td>
            <a :href="'#' + doc.name + '-' + property.name">{{ property.name }}</a>
          </td>
          <td>{{ property.description }}</td>
          <td>
            <a v-if="property.inherits" class="btn btn-link" @click="changeTab('#' + property.inherits.split('#')[0])">
              {{ property.inherits.split('#')[0] }}
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
    name: 'PropertiesSummary',
    mixins: [mixins],
    props: {
      doc: Object,
    },
    methods: {
      ...mapActions(docsStore, [
        'getProperties'
      ])
    }
  }
</script>
