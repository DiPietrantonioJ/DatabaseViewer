import Footer from "../../footer"
import Header from "../../header"
import Menu from "../../menu"
import Home from "../home"

function Main() {

    return (
        <>
            <Header />
            <div className={`w-full h-full relative flex flex-row justify-center items-center duration-500`}>
                <Menu />
                <Home />
            </div>
            <Footer />
        </>
    )
}

export default Main
