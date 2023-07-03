import { useEffect, useState } from 'react'
import Select from '../../common/selects';

function Graphs(props: { close: string, data:any }) {

    const Types = ["Percentage", "Quantity"];
    const Graphs = ["Bars", "Cake"];

    const [opacity, setOpacity] = useState("opacity-0");
    const [columnNames, setColumnNames] = useState([]);

    useEffect(() => {
        setOpacity('opacity-100');
    }, [])

    useEffect(() => {
        const auxNames:any = [];
        props.data.table.forEach((element:any) => {
            auxNames.push(element.name);
        });
        setColumnNames(auxNames);
    }, [props.data])

    useEffect(() => {
        setOpacity(props.close);
    }, [props.close])

    return (
        <>
            <div className={`${opacity} duration-500 w-full h-full flex flex-col text-xs justify-between items-center overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-black`}>
                <div className="flex justify-center items-center flex-col text-xl gap-4 p-4 w-full">
                    <div className='flex flex-row justify-end items-center gap-8 w-full text-sm'>
                        <Select placeholder={''} options={Types} className={'w-[150px]'} />
                        <Select placeholder={''} options={Graphs} className={'w-[150px]'} />
                        <Select placeholder={'Column'} options={columnNames} className={'w-[150px]'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Graphs
