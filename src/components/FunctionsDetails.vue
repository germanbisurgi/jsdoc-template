<template>
  <section v-if="getModuleFunctions(doc.name).length">
    <h3>Functions details</h3>

    <article class="card" v-for="func in getModuleFunctions(doc.name)">
      <anchor :id="doc.name + '-' + func.name"></anchor>
      <div class="card-header">
        <code>{{ func.name }}({{ getParamsNames(func.params).join(', ') }})</code>
      </div>
      <div class="card-body">
        <description :description="func.description"></description>
        <returns :doc="func"></returns>
        <params :doc="func"></params>
      </div>
    </article>
  </section>
</template>

<script>
  import {mapActions} from 'pinia'
  import {docsStore} from '../stores/docs-store'
  import {mixins} from '../mixins/mixins'
  import Params from '../components/Params.vue'
  import Description from '../components/Description.vue'
  import Returns from '../components/Returns.vue'
  import Anchor from '../components/Anchor.vue'

  export default {
    name: 'FunctionsDetails',
    components: {
      Returns,
      Description,
      Params,
      Anchor
    },
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
