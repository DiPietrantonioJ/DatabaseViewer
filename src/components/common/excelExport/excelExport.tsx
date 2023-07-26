import FileSaver from "file-saver";
import * as XLSX from "xlsx";
import Button from '../buttons';

function ExportToExcel(props: { apiData: any, fileName: string }) {
    const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    function exportToCSV(apiData: any, fileName: string) {
        const ws = XLSX.utils.json_to_sheet(apiData);
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    }
    return (
        <>
            <Button onClick={() => exportToCSV(props.apiData, props.fileName)} argument={undefined} disabled={false} className={''}>
                Export
            </Button>
        </>
    )
}

export default ExportToExcel