export function InputText(props: {onChange: any, placeholder: string, label: string, id: string, className: string, type: string }) {



    return (
        <div className="flex flex-col justify-center items-start w-full">
            <label className="ml-2 mb-1" htmlFor={props.id}>
                {props.label}
            </label>
            <input
                onChange={(e) => props.onChange(e.target.value)}
                id={props.id}
                name={props.id}
                placeholder={props.placeholder}
                type={props.type}
                className={`${props.className} py-2 px-4 bg-neutral-900 border-2 border-neutral-800 rounded-lg hover:border-neutral-700 hover:bg-neutral-800 duration-300`}
            />
        </div>
    )
}

export default InputText
