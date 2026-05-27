"use client"
import Hero from './hero/Hero'
import About from './about/About'
import Skills from './skills/Skills'
import Project from './project/Project'
import Experience from './experience/Experience'
import Contact from './contact/Contact'

const Home = () => {
  return (
    <div className="overflow-hidden ">
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default Home