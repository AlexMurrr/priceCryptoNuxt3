export const useStore = defineStore('storeId', {    
    state: () => {
      return {       
        count: 1,
        name: 'Eduardo',
        isAdmin: true,
        items: [],
        hasChanged: true,
      }
    },
    getters: {
      doubleCount: (state) => state.count * 2,
      incrementGet: (state) => state.increment, 
    },
    actions: {
      // since we rely on `this`, we cannot use an arrow function
      increment() {
        return this.count++
      },
      randomizeCounter() {
        this.count = Math.round(100 * Math.random())
      },
    },
  })