<template>
  <div v-if="doc.augments" class="mb-3">
    <b>Inheritance: </b>

    <span class="btn btn-link" @click="changeTab('#' + doc.name)">
      {{ doc.name }}
    </span>

    <span> > </span>

    <span v-for="(className, index) in getInheritance(doc)">
      <span class="btn btn-link" @click="changeTab('#' + className)">
        {{ className }}
      </span>
      <span v-if="index !== getInheritance(doc).length - 1"> > </span>
    </span>
  </div>
</template>

<script>
  import { mapActions } from 'pinia'
  import { docsStore} from '../stores/docs-store'
  import { mixins } from '../mixins/mixins'

  export default {
    name: 'Augments',
    mixins: [mixins],
    props: {
      doc: Object,
    },
    methods: {
      ...mapActions(docsStore, [
        'getInheritance'
      ])
    }
  }
</script>
