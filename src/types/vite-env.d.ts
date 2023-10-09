/// <reference types="vite/client" />

interface ImportMetaEnv {}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

export {}

declare global {
  type Nullable<T> = T | null
}
