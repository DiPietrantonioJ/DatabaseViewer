import { useEffect, useState } from "react"
import InputText from "../../common/inputs";
import Select from "../../common/selects";
import Button from "../../common/buttons";

function FirstConfig(props: { setScreen: any }) {

    const options = ["MariaDB", "MongoDB", "MySQL", "Oracle", "PostgreSQL", "SQLite", "Supabase"];

    const [opacity, setOpacity] = useState("opacity-0");
    const [nextOpacity, setNextOpacity] = useState("opacity-0");
    const [success, isSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setOpacity("opacity-100");
        }, 1000);
    }, [])

    useEffect(() => {
        if (success) {

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
        setTimeout(() => {
            setNextOpacity("opacity-100");
        }, 50);   
    }

    return (
        <section className={`${opacity} w-full h-full flex flex-col justify-center items-center gap-12 duration-500`}>
            <h2 className="text-3xl duration-300">Configure your database engine</h2>
            <Select placeholder="Select your database" options={options} />
            <div className="flex flex-row justify-center items-end gap-4">
                <InputText className="" type="text" label="URL" id="url" placeholder="https://example.com/" />
                <InputText className="" type="text" label="User" id="user" placeholder="admin" />
                <InputText className="" type="password" label="Password" id="pass" placeholder="123456" />
                <InputText className="" type="text" label="Table" id="table" placeholder="Table name" />
                <Button onClick={tryConnection} argument="">Try connection</Button>
            </div>
            {success &&
                <div className={`${nextOpacity} flex flex-col justify-center items-center duration-500`}>
                    <p>Connection Success, click next to create the application database.</p>
                    <Button onClick={nextStep} argument="">Next</Button>
                </div>
            }
        </section>
    )
}

export default FirstConfig
