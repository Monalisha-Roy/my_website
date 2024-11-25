import Image from "next/image";
import { SiFramework } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

const skills = [
    {},
    {
        title: "Web Development",
        description: "Skilled in Web Development, building dynamic and responsive websites.",
        icon: <FaLaptopCode className="font-semibold text-secondary" size={35} />
    },
    {
        title: "Programming Languages",
        description: "C, Python, JavaScript/TypeScript, Java, SQL, MySQL, PostgreSQL, Shell Scripting.",
        icon: <FaCode className="font-semibold text-secondary" size={35} />
    },
    {
        title: "Tools & Frameworks",
        description: "React.js, Next.js, Node.js, Tailwindcss, Git & Github.",
        icon: <SiFramework className="font-semibold text-secondary" size={30} />
    }
]

export default function Skillset() {
    return (
        <section className="flex items-center justify-center w-full py-10">
            <div className="w-9/12 flex flex-col lg:flex-row items-center justify-center">
                <div className="w-full lg:w-2/6">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Skill Set</h2>
                </div>
                <div className="w-full lg:w-4/6 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
                    {skills.map((skill, index) => (
                        <div
                            className={`p-5 w-full  rounded-lg flex items-center justify-center ${skill.title ? 'bg-gray-700 bg-opacity-40' : 'bg-transparent'
                                }`}
                            key={index}
                        >
                            {skill.title ? (
                                <div className="rounded-lg bg-opacity-80 flex-col items-center justify-center">
                                    <div className="flex flex-col items-center justify-center gap-1">
                                        {skill.icon}
                                        <h4 className="text-lg text-secondary font-bold">{skill.title}</h4>
                                    </div>
                                    <p className="text-md mt-2">{skill.description}</p>
                                </div>
                            ) : (
                                <Image
                                    src="/img.png" 
                                    alt="Placeholder"
                                    width={100}
                                    height={100}
                                    className="opacity-100"
                                />
                            )}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}