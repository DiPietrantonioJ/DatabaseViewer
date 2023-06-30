export function InputText(props: { placeholder: string, label: string, id: string, className: string, type: string }) {

    return (
        <div className="flex flex-col justify-center items-start">
            <label className="ml-2 mb-1" htmlFor={props.id}>
                {props.label}
            </label>
            <input
                id={props.id}
                name={props.id}
                placeholder={props.placeholder}
                type={props.type}
                className={`${props.className} py-2 px-4 bg-neutral-900 border-2 border-neutral-800 rounded-lg`}
            />
        </div>
    )
}

export default InputText
