"use client"
import Hero from './hero/Hero'
import About from './about/About'
import Skills from './skills/Skills'
import Project from './project/Project'

const Home = () => {
  return (
    <div className="overflow-hidden ">
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
    </div>
  )
}

export default Home