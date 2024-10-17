import { defineStore } from 'pinia'

export const useVersionStore = defineStore('version', {
  state: () => ({
    version: 'kai',
    autoEquip: false
  }),
  getters: {
    getVersion: (state) => state.version,
    getAutoEquip: (state) => state.autoEquip
  },
  actions: {
    setVersion(data) {
      this.version = data
    },
    setAutoEquip(data) {
      this.autoEquip = data
    }
  },
  persist: true
})
