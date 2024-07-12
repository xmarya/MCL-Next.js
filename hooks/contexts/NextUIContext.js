import {NextUIProvider} from '@nextui-org/react'

export function NextUIContext({children}) {
    return (
      <NextUIProvider>
        {children}
      </NextUIProvider>
    )
  }