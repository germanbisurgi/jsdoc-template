<template>
  <section v-if="getMethods(doc.name).length">
    <h3>Methods details</h3>

    <article class="card mb-3" v-for="method in getMethods(doc.name)">
      <anchor :id="doc.name + '-' + method.name"></anchor>
      <div class="card-header">
        <code>{{ method.name }}({{ getParamsNames(method.params).join(', ') }})</code>
      </div>
      <div class="card-body">
        <description :description="method.description"></description>
        <access :doc="method"></access>
        <returns :doc="method"></returns>
        <params :doc="method"></params>
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
  import Access from '../components/Access.vue'

  export default {
    name: 'MethodsDetails',
    components: {
      Returns,
      Description,
      Params,
      Anchor,
      Access
    },
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
