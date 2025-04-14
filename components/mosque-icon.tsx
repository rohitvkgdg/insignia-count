import type { SVGProps } from "react"

export function MosqueIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 22V16a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6" />
      <path d="M2 12h20" />
      <path d="M12 2a4 4 0 0 0-4 4v8" />
      <path d="M12 2a4 4 0 0 1 4 4v8" />
      <path d="M8 8h8" />
      <path d="M8 6h8" />
      <path d="M8 10h8" />
      <path d="M10 22v-4" />
      <path d="M14 22v-4" />
    </svg>
  )
}
