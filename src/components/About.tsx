import Image from "next/image";
import Link from "next/link";
import { MdMailOutline } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";

export default function About() {
    return (
        <section
            id="about"
            className="flex items-center justify-center w-full py-20 bg-black "
        >
            <div className="w-full px-4 lg:px-0 lg:w-10/12 flex flex-col-reverse md:flex-row items-center justify-center gap-8">
                {/* Text Section */}
                <div className="md:w-3/5 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
                        About Me
                    </h2>
                    <p className="text-white text-lg leading-relaxed">
                        Hey there! 👋 <br />
                        I’m a tech enthusiast currently pursuing a B.Tech in Computer Science and
                        Engineering. I’m passionate about designing and developing innovative
                        solutions that make an impact. Whether it’s building real-world
                        applications or exploring new technologies, I’m always eager to learn, grow,
                        and create.
                        <br />
                        <br />
                        I love collaborating with motivated teams to tackle challenges and bring
                        ideas to life. Let’s connect and work on something amazing together!
                    </p>
                    <div className="flex gap-2 md:gap-4 mt-4 flex-wrap justify-center md:justify-start">
                    <Link
                        href="mailto:u22cse1042@cit.ac.in"
                        className="duration-300 hover:scale-110 px-4 py-2 flex items-center justify-center gap-1 bg-transparent border-2 border-white hover:border-transparent text-white hover:text-black rounded hover:bg-primary transition"
                    >
                        <MdMailOutline />
                        Mail me
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/monalisha-roy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="duration-300 hover:scale-110 px-4 py-2 flex items-center justify-center gap-1 bg-transparent border-2 border-white hover:border-transparent text-white hover:text-black rounded hover:bg-primary transition"
                    >
                        <ImLinkedin />
                        LinkedIn
                    </Link>
                </div>
                </div>

                {/* Image Section */}
                <div className="md:w-2/5 flex items-center justify-center">
                    <Image
                        src="/mona.jpeg"
                        width={300}
                        height={300}
                        alt="profile"
                        className="rounded-full border-4 border-gray-700 shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
