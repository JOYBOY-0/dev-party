import * as React from "react"
import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> {
  className?: string
  text?: string,
  fill?: string,
  background?: string,
  image?: string,
}

const IconCard = (props: Props) => (
  <svg
    id="uuid-5a17d4de-48ff-4064-b08f-f8d3c1260dc7"
    data-name="Capa 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 260"
    {...props}
  >
    <defs>
      <style>
        {".uuid-722d8a7b-918c-43ad-a81e-b0eb0343dbf4{fill:#0f172a}"}
      </style>
    </defs>
    <g id="uuid-e9de52c7-4e2a-4e35-abb3-d406ba3a49e1" data-name="category_card">
      <rect data-name="bg"
        id="uuid-49b98f35-6431-4368-8a97-24df2632d3c2"
        width={200}
        height={260}
        rx={12}
        ry={12}
        style={{
          fill: `${props.background || "rgb(71 85 105)"}`,
        }}
      />
      {/* <path
        className="uuid-722d8a7b-918c-43ad-a81e-b0eb0343dbf4"
        d="M80.86 170.5h42.3v-14.1h-42.3v14.1ZM91.72 30.56C72.33 34.51 56.89 50.37 53.44 69.9c-3.6 20.37 5.36 38.92 20.37 49.42v22.98h56.4v-22.98c12.76-8.95 21.15-23.69 21.15-40.47 0-30.6-27.99-54.78-59.64-48.29Zm30.39 77.2-5.99 4.23v16.21h-28.2v-16.21l-5.99-4.23c-9.52-6.63-15.16-17.41-15.16-28.9 0-19.46 15.79-35.25 35.25-35.25s35.25 15.79 35.25 35.25c0 11.49-5.64 22.28-15.16 28.9Z"
        id="uuid-e0abe07b-7bab-4578-8bed-52ada3e6328d"
        data-name="icon_productivity"
      />
      <path
        className="uuid-722d8a7b-918c-43ad-a81e-b0eb0343dbf4"
        d="M80.63 134.27 46.36 100l34.27-34.27L70.2 55.3 25.5 100l44.7 44.7 10.43-10.43Zm38.74 0L153.64 100l-34.27-34.27L129.8 55.3l44.7 44.7-44.7 44.7-10.43-10.43Z"
        id="uuid-ebd9c248-abdb-446f-9095-e156a5ef31d8"
        data-name="icon_code"
      />
      <g id="uuid-334cd61d-9a6e-476c-a2f9-a3d015ea4288" data-name="icon_design">
        <path
          className="uuid-722d8a7b-918c-43ad-a81e-b0eb0343dbf4"
          d="M100 170.5c-38.85 0-70.5-31.65-70.5-70.5S61.15 29.5 100 29.5s70.5 28.48 70.5 63.45c0 23.34-18.96 42.3-42.3 42.3h-12.48c-1.97 0-3.52 1.55-3.52 3.52 0 .85.35 1.62.92 2.33 2.89 3.31 4.51 7.47 4.51 11.77 0 9.73-7.9 17.63-17.63 17.63Zm0-126.9c-31.09 0-56.4 25.31-56.4 56.4s25.31 56.4 56.4 56.4c1.97 0 3.53-1.55 3.53-3.53 0-1.13-.56-1.97-.99-2.47-2.89-3.24-4.44-7.4-4.44-11.63 0-9.73 7.9-17.63 17.63-17.63h12.48c15.58 0 28.2-12.62 28.2-28.2 0-27.21-25.31-49.35-56.4-49.35Z"
        />
        <path
          className="uuid-722d8a7b-918c-43ad-a81e-b0eb0343dbf4"
          d="M61.22 107.05c5.84 0 10.58-4.73 10.58-10.58S67.07 85.9 61.22 85.9s-10.58 4.73-10.58 10.57 4.73 10.58 10.58 10.58ZM82.38 78.85c5.84 0 10.58-4.73 10.58-10.58s-4.73-10.58-10.58-10.58S71.8 62.42 71.8 68.27s4.73 10.58 10.58 10.58ZM117.63 78.85c5.84 0 10.58-4.73 10.58-10.58s-4.73-10.58-10.58-10.58-10.58 4.73-10.58 10.58 4.73 10.58 10.58 10.58ZM138.78 107.05c5.84 0 10.58-4.73 10.58-10.58s-4.73-10.57-10.58-10.57-10.58 4.73-10.58 10.57 4.73 10.58 10.58 10.58Z"
        />
      </g> */}
      {props.children}
    </g>
    <text 
      x={'50%'} y={'220px'}
      style={{
        textAnchor: "middle",
        textAlign: "center",
        letterSpacing: "0.05rem",
        fontSize: "26px",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        fill: `${props.fill || "#FFFFFF"}`,
      }}
    >
      {props.text}
    </text>
  </svg>
)

export default IconCard
