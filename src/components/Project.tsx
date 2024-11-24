import Image from "next/image";
import Link from "next/link";

export default function Project() {
    return(
        <section id="projects" className="flex-col items-center justify-center w-full py-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Projects</h2>
            <div className="w-full flex items-center justify-center"> 
            <div className="w-10/12 flex items-center justify-center p-3 bg-gray-700 bg-opacity-80 rounded-lg">
                <div className="w-6/12">
                    <Image src="/background.jpg" alt="Project Image" width={500} height={300} className="rounded-lg"/>
                </div>
                <div className="w-6/12 pl-6">
                    <h3 className="text-2xl text-start font-bold mb-4 text-white">Notes App</h3>
                    <p className="text-white text-start">A web platform where students can upload, share, and download class notes from various institutes. Built with Next.js, TypeScript, and Firebase for secure user authentication. The frontend is complete, with the backend in progress.</p>
                    <p className="text-start pt-2"><Link href={"https://mylenotes.vercel.app/"} className="text-md pt-2 text-blue-500 underline">View Project</Link></p>
                </div>
            </div>
            </div>
        </section>
    )
}