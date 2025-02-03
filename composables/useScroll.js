// useScroll.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useScroll() {
  const isScrolled = ref(false)

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 10
  }

  onMounted(() => {
    if (import.meta.client) {
      window.addEventListener('scroll', handleScroll)
    }
  })

  onUnmounted(() => {
    if (import.meta.client) {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return { isScrolled }
}
