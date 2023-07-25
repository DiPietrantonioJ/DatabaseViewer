function TableRow(props: { object: any }) {

    function buildRow() {
        const jsx: any = [];
        for (const [key] of Object.entries(props.object)) {
            jsx.push(<div className="text-center w-full truncate">
                {props.object[key]}
            </div>)
        }
        return jsx;
    }

    return (
        <div className="w-full flex flex-row justify-between items-center py-2 even:bg-neutral-900">
            {buildRow()}
        </div>
    )
}

export default TableRow
