import { useEffect, useState } from "react";
import DatabaseButton from "./menubuttons"

function Menu(props: {setSelectedMenu: any, selectedMenu: string}) {
    
    const [opacity, setOpacity] = useState("opacity-0");

    useEffect(() => {
        setTimeout(() => {
            setOpacity("opacity-100");
        }, 1000);
    }, [])

    return (
        <aside className={`${opacity} duration-500 w-[300px] h-full border-r border-neutral-800 flex flex-col justify-center items-center pl-4`}>
            <div className="py-12 h-full w-full flex flex-col justify-start items-center gap-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-black">
                <DatabaseButton setSelectedMenu={props.setSelectedMenu} databaseType="mongodb" label="DATABASE 1" />
                <DatabaseButton setSelectedMenu={props.setSelectedMenu} databaseType="maria" label="DATABASE 2" />
                <DatabaseButton setSelectedMenu={props.setSelectedMenu} databaseType="mysql" label="DATABASE 3" />
                <DatabaseButton setSelectedMenu={props.setSelectedMenu} databaseType="oracle" label="DATABASE 4" />
            </div>
        </aside>
    )
}

export default Menu
