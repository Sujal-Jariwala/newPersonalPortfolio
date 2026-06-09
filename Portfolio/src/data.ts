import type { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoIosMail } from "react-icons/io";
import { SiMedium } from "react-icons/si";

interface Socials {
    icon: IconType
    name: string
    url: string
}


export const socialData: Socials[] = [
    {
        icon: FaGithub,
        name: "github",
        url: "https://github.com/Sujal-Jariwala"
    },
    {
        icon: TiSocialLinkedin,
        name: "linkedin",
        url: "https://www.linkedin.com/in/sujal-jariwala-b9b814267/"
    },
    {
        icon: IoIosMail,
        name: "email",
        url: "thisisjariwalasujal@gmail.com"
    }
    ,
    {
        icon:SiMedium,
        name:"medium",
        url:"https://medium.com/@jariwalasujal668"
    }
]