function Button(props: { children: any, onClick: any, argument: any, disabled: boolean, className: string }) {

    function handleClick() {
        if(!props.disabled) {
            props.onClick(props.argument);
        }
    }

    return (
        <button
            onClick={handleClick}
            className={`${props.className} ${props.disabled ? "border-neutral-900 bg-black text-neutral-600" : "border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 text-white"} px-4 py-2 rounded-lg border-2 duration-300`}
        >
            {props.children}
        </button>
    )
}

export default Button
