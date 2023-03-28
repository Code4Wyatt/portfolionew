import Image from "next/image";
import HeaderItem from "../HeaderItem/HeaderItem.jsx";
import {
    HomeIcon,
} from "@heroicons/react/24/outline";

function Header() {
    return (
        <header className="">
            <Image src='/assets/headerlogo.png' alt='logo' width='100' height='100' />
            <div>

                <HeaderItem title='Home' Icon={HomeIcon} />
            </div>
        </header>
    )
}

export default Header;