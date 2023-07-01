function Select(props: { placeholder: string, options: any, className: string }) {

    function buildOptions() {
        const options: any = [];
        options.push(<option value="">{props.placeholder}</option>)
        props.options.forEach((option: string, index: number) => {
            options.push(<option key={index} value={option}>{option}</option>)
        });
        return options;
    }

    return (
        <select className={`${props.className} py-2 px-4 bg-neutral-900 border-2 border-neutral-800 rounded-lg hover:border-neutral-700 hover:bg-neutral-800 duration-300`}>
            {buildOptions()}
        </select>
    )
}

export default Select
