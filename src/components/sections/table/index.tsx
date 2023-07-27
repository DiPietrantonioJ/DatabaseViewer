import { useEffect, useState } from 'react'
import TableHeader from './header'
import TableRow from './rows'
import ExportButton from '../../common/excelExport';


function Table(props: { close: string, data: any }) {

    const [opacity, setOpacity] = useState("opacity-0");
    const [tableWidth, setTableWidth] = useState(window.innerWidth - 285);
    const [showTable, setShowTable] = useState(false);

    const handleResize = () => {
        setTableWidth(window.innerWidth - 285);
    }

    useEffect(() => {
        setOpacity('opacity-0');
        setTimeout(() => {
            setOpacity('opacity-100');
        }, 100);
        window.addEventListener("resize", handleResize, false);
    }, [])

    useEffect(() => {
        setOpacity(props.close);
    }, [props.close])

    useEffect(() => {
        if (props.data.table?.length > 0 && props.data.data?.length > 0) {
            setShowTable(true);
        }
    }, [props.data])

    return (
        <>
            {showTable &&
                <div
                    className={`h-full overflow-hidden`}
                    style={{ width: tableWidth }}
                >
                    <div className={`${opacity} duration-500 w-full bg-neutral-900 text-base flex flex-row justify-between items-center py-2 pr-[8px] border-b-2 border-neutral-800`}>
                        {props.data.table.map((column: any, index: number) => {
                            return <TableHeader key={index} name={column.name} />
                        })}
                    </div>
                    <div className={`${opacity} duration-500 w-full h-full flex flex-col text-xs justify-start items-center overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-black`}>
                        {props.data.data.map((column: any, index: number) => {
                            return <TableRow key={index} object={column} />
                        })}
                    </div>
                    <div className='absolute right-7 bottom-12'>
                        <ExportButton data={props.data.data} className={''} />
                    </div>
                </div>}
        </>
    )
}

export default Table
