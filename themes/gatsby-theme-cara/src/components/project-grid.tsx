/** @jsx jsx */
import { jsx } from "theme-ui"

type ProjectGridProps = {
  children: React.ReactNode
  style: any
}

const ProjectGrid = ({ children, style }: ProjectGridProps) => (
  <div
    sx={{
      ...{
        flex: 1,
        display: `grid`,
        gridGap: [4, 4, 4, 5],
        gridTemplateColumns: [`1fr`, `1fr`, `1fr`, `repeat(3, 1fr)`],
        justifyItems: `center`,
        h2: { gridColumn: `-1/1`, color: `white !important` },
      },
      ...style,
    }}
  >
    {children}
  </div>
)

export default ProjectGrid
