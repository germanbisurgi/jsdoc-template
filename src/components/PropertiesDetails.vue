<template>
  <section v-if="getProperties(doc.name).length">
    <h3>Properties details</h3>

    <article class="card mb-3" v-for="property in getProperties(doc.name)">
      <anchor :id="doc.name + '-' + property.name"></anchor>
      <div class="card-header">
        <code>{{ property.name }}</code>
      </div>
      <div class="card-body">
        <description :description="property.description"></description>
        <access :doc="property"></access>
      </div>
    </article>
  </section>
</template>

<script>
  import {mapActions} from 'pinia'
  import {docsStore} from '../stores/docs-store'
  import {mixins} from '../mixins/mixins'
  import Description from '../components/Description.vue'
  import Anchor from '../components/Anchor.vue'
  import Access from '../components/Access.vue'

  export default {
    name: 'PropertiesDetails',
    components: {
      Description,
      Anchor,
      Access
    },
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
