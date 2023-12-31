import { useEffect, useState } from "react";

function Footer() {

    const [opacity, setOpacity] = useState("opacity-0");

    useEffect(() => {
        setTimeout(() => {
            setOpacity("opacity-100");
        }, 1000);
    }, [])

    return (
        <footer className={`${opacity} duration-500 bg-gradient-to-t from-black to-black/0 text-sm pb-2 pt-4 flex flex-row justify-end items-center w-full px-3 font-bold gap-2 fixed bottom-0`}>
            <a
                className="text-yellow-500 hover:text-yellow-300 duration-500"
                href="https://github.com/DiPietrantonioJ/DatabaseViewer"
                target="_blank">
                About this software
            </a>
            <p>|</p>
            <p>v0.0.2 Alpha</p>
        </footer>
    )
}

export default Footer
