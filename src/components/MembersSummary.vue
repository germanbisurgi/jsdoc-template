<template>
  <section v-if="getModuleMembers(doc.name).length">
    <h3>Members summary</h3>

    <table>
      <tr>
        <th>Member</th>
        <th>Description</th>
      </tr>

      <tr v-for="member in getModuleMembers(doc.name)">
        <td><code>{{ member.name }}</code></td>
        <td>{{ member.description }}</td>
      </tr>
    </table>
  </section>
</template>

<script>
  import {mapActions} from 'pinia'
  import {docsStore} from '../stores/docs-store'
  import {mixins} from '../mixins/mixins'

  export default {
    name: 'MembersSummary',
    mixins: [mixins],
    props: {
      doc: Object,
    },
    methods: {
      ...mapActions(docsStore, [
        'getModuleMembers'
      ])
    }
  }
</script>
