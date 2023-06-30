import { useEffect, useState } from "react"
import Button from "../../common/buttons"

function Welcome(props: {setScreen: any}) {

    const [opacity, setOpacity] = useState("opacity-0");

    useEffect(() => {
        setTimeout(() => {
            setOpacity("opacity-100");
        }, 1000);
    }, [])

    function nextStep() {
        setOpacity("opacity-0");
        setTimeout(() => {
            props.setScreen("firstconfig");
        }, 500);
    }

    return (
        <section className={`${opacity} w-full h-full flex flex-col justify-center items-center gap-12 duration-500`}>
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="text-5xl duration-300">Welcome to</h1>
                <h1 className="arvo text-6xl duration-300">DatabaseViewer</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-6">
                <p className="text-sm text-center max-w-[500px]">
                    This is the first time running DatabaseViewer on this system. <br />
                    We need to configure your first database, which will also be used to store the basic data of DatabaseViewer.<br/>
                    You will need a running database engine, a user with permissions to create a new database, permissions to read the database you want to list and basic knowledge.
                </p>
                <Button onClick={nextStep} argument="">Begin</Button>
            </div>
        </section>
    )
}

export default Welcome
