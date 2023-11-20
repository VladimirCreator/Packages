import { useEffect } from 'react'

export default function useAPI(url: string, callback: (response: any) => void) {
  function effect() {
    const controller = new AbortController()
    const signal = controller.signal

    fetch(url, { signal })
      .then(response => response.json())
      .then(response => callback(response))

    return () => controller.abort()
  }
  useEffect(effect, [url])
}
