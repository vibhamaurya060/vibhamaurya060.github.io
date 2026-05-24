"use client"
import SectionHeading from "@/components/helper/SectionHeading"
import Image from "next/image"
import { highlights, stats } from "../../../../data"


const About = () => {
  return (
    <div className=" py-8 md:py-16 lg:py-16 bg-gray-100 dark:bg-gray-900">
      {/* section heading */}
      <SectionHeading
        title_1="About"
        title_2="Me"
        description="Get to know the developer behind the code."
      />
      <div className="  grid w-[80%] mx-auto lg:grid-cols-2 gap-6 md:gap-12 lg:gap-12  ">
        {/* image */}
        <div className="relative ">
          <div className="flex items-center justify-center  rounded-2xl overflow-hidden p-2">
            <Image
              src={"/images/photoVibha.png"}
              alt="vibha"
              width={700}
              height={700}
              className="hidden  md:block  object-center rounded-xl shadow"
            />

            <Image
              src={"/images/photoVibha.png"}
              alt="vibha"
              width={400}
              height={400}
              className="md:hidden object-center rounded-xl shadow"
            />
          </div>
        </div>
        {/* Content */}
        <div className="space-y-6 md:pt-20 ">
          <h3 className="text-2xl font-semibold">
            A passionate developer who loves to create
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m a full-stack developer with over 1 year of experience
            building web applications. My journey started with curiosity
            about how websites work, and it has evolved into a passion for
            creating seamless, user-focused digital experiences.
          </p>

          {/* Highlights */}
          <div className=" grid grid-col-1 md:grid-cols-2 lg:grid-col-2 gap-3 pt-4">
            {highlights.map((item) => {
              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {/* stats */}
      <div className="mt-16 w-[80%] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat)=>{
           return(
            <div 
             key={stat.label}
             className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center "
            >
             <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
              {stat.value}
             </div>
             <div className="text-sm text-muted-foreground">
              {stat.label}
             </div>
            </div>
           )
          })}

        </div>

      </div>
    </div>
  )
}

export default About