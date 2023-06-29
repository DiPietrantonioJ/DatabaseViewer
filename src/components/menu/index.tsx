import DatabaseButton from "./menubuttons"

function Menu() {

    return (
        <aside className="w-[300px] h-full border-r border-neutral-800 flex flex-col justify-center items-center pl-4">
            <div className="py-12 h-full w-full flex flex-col justify-start items-center gap-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-black">
                <DatabaseButton databaseType="mongodb" label="DATABASE 1" />
                <DatabaseButton databaseType="maria" label="DATABASE 2" />
                <DatabaseButton databaseType="mysql" label="DATABASE 3" />
                <DatabaseButton databaseType="oracle" label="DATABASE 4" />
            </div>
        </aside>
    )
}

export default Menu
