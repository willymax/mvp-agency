export default defineNuxtPlugin(() => {
  return {
    provide: {
      safeLocalStorage: {
        getItem(key) {
          if (import.meta.client) {
            return localStorage.getItem(key)
          }
          return null
        },
        setItem(key, value) {
          if (import.meta.client) {
            localStorage.setItem(key, value)
          }
        },
      },
    },
  }
})
