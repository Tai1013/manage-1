import { provide, inject, nextTick, onUnmounted } from 'vue'

type FunctionType = ((fn?: FunctionType) => void)

interface ProvideRegister {
  (event: string, parentFns?: FunctionType): FunctionType
}

interface InjectRegister {
  (event: string): (fn: FunctionType) => void
}

const registerPrefix = 'register'
const deregisterPrefix = 'deregister'

export const useProvideRegister: ProvideRegister = (event, parentFns) => {
  const childFuns: FunctionType[] = []

  provide(registerPrefix + event, (fn: FunctionType) => {
    childFuns.push(fn)
  })

  const provideHandler = () => {
    parentFns?.()
    nextTick(() => {
      childFuns.forEach(fn => fn())
    })
  }

  provide(deregisterPrefix + event, (fn: FunctionType) => {
    const index = childFuns.findIndex(fn2 => fn === fn2)
    if (index === -1) return
    childFuns.splice(index, 1)
  })

  return provideHandler
}

export const useInjectRegister: InjectRegister = event => {
  const register = inject<FunctionType>(registerPrefix + event, () => { undefined })
  const deregister = inject<FunctionType>(deregisterPrefix + event, () => { undefined })

  const registerFns: FunctionType[] = []

  onUnmounted(() => {
    registerFns.forEach(fn => deregister(fn))
  })

  return fn => {
    register(fn)
    registerFns.push(fn)
  }
}
