import { useMediaQuery } from '@react-hookz/web'

export function useDevice() {
  const isMobile = useMediaQuery('(max-width: 768px)', { initializeWithValue: false })
  const isDesktop = useMediaQuery('(min-width: 769px)', { initializeWithValue: false })

  return { isMobile, isDesktop }
}
