import type { RefObject } from 'react'
import { useOutletContext } from 'react-router-dom'

export function Outlet1() {
  const { node } = useOutletContext<{ node: RefObject<HTMLDivElement> }>()

  return (
    <div
      ref={node}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
      }}
    >
      <div style={{ width: '200px', height: '100%', backgroundColor: 'rgba(1, 0, 0, 0.3)', pointerEvents: 'auto' }}>
        Outlet1
      </div>
    </div>
  )
}
