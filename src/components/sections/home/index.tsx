import { useEffect, useState } from "react";
import Table from "../table"

function Home() {
    
    const [opacity, setOpacity] = useState("opacity-0");

    useEffect(() => {
        setTimeout(() => {
            setOpacity("opacity-100");
        }, 1000);
    }, [])

    return (
        <section className={`${opacity} duration-500 h-full w-full flex justify-center items-center p-4 pt-14 pb-9`}>
            <div className="h-full w-full overflow-hidden border-2 border-neutral-800 pb-10 rounded-md">
                <Table/>
            </div>
        </section>
    )
}

export default Home
