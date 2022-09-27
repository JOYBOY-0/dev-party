import * as React from "react"
import { SVGProps } from "react"

const ProductivityIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Capa 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    width={'100%'}
    height={'100%'}
    {...props}
  >
    <path
      d="M78.86 170.5h42.3v-14.1h-42.3v14.1ZM89.72 30.56C70.33 34.51 54.89 50.37 51.44 69.9c-3.6 20.37 5.36 38.92 20.37 49.42v22.98h56.4v-22.98c12.76-8.95 21.15-23.69 21.15-40.47 0-30.6-27.99-54.78-59.64-48.29Zm30.39 77.2-5.99 4.23v16.21h-28.2v-16.21l-5.99-4.23c-9.52-6.63-15.16-17.41-15.16-28.9 0-19.46 15.79-35.25 35.25-35.25s35.25 15.79 35.25 35.25c0 11.49-5.64 22.28-15.16 28.9Z"
      style={{
        fill: `${props.fill || "#FFF"}`,
      }}
    />
  </svg>
)

export default ProductivityIcon
