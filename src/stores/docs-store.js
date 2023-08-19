import { defineStore } from 'pinia'
import jsdoc from '../assets/jsdoc'

export const docsStore = defineStore('docs', {
  state: () => ({
    debug: false,
    json: jsdoc,
    filterslist: [
      'access',
      'kind'
    ]
  }),
  getters: {
    docs () {
      return [...this.modules, ...this.classes]
    },
    classes () {
      return this.documented.filter((data) => {
        return data.kind === 'class'
      })
    },
    modules () {
      return this.documented.filter((data) => {
        return data.kind === 'module'
      })
    },
    documented () {
      return this.json.filter((data) => {
        delete data.meta
        return !data.undocumented
      })
    },
    filters () {
      const filters = {}

      this.json.forEach((doc) => {
        Object.keys(doc).forEach((property) => {
          if (this.filterslist.includes(property)) {
            if (!filters[property]) {
              filters[property] = []
            }

            filters[property].push(doc[property])

            filters[property] = [...new Set(filters[property])]
          }
        })
      })

      return filters
    }
  },
  actions: {
    getProperties (className) {
      return this.documented.filter((data) => {
        return data.memberof === className && data.kind === 'member'
      })
    },
    getMethods (className) {
      return this.documented.filter((data) => {
        return data.memberof === className && data.kind === 'function'
      })
    },
    getModuleFunctions (moduleName) {
      return this.documented.filter((data) => {
        return data.memberof === 'module:' + moduleName && data.kind === 'function'
      })
    },
    getModuleConstants (moduleName) {
      return this.documented.filter((data) => {
        return data.memberof === 'module:' + moduleName && data.kind === 'constant'
      })
    },
    getModuleMembers (moduleName) {
      return this.documented.filter((data) => {
        return data.memberof === 'module:' + moduleName && data.kind === 'member'
      })
    },
    getClass (className) {
      return this.classes.find((data) => {
        return data.name === className
      })
    },
    getParentClass (doc) {
      return doc.augments[0]
    },
    getInheritance (doc, lastInheritance = []) {
      const inheritance = [...lastInheritance]

      if (doc.augments) {
        const parentClass = doc.augments[0]
        inheritance.push(parentClass)
        const parentClassDoc = this.getClass(parentClass)

        if (parentClassDoc.augments) {
          return this.getInheritance(parentClassDoc, inheritance)
        }
      }

      return inheritance
    }
  }
})
