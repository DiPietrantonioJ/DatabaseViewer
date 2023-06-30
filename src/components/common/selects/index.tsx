function Select(props: { placeholder: string, options: any }) {

    function buildOptions() {
        const options: any = [];
        options.push(<option value="">{props.placeholder}</option>)
        props.options.forEach((option: string, index: number) => {
            options.push(<option key={index} value={option}>{option}</option>)
        });
        return options;
    }

    return (
        <select className="py-2 px-4 bg-neutral-900 border-2 border-neutral-800 rounded-lg">
            {buildOptions()}
        </select>
    )
}

export default Select
