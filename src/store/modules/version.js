import { defineStore } from 'pinia'

export const useVersionStore = defineStore('version', {
  state: () => ({
    version: 'kai'
  }),
  getters: {
    getVersion: (state) => state.version
  },
  actions: {
    setVersion(data) {
      this.version = data
    }
  },
  persist: true
})
