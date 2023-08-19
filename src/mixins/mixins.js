export const mixins = {
  methods: {
    changeTab (href) {
      const navItems = document.querySelectorAll('[href="' + href + '"]')

      navItems.forEach((navItem) => {
        navItem.click()
      })
    },
    getParamsNames (params = []) {
      const reducer = (accumulator, currentValue) => {
        accumulator.push(currentValue.name)
        return accumulator
      }

      return params.reduce(reducer, [])
    }
  }
}
