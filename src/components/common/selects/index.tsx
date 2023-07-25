import { useEffect, useState } from "react";

function Select(props: { onChange: any, placeholder: string, options: any, className: string }) {

    const [selectOptions, setSelectOptions] = useState([]);

    function buildOptions() {
        const options: any = [];
        if (props.placeholder != "") {
            options.push(props.placeholder);
        }
        props.options.forEach((option: string) => {
            options.push(option);
        });
        return options;
    }

    useEffect(() => {
        setSelectOptions(buildOptions());
    }, [props.options])

    return (
        <select
            onChange={(e) => props.onChange(e.target.value)}
            className={`${props.className} py-2 px-4 bg-neutral-900 border-2 border-neutral-800 rounded-lg hover:border-neutral-700 hover:bg-neutral-800 duration-300`}>
            {selectOptions.map((element: string, index: number) => {
                return (<option key={index} value={element}>{element}</option>)
            })}
        </select>
    )
}

export default Select
