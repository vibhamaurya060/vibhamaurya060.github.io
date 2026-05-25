"use client"

import Image from "next/image";

type Props = {
    title: string;
    description: string;
    image: string;
    techStack: string[];
    demoUrl?: string;
    githubUrl?: string;

}
const ProjectCard = ({
    description,
    image,
    techStack,
    title,
    demoUrl,
    githubUrl
}: Props) => {
    return (
        <div className="group relative bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden">
            {/* Image container */}
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                />
            </div>
            {/* main content */}
            <div className="p-6">
                <h3 className="text-xl text-black dark:text-white font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                    {title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {description}
                </p>
                {/* tech stacks */}

            </div>
        </div>
    )
}

export default ProjectCard