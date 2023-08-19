<template>
  <div id="app">
    <navbar></navbar>

    <pre v-if="debug">{{ filters }}</pre>

    <div class="container">
      <div class="row row-between">
        <div class="col-12 col-lg-4 d-none d-lg-block">
          <nav-pills :docs="docs"></nav-pills>
        </div>

        <div class="col-12 col-lg-8">
          <div class="tab-content">
            <div class="tab-pane" v-for="(doc, index) in docs" :id="doc.name" :class="{ active: index === 0 }">

              <!----------------------------------------------------- module -->

              <div v-if="doc.kind === 'module'">
                <name :doc="doc"></name>
                <description :description="doc.description"></description>
                <members-summary :doc="doc"></members-summary>
                <constants-summary :doc="doc"></constants-summary>
                <functions-summary :doc="doc"></functions-summary>
                <functions-details :doc="doc"></functions-details>
              </div>

              <!------------------------------------------------------ class -->

              <div v-if="doc.kind === 'class'">
                <name :doc="doc"></name>
                <augments :doc="doc"></augments>
                <description :description="doc.classdesc"></description>
                <params :doc="doc"></params>
                <properties-summary :doc="doc"></properties-summary>
                <methods-summary :doc="doc"></methods-summary>
                <properties-details :doc="doc"></properties-details>
                <methods-details :doc="doc"></methods-details>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="debug">
      <div v-for="doc in docs">
        <div class="card mb-3">
          <div class="card-header">{{ doc.name }}</div>
          <div class="body">
            <pre>{{ doc }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'pinia'
  import {mapActions} from 'pinia'
  import {docsStore} from './stores/docs-store'
  import {mixins} from './mixins/mixins'
  import Navbar from './components/Navbar.vue'
  import NavPills from './components/NavPills.vue'
  import Augments from './components/Augments.vue'
  import Params from './components/Params.vue'
  import PropertiesSummary from './components/PropertiesSummary.vue'
  import PropertiesDetails from './components/PropertiesDetails.vue'
  import MethodsSummary from './components/MethodsSummary.vue'
  import MethodsDetails from './components/MethodsDetails.vue'
  import MembersSummary from './components/MembersSummary.vue'
  import ConstantsSummary from './components/ConstantsSummary.vue'
  import FunctionsSummary from './components/FunctionsSummary.vue'
  import FunctionsDetails from './components/FunctionsDetails.vue'
  import Description from './components/Description.vue'
  import Name from './components/Name.vue'

  export default {
    mixins: [mixins],
    components: {
      Navbar,
      NavPills,
      Augments,
      Params,
      PropertiesSummary,
      PropertiesDetails,
      MethodsSummary,
      MethodsDetails,
      MembersSummary,
      ConstantsSummary,
      FunctionsSummary,
      FunctionsDetails,
      Description,
      Name
    },
    computed: {
      ...mapState(docsStore, [
        'debug',
        'docs',
        'classes',
        'modules',
        'documented',
        'filters'
      ]),
    },
    methods: {
      ...mapActions(docsStore, [
        'getProperties',
        'getMethods',
        'getModuleFunctions',
        'getClass',
        'getParentClass',
        'getInheritance'
      ])
    }
  }
</script>

<style lang="scss">
  @import "scss/main";
</style>
