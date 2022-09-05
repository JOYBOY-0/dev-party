import * as React from "react"
import { SVGProps } from "react"

const CodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Capa 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    {...props}
  >
    <path
      d="M80.63 134.27 46.36 100l34.27-34.27L70.2 55.3 25.5 100l44.7 44.7 10.43-10.43Zm38.74 0L153.64 100l-34.27-34.27L129.8 55.3l44.7 44.7-44.7 44.7-10.43-10.43Z"
      style={{
        fill: `${props.fill || "#FFF"}`,
      }}
    />
  </svg>
)

export default CodeIcon