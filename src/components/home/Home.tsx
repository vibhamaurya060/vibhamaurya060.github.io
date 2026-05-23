"use client"
import Hero from './hero/Hero'
import About from './about/About'

const Home = () => {
  return (
    <div className="overflow-hidden ">
      <Hero/>
      <About/>
    </div>
  )
}

export default Home