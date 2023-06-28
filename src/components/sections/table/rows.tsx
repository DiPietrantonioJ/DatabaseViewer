function TableRow(props: {object:any}) {

    return (
        <div className="w-full flex flex-row justify-between items-center py-2 even:bg-neutral-900">
            <div className="text-center w-full">
                {props.object[0]}
            </div>
            <div className="text-center w-full">
                {props.object[1]}
            </div>
            <div className="text-center w-full">
                {props.object[2]}
            </div>
            <div className="text-center w-full">
                {props.object[3]}
            </div>
        </div>
    )
}

export default TableRow
