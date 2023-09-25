import { useEffect, useState } from 'react'
import TableHeader from './header'
import TableRow from './rows'
import ExportButton from '../../common/excelExport';
import Select from '../../common/selects';
import Button from '../../common/buttons';
import { RiRefreshLine } from 'react-icons/ri';


function Table(props: { refreshData: any, setColumnFilter: any, setColumnFilterValues: any, close: string, data: any, columnFilterValues: string, columnFilter: string }) {

    const [opacity, setOpacity] = useState("opacity-0");
    const [tableWidth, setTableWidth] = useState(window.innerWidth - 285);
    const [showTable, setShowTable] = useState(false);
    const [columns, setColumns] = useState([]);
    const [columnValues, setColumnsValues] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

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
            setFilteredData(props.data.data);
            const auxColumns: any = [];
            props.data.table.forEach((column: { name: string }) => {
                auxColumns.push(column.name);
            });
            setColumns(auxColumns);
        }
    }, [props.data])

    useEffect(() => {
        if (props.columnFilter != "") {
            const auxColumnsValues: any = [];
            props.data.data.forEach((row: { [x: string]: any; }) => {
                auxColumnsValues.push(row[props.columnFilter]);
            });
            setColumnsValues(
                auxColumnsValues.filter((item: any, index: any) => auxColumnsValues.indexOf(item) === index)
            );
        }
    }, [columns, props.columnFilter])

    useEffect(() => {
        if (props.columnFilter != "" && props.columnFilterValues) {
            const auxData: any = props.data.data.filter((row: { [x: string]: string; }) =>
                row[props.columnFilter] === props.columnFilterValues
            );
            setFilteredData(auxData);
        } else {
            setFilteredData(props.data.data);
        }
    }, [props.columnFilterValues, props.columnFilter, props.data])

    return (
        <>
            {showTable &&
                <div
                    className={`h-full overflow-hidden relative`}
                    style={{ width: tableWidth }}
                >
                    <div className="w-full flex flex-row justify-between items-center px-4 py-4 gap-4">
                        <p className="font-bold">
                            Total: {filteredData?.length}
                        </p>
                        <div className="flex flex-row justify-end items-center gap-4">
                            <Select onChange={props.setColumnFilter} placeholder={'Column'} options={columns} className={'w-[200px]'} />
                            <Select onChange={props.setColumnFilterValues} placeholder={'Column Value'} options={columnValues} className={'w-[200px]'} />
                            <Button onClick={props.refreshData} argument={undefined} disabled={false} className={''}>
                                <RiRefreshLine size="24"/>
                            </Button>
                        </div>
                    </div>
                    <div className={`${opacity} duration-500 w-full bg-neutral-900 text-base flex flex-row justify-between items-center py-2 pr-[8px] border-b-2 border-t-2 border-neutral-800`}>
                        {props.data.table.map((column: any, index: number) => {
                            return <TableHeader key={index} name={column.name} />
                        })}
                    </div>

                    <div className={`${opacity} duration-500 w-full h-full flex flex-col text-xs justify-start items-center overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-black`}>
                        {filteredData.map((column: any, index: number) => {
                            return <TableRow key={index} object={column} />
                        })}
                    </div>
                    <div className='absolute right-7 bottom-6'>
                        <ExportButton data={filteredData} className={''} />
                    </div>
                </div>}
        </>
    )
}

export default Table
