import Image from "next/image";
import Link from "next/link";
import { MdMailOutline } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { FaRegFileLines } from "react-icons/fa6";

export default function HomeHero() {

    return (
        <div className="flex justify-center items-center relative h-screen w-full ">
            <div className="relative w-full h-full overflow-hidden ">
                <Image src={"/background.jpg"} alt="" layout="fill" objectFit="cover" />
            </div>
            <div className="absolute flex flex-col items-center justify-center w-full h-full text-text">
                <div className="text-center p-2 md:p-3 lg:p-3 rounded-md w-3/4 md:w-9/12 lg:w-7/12">
                    <h2 className="text-3xl md:text-7xl lg:text-7xl font-semibold mb-1">
                        Hi, I'm Monalisha!
                    </h2>
                    <h4 className="text-text lg:text-lg md:text-lg text-sm font-normal px-10">
                        A tech enthusiast passionate about crafting innovative solutions, tackling challenges, and building impactful real-world applications.
                    </h4>
                </div>
                <div className="flex gap-2 md:gap-4 mt-4 flex-wrap justify-center md:justify-start">
                    <Link
                        href="mailto:u22cse1042@cit.ac.in"
                        className="duration-300 hover:scale-110 px-4 py-2 flex items-center justify-center gap-1 bg-transparent border-2 border-white hover:border-transparent text-white hover:text-black rounded hover:bg-white transition"
                    >
                        <MdMailOutline />
                        Mail me
                    </Link>
                    <Link
                        href="www.linkedin.com/in/monalisha-roy"
                        className="duration-300 hover:scale-110 px-4 py-2 flex items-center justify-center gap-1 bg-transparent border-2 border-white hover:border-transparent text-white hover:text-black rounded hover:bg-white transition"
                    >
                        <ImLinkedin />
                        LinkedIn
                    </Link>
                    <Link
                        href="/path/to/your/resume.pdf"
                        className="duration-300 hover:scale-110 px-4 py-2 flex items-center justify-center gap-1 bg-transparent border-2 border-white hover:border-transparent text-white hover:text-black rounded hover:bg-white transition"
                    >
                        <FaRegFileLines />
                        Resume
                    </Link>
                </div>
            </div>
        </div>
    );
}
