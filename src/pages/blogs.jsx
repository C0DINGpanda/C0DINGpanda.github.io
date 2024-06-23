import { Heading } from '../styles/Resume.style'
import { GeometricShape } from '../styles/Containers.style'
import BlogCard from '../components/Blogs'
import '../styles/Blogs.style.css'
import projects from '../data/projects.json'
import { useState, useEffect, StrictMode } from 'react'
import { ProjectWrapper } from '../styles/Project.style'

const Projects = () => {
  const [project, setProject] = useState(null)

  useEffect(() => {
    setProject(projects)
  }, [projects])

  return (
    <>
      <ProjectWrapper>
        <Heading>
          <GeometricShape />
          <h1>My Blogs</h1>
        </Heading>

        <StrictMode>
          <BlogCard />
        </StrictMode>
      </ProjectWrapper>
    </>
  )
}

export default Projects
