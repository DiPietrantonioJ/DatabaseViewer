import { useEffect, useState } from 'react'
import Select from '../../common/selects';

function Graphs(props: { close: string, data: any }) {

    const Types = ["Percentage", "Quantity"];
    const Graphs = ["Bars", "Cake"];

    const [opacity, setOpacity] = useState("opacity-0");
    const [columnNames, setColumnNames] = useState([]);

    useEffect(() => {
        setOpacity('opacity-100');
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

    return (
        <>
            <div className={`${opacity} duration-500 w-full h-full flex flex-col text-xs justify-start items-center overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-black`}>
                <div className="flex justify-center items-center flex-col text-xl pt-4 px-6 w-full">
                    <div className='flex flex-row justify-between items-center gap-8 w-full text-sm'>
                        <h2 className='text-2xl'>Settings</h2>
                        <div className='flex flex-row justify-center items-center gap-4'>
                            <Select placeholder={''} options={Types} className={'w-[150px]'} />
                            <Select placeholder={''} options={Graphs} className={'w-[150px]'} />
                            <Select placeholder={'Column'} options={columnNames} className={'w-[150px]'} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center gap-8 w-full h-full text-base px-6 py-4'>
                    
                </div>
            </div>
        </>
    )
}

export default Graphs
