import { useState } from "react"
import Footer from "../../footer"
import Header from "../../header"
import Menu from "../../menu"
import Home from "../home"

function Main() {

    const [selectedMenu, setSelectedMenu] = useState("table");

    return (
        <>
            <Header />
            <div className={`w-full h-full relative flex flex-row justify-center items-center duration-500`}>
                <Menu databases={""} setSelectedMenu={setSelectedMenu} selectedMenu={selectedMenu} setDatabase={undefined}/>
                <Home selectedMenu={selectedMenu}/>
            </div>
            <Footer />
        </>
    )
}

export default Main
