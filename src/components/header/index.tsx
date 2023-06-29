import { useEffect, useState } from "react";

function Header() {

    const [anim, setAnim] = useState("-top-32");

    useEffect(() => {
        setTimeout(() => {
            setAnim("top-0");
        }, 500);
    }, [])

    return (
        <header className={`${anim} z-50 fixed text-center bg-gradient-to-t from-black/0 to-black w-full pt-3 pb-3 -mt-1 drop-shadow-lg duration-500`}>
            <h1 className="text-4xl arvo font-bold ">DatabaseViewer</h1>
        </header>
    )
}

export default Header
