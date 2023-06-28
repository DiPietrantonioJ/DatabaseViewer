function TableHeader(props: {
    name: string 
}) {

    return (
        <>
            <div className="text-center w-full">
                {props.name}
            </div>
        </>
    )
}

export default TableHeader
