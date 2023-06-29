import TableHeader from './header'
import TableRow from './rows'
import data from './test.json'

function Table() {

    return (
        <>
            <div className="w-full bg-neutral-900 text-base flex flex-row justify-between items-center py-2 pr-[8px] border-b-2 border-neutral-800">
                {data.table.map((column, index:number) => {
                    return <TableHeader key={index} name={column.name}/>
                })}
            </div>
            <div className="w-full h-full flex flex-col text-xs justify-between items-center overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-black">
                {data.data.map((column, index:number) => {
                    return <TableRow key={index} object={column}/>
                })}
            </div>
        </>
    )
}

export default Table
