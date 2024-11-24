import Link from "next/link";
import { MdMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaRegFileLines } from "react-icons/fa6";


const Footer: React.FC = () => (
<footer className="bg-gray-700 bg-opacity-80 text-white py-4 w-full">
    <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex justify-between w-full gap-6">
            <div>
                <Link href="mailto:your-email@example.com" className="hover:text-accent transition flex gap-1">
                    <MdMailOutline size={24} /><p>u22cse1042@cit.ac.in</p>
                </Link>
                <p className="hover:text-accent transition flex items-center gap-1"><FaRegFileLines size={20}/> Resume</p>
            </div>
            
            <Link href="https://www.linkedin.com/in/your-profile" className="hover:text-accent transition flex gap-1">
                <FaLinkedin  size={24} /><p>Linkedin</p>
            </Link>
            <Link href="https://www.instagram.com/your-profile" className="hover:text-accent transition flex gap-1">
                <FaGithub size={24} /><p>Github</p>
            </Link>
        </div>
        {/* <p className="text-sm">&copy; {new Date().getFullYear()} Monalisha. All rights reserved.</p> */}
    </div>
</footer>
);

export default Footer;