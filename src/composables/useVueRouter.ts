import { useRoute, useRouter } from 'vue-router'

export const useVueRouter = () => {
  const router = useRouter()
  const route = {
    ...useRoute(),
    host: window.location.host,
    hostname: window.location.hostname,
    href: window.location.href,
    origin: window.location.origin,
    port: window.location.port,
    protocol: window.location.protocol
  }

  return {
    router,
    route
  }
}
