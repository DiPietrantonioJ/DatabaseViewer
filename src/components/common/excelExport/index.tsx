import ExportToExcel from "./excelExport"

function ExportButton(props: {
    data: any, className: string
}) {

    function getFileName() {
        const date = new Date();
        return "Export " + date.getDay() + date.getMonth() + date.getFullYear() + date.getHours() + date.getMinutes() + date.getMilliseconds(); 
    }

    return (
        <>
            <ExportToExcel fileName={getFileName()} apiData={props.data}/>
        </>
    )
}

export default ExportButton