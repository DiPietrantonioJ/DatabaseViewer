import { useEffect, useState } from "react"
import InputText from "../../common/inputs";
import Select from "../../common/selects";
import Button from "../../common/buttons";

function FirstConfig(props: { setScreen: any }) {

    const options = ["MariaDB", "MongoDB", "MySQL", "Oracle", "PostgreSQL", "SQLite", "Supabase"];

    const [opacity, setOpacity] = useState("opacity-0");
    const [nextOpacity, setNextOpacity] = useState("opacity-0");
    const [success, isSuccess] = useState(false);
    const [nextDisabled, setNextDisabled] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setOpacity("opacity-100");
        }, 500);
    }, [])

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                setNextOpacity("opacity-100");
                setNextDisabled(false);
            }, 50);
        }
    }, [success])

    function nextStep() {
        setOpacity("opacity-0");
        setTimeout(() => {
            props.setScreen("mainapp");
        }, 500);
    }

    function tryConnection() {
        isSuccess(true);
    }

    return (
        <section className={`${opacity} w-full h-full flex flex-col justify-center items-center gap-12 duration-500`}>
            <div className="w-[600px] flex flex-col justify-center gap-12 items-center">
                <h2 className="text-3xl duration-300">Configure your database engine</h2>
                <Select className="w-full" placeholder="Select your database" options={options} />
                <div className="flex flex-col justify-center items-center gap-4 w-full">
                    <InputText className="w-full" type="text" label="URL" id="url" placeholder="https://example.com/" />
                    <InputText className="w-full" type="text" label="User" id="user" placeholder="admin" />
                    <InputText className="w-full" type="password" label="Password" id="pass" placeholder="123456" />
                    <InputText className="w-full" type="text" label="Table name for DatabaseViewer" id="table" placeholder="Name" />
                    <Button disabled={false} onClick={tryConnection} argument="" className="">Try connection</Button>
                </div>
                <div className={`flex flex-col gap-4 justify-center items-center duration-500`}>
                    <p className={`${nextOpacity} duration-500`}>Connection Success, click next to create the application database.</p>
                    <Button disabled={nextDisabled} onClick={nextStep} argument="" className="">Next</Button>
                </div>
            </div>
        </section>
    )
}

export default FirstConfig
