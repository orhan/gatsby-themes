/** @jsx jsx */
import { jsx } from "theme-ui"

type ProjectCardProps = {
  link: string
  title: string
  logo: string
  bg: string
}

const ProjectCard = ({ link, logo, title, bg, style }: ProjectCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      ...{
        width: `100%`,
        maxWidth: `250px`,
        maxHeight: `100px`,
        boxShadow: `lg`,
        position: `relative`,
        textDecoration: `none`,
        borderRadius: `lg`,
        px: 4,
        py: [4, 5],
        color: `white`,
        padding: `12% !important`,
        background: bg || `none`,
        transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
        "&:hover": {
          color: `white !important`,
          transform: `translateY(-5px)`,
          boxShadow: `xl`,
        },
      },
      ...style,
    }}
  >
    <img
      src={logo}
      sx={{
        width: `100%`,
        height: `100%`,
        objectFit: `contain`,
      }}
      alt={title}
    />
  </a>
)

export default ProjectCard
