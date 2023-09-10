<template>
  <p v-if="doc.returns" class="mb-3">
    <b>Returns: </b>
    <code>{{ getReturnsNames(doc.returns).join('|') }}</code>
  </p>
</template>

<script>
  export default {
    name: 'Returns',
    props: {
      doc: Object,
    },
    methods: {
      getReturnsNames (returns) {
        const reducer = (accumulator, currentValue) => {
          if (currentValue.type) {
            accumulator.push(currentValue.type.names)
          }
          return accumulator
        }

        return returns.reduce(reducer, [])
      },
    }
  }
</script>
