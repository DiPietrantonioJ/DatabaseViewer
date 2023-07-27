import { useEffect, useState } from "react";
import Table from "../table"
import Loading from "../loading";
import Graphs from "../graphs";
import testData from './test.json'

function Home(props: {
    postFunction: any; selectedMenu: string, selectedDatabase: number, databases: any
}) {

    const [opacity, setOpacity] = useState("opacity-0");
    const [loaded, isLoaded] = useState(false);
    const [close, setClose] = useState("opacity-100");
    const [show, setShow] = useState("");
    const [data, setData] = useState<any>(undefined);

    useEffect(() => {
        setData(testData);
        setShow(props.selectedMenu);
        setTimeout(() => {
            setOpacity("opacity-100");
        }, 1000);
    }, [])

    useEffect(() => {
        if (true) {
            setTimeout(() => {
                isLoaded(true);
            }, 2500);
        }
    }, [])

    function contentAnimation() {
        setTimeout(() => {
            setOpacity("opacity-100");
        }, 500);
    }

    useEffect(() => {
        setClose("opacity-0");
        setTimeout(() => {
            setShow(props.selectedMenu);
            setClose("opacity-100");
        }, 1000);
    }, [props.selectedMenu])

    useEffect(() => {
        setClose("opacity-0");
        props.postFunction(
            props.databases[props.selectedDatabase].handlerUrl,
            [
                { name: "action", value: "data" }
            ]
        ).then((response: any) => {
            console.log(response);
            if (response.data?.table.length > 0 && response.data?.data.length > 0) {
                setData(response.data);
            }
            setShow(props.selectedMenu);
            setClose("opacity-100");
        })
    }, [props.selectedDatabase])

    return (

        <section className={`${opacity} duration-500 h-full w-full flex justify-center items-center p-4 pt-14 pb-9`}>
            {data !== undefined &&
                <div className="h-full w-full border-2 border-neutral-800 rounded-md">
                    {show == "table" && <Table data={data} close={close} />}
                    {show == "graphs" && <Graphs data={data} close={close} />}
                    {(show == "" && show == undefined) && <Loading loading={!loaded} doneLoading={contentAnimation} />}
                </div>
            }
        </section>
    )
}

export default Home
