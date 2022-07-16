import * as React from "react"
import ProjectCard from "../components/project-card"
import ProjectGrid from "../components/project-grid";

const components = {
  // eslint-disable-next-line react/display-name
  ProjectGrid: ({ children, ...props }) => (
    <ProjectGrid {...props}>{children}</ProjectGrid>
  ),
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, children, ...props }) => (
    <ProjectCard {...props} link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
};

export default components
