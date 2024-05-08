import { useMediaQuery } from '@react-hookz/web'

export function useDevice() {
  const isMobile = useMediaQuery('(max-width: 1023px)', { initializeWithValue: false })
  const isDesktop = useMediaQuery('(min-width: 1024px)', { initializeWithValue: false })

  return { isMobile, isDesktop }
}
