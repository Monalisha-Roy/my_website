import Link from "next/link";
import { MdMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaRegFileLines } from "react-icons/fa6";


const Footer: React.FC = () => (
    <footer className="bg-gray-700 bg-opacity-80 text-white py-4 px-5  w-full border-t border-white">
        <div className="container mx-auto flex flex-col items-center justify-center">
            <div className="flex flex-col md:flex-row justify-between w-full gap-3 ">
                <div className="">
                    <Link href="mailto:u22cse1042@cit.ac.in" className="hover:text-accent transition flex gap-1">
                        <MdMailOutline size={24} />u22cse1042@cit.ac.in
                    </Link>
                    <Link href="https://drive.google.com/file/d/10nuG8KHeGA46t78gCpfPD-sxbqf0A57F/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition flex items-center gap-2 mt-2"><FaRegFileLines size={20}
                        />
                        Resume
                    </Link>
                </div>

                <Link href="https://www.linkedin.com/in/monalisha-roy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition flex gap-1">
                    <FaLinkedin size={24} /><p>Linkedin</p>
                </Link>
                <Link href="https://github.com/Monalisha-Roy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition flex gap-1">
                    <FaGithub size={24} /><p>Github</p>
                </Link>
            </div>
            {/* <p className="text-sm">&copy; {new Date().getFullYear()} Monalisha. All rights reserved.</p> */}
        </div>
    </footer>
);

export default Footer;