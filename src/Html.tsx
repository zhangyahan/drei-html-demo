import { Html as HtmlImpl } from '@react-three/drei'
import type { HtmlProps } from '@react-three/drei/web/Html'
import { forwardRef } from 'react'
import { useContextBridge } from 'its-fine'

export const Html = forwardRef<HTMLDivElement, HtmlProps>(function Html({ children, ...props }, ref) {
  const Bridge = useContextBridge()
  return (
    <HtmlImpl {...props} ref={ref} onWheel={(e) => e.nativeEvent.stopPropagation()}>
      <Bridge>{children}</Bridge>
    </HtmlImpl>
  )
})
