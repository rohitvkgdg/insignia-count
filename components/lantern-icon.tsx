import type { SVGProps } from "react"

export function LanternIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <path d="M12 2C8.13 2 5 5.13 5 9v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9c0-3.87-3.13-7-7-7z" opacity="0.2" />
      <path d="M12 2C8.13 2 5 5.13 5 9v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9c0-3.87-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5v7H7V9c0-2.76 2.24-5 5-5z" />
      <path d="M10 21v1h4v-1h-4z" />
      <path d="M9 18h6v2H9z" />
      <path d="M12 6a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1z" />
      <path d="M12 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    </svg>
  )
}
