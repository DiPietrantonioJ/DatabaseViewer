import { useEffect, useState } from "react";
import DatabaseButton from "./menubuttons"

function Menu(props: {
    userDisplayName: string, brandName: string, brandImg: string, currentUser: string, setSelectedMenu: any, selectedMenu: string, setDatabase: any, databases: any
}) {

    const [opacity, setOpacity] = useState("opacity-0");

    useEffect(() => {
        setTimeout(() => {
            setOpacity("opacity-100");
        }, 1000);
    }, [])

    function buildDatabases() {
        const jsx:any = [];
        props.databases.forEach((database: any, index: number) => {
            jsx.push(
                <DatabaseButton
                    key={index}
                    setDatabase={props.setDatabase}
                    setSelectedMenu={props.setSelectedMenu}
                    databaseType="mysql"
                    label={database.displayName}
                    database={index}
                />
            );
        });
        return jsx;
    }

    return (
        <aside className={`${opacity} duration-500 w-[300px] h-full border-r border-neutral-800 flex flex-col justify-center items-between py-6`}>
            <div className="z-50 w-full aspect-square flex flex-col justify-center items-center">
                <img className="w-32" src={props.brandImg} />
                <p className="text-xl">{props.brandName}</p>
            </div>
            <div className="z-50 pl-2 py-2 h-full w-full flex flex-col justify-start items-center gap-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-black">
                {buildDatabases()}
            </div>
            <div className="z-50 w-full flex justify-center items-center">
                {props.userDisplayName}
            </div>
        </aside>
    )
}

export default Menu
