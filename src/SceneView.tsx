import { OrbitControls, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { type MutableRefObject, type PropsWithChildren, useRef } from 'react'
import { NoToneMapping } from 'three'
import { Html } from './Html'
import { calcHtmlPositionToCenter } from './utils'

export function SceneView({ children }: PropsWithChildren) {
  const portal = useRef<HTMLDivElement>(null)
  return (
    <React.Fragment>
      <Canvas
        gl={{
          stencil: false,
          antialias: false,
          toneMapping: NoToneMapping,
          powerPreference: 'high-performance',
          pixelRatio: window.devicePixelRatio,
        }}
        camera={{
          fov: 45,
          position: [10, 0, 0],
        }}
      >
        <OrbitControls makeDefault />
        <ambientLight intensity={Math.PI / 2} />

        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={[1, 0, 0]} />
        </mesh>

        <Stats />

        <Html
          fullscreen
          portal={portal as MutableRefObject<HTMLDivElement>}
          style={{ height: 'calc(100vh + 2px)', pointerEvents: 'none' }}
          calculatePosition={calcHtmlPositionToCenter}
          zIndexRange={[0, 1]}
        >
          {children}
        </Html>
      </Canvas>
      <div ref={portal}></div>
    </React.Fragment>
  )
}
