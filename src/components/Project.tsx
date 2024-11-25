import Link from "next/link";

export default function Project() {
    return (
        <section id="projects" className="flex-col items-center justify-center w-full py-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-primary">Projects</h2>
            <div className="w-full flex items-center justify-center px-4 lg:px-0">
                <div className="w-full lg:w-10/12 flex flex-col gap-2 lg:flex-row items-center justify-center p-3 bg-gray-700 bg-opacity-80 rounded-lg">
                    <div className="w-full lg:w-6/12 flex justify-center items-center">
                        <Link href={"https://mylenotes.vercel.app/"} target="_blank" rel="noopener noreferrer">
                            <video src="/ss.mp4" autoPlay muted loop width={500} height={400} className="rounded-lg" />
                        </Link>
                    </div>
                    <div className="w-full lg:w-7/12 px-2 lg:px-0 lg:pl-6">
                        <h3 className="text-2xl text-start font-bold mb-4 text-secondary">Notes App</h3>
                        <p className="text-white text-start">A web platform where students can upload, share, and download class notes from various institutes. Built with Next.js, TypeScript, and Firebase for secure user authentication. The frontend is complete, with the backend in progress.</p>
                        <p className="text-start pt-2"><Link href={"https://mylenotes.vercel.app/"} target="_blank" rel="noopener noreferrer" className="text-md pt-2 text-accent underline">View Project</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}