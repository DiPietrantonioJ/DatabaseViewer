import TableHeader from './header'
import TableRow from './rows'
import data from './test.json'

function Table() {

    return (
        <>
            <div className="w-full bg-neutral-900 text-base flex flex-row justify-between items-center py-2 pr-[16px] border-b border-neutral-700">
                {data.table.map((column, index:number) => {
                    return <TableHeader key={index} name={column.name}/>
                })}
            </div>
            <div className="w-full h-full flex flex-col text-xs justify-between items-center overflow-y-scroll">
                {data.data.map((column, index:number) => {
                    return <TableRow key={index} object={column}/>
                })}
            </div>
        </>
    )
}

export default Table
