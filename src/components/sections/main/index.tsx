import { useState } from "react"
import Footer from "../../footer"
import Header from "../../header"
import Menu from "../../menu"
import Home from "../home"

function Main(props: {
    postFunction: any
    userDisplayName: string, databases: any, brandName: string, brandImg: string, currentUser: string
}) {

    const [selectedMenu, setSelectedMenu] = useState("table");
    const [selectedDatabase, setDatabase] = useState(0);

    return (
        <>
            <Header />
            <div className={`w-full h-full relative flex flex-row justify-center items-center duration-500`}>
                <Menu
                    userDisplayName={props.userDisplayName}
                    brandName={props.brandName}
                    brandImg={props.brandImg}
                    currentUser={props.currentUser}
                    databases={props.databases}
                    setSelectedMenu={setSelectedMenu}
                    selectedMenu={selectedMenu}
                    setDatabase={setDatabase} />
                <Home
                    selectedMenu={selectedMenu}
                    selectedDatabase={selectedDatabase}
                    databases={props.databases}
                    postFunction={props.postFunction}
                />
            </div>
            <Footer />
        </>
    )
}

export default Main
