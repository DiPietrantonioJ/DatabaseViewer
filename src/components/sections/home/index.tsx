import { useEffect, useState } from "react";
import Table from "../table"
import Loading from "../loading";
import Graphs from "../graphs";
import data from './test.json';

function Home(props: {selectedMenu: string}) {
    
    const [opacity, setOpacity] = useState("opacity-0");
    const [loaded, isLoaded] = useState(false);
    const [close, setClose] = useState("opacity-100");
    const [show, setShow] = useState("");

    useEffect(() => {
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

    return (
        
        <section className={`${opacity} duration-500 h-full w-full flex justify-center items-center p-4 pt-14 pb-9`}>
            <div className="h-full w-full overflow-hidden border-2 border-neutral-800 pb-10 rounded-md">
                {show == "table" && <Table data={data} close={close}/>}
                {show == "graphs" && <Graphs data={data} close={close} />}
                {(show == "" && show == undefined) && <Loading loading={!loaded} doneLoading={contentAnimation}/> }
            </div>
        </section>
    )
}

export default Home
