import { useEffect, useState } from "react"
import { RiLoader2Line } from "react-icons/ri"

function Loading(props: { loading: boolean, doneLoading: any }) {

    const [opacity, setOpacity] = useState("opacity-0")

    useEffect(() => {
        setTimeout(() => {
            setOpacity("opacity-100");
        }, 500);
    }, [])

    useEffect(() => {
        if (!props.loading) {
            setOpacity("opacity-0");
            setTimeout(() => {
                props.doneLoading();
            }, 500);
        }
    }, [props.loading])

    return (
        <div className={`${opacity} duration-500 w-full h-full justify-center items-center flex`}>
            <RiLoader2Line className="animate-spin" size={48} color="#525252" />
        </div>
    )
}

export default Loading
