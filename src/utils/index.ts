import type { Camera, Object3D } from 'three'

export function calcHtmlPositionToCenter(
  el: Object3D,
  camera: Camera,
  size: { width: number; height: number },
): number[] {
  return [size.width / 2, size.height / 2 - 1]
}
