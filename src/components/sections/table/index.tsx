import { useEffect, useState } from 'react'
import TableHeader from './header'
import TableRow from './rows'


function Table(props: { close: string, data:any }) {

    const [opacity, setOpacity] = useState("opacity-0");

    useEffect(() => {
        setOpacity('opacity-100');
    }, [])

    useEffect(() => {
        setOpacity(props.close);
    }, [props.close])

    return (
        <>
            <div className={`${opacity} duration-500 w-full bg-neutral-900 text-base flex flex-row justify-between items-center py-2 pr-[8px] border-b-2 border-neutral-800`}>
                {props.data.table.map((column:any, index: number) => {
                    return <TableHeader key={index} name={column.name} />
                })}
            </div>
            <div className={`${opacity} duration-500 w-full h-full flex flex-col text-xs justify-between items-center overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-black`}>
                {props.data.data.map((column:any, index: number) => {
                    return <TableRow key={index} object={column} />
                })}
            </div>
        </>
    )
}

export default Table
