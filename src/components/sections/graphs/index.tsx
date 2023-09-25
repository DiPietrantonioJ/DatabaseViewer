import { useEffect, useState } from 'react'
import Select from '../../common/selects';
import Chart from 'react-google-charts';
import Button from '../../common/buttons';
import { RiRefreshLine } from 'react-icons/ri';

function Graphs(props: { refreshData: any, close: string, data: any }) {

    const Graphs = ["Bars", "Pie"];

    const [opacity, setOpacity] = useState("opacity-0");
    const [columnNames, setColumnNames] = useState([]);
    const [graph, setGraph] = useState("");
    const [column, setColumn] = useState("");
    const [options, setOptions] = useState({});
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        setOpacity('opacity-0');
        setTimeout(() => {
            setOpacity('opacity-100');
        }, 100);
        transforData();
    }, [])

    useEffect(() => {
        setOpacity(props.close);
    }, [props.close])

    useEffect(() => {
        const auxNames: any = [];
        props.data.table.forEach((element: any) => {
            auxNames.push(element.name);
        });
        setColumnNames(auxNames);
    }, [props.data])

    useEffect(() => {
        setOptions({
            title: column
        });
        transforData();
    }, [column])

    function transforData() {
        const auxRows: any = [];
        props.data.data.forEach((element: any) => {
            auxRows.push(element[column]);
        });
        let uniqueChars = [...new Set(auxRows)];
        const auxData: any = [];
        auxData.push([column, "Quantity"]);
        uniqueChars.forEach((element: any) => {
            auxData.push([element, parseInt(auxRows.filter((x: any) => x == element).length)]);
        });
        console.log(auxData);
        setData([
            auxData
        ])
    }

    useEffect(() => { console.log(data) }, [data])

    return (
        <>
            <div className={`${opacity} duration-500 w-full h-full flex flex-col text-xs justify-start items-center overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-black`}>
                <div className="flex justify-center items-center flex-col text-xl pt-4 px-6 w-full">
                    <div className='flex flex-row justify-between items-center gap-8 w-full text-sm'>
                        <h2 className='text-2xl'>Settings</h2>
                        <div className='flex flex-row justify-center items-center gap-4'>
                            <Select onChange={setGraph} placeholder={''} options={Graphs} className={'w-[150px]'} />
                            <Select onChange={setColumn} placeholder={'Column'} options={columnNames} className={'w-[150px]'} />
                            <Button onClick={props.refreshData} argument={undefined} disabled={false} className={''}>
                                <RiRefreshLine size="24"/>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center gap-8 w-full h-full text-base px-6 py-4'>
                    <div className="flex w-full h-2/3 justify-center items-center m-12 rounded-lg overflow-hidden">
                        {graph == "Pie" && <Chart
                            chartType="PieChart"
                            width="100%"
                            height="100%"
                            data={data[0]}
                            options={options}
                        />}
                        {graph == "Bars" && <Chart
                            chartType="Bar"
                            width="100%"
                            height="100%"
                            data={data[0]}
                            options={options}
                        />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Graphs
