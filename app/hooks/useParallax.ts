import { useEffect } from 'react'

export function useParallax(ref: React.RefObject<HTMLElement>) {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (ref.current) {
                const { clientX, clientY } = e
                const { width, height } = ref.current.getBoundingClientRect()
                const x = (clientX / width - 0.5) * 20
                const y = (clientY / height - 0.5) * 20
                ref.current.style.transform = `translate(${x}px, ${y}px)`
            }
        }

        document.addEventListener('mousemove', handleMouseMove)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [ref])
}

