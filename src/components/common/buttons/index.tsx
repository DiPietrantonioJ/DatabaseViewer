function Button(props: { children: string, onClick: any, argument: any }) {

    function handleClick() {
        props.onClick(props.argument)
    }

    return (
        <button
            onClick={handleClick}
            className="px-4 py-2 rounded-lg text-white border-neutral-800 bg-neutral-900 border-2 hover:border-neutral-700 hover:bg-neutral-800 duration-300"
        >
            {props.children}
        </button>
    )
}

export default Button
