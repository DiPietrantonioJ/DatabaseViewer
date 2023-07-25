import { useEffect, useState } from "react"
import InputText from "../../common/inputs";
import Select from "../../common/selects";
import Button from "../../common/buttons";

function FirstConfig(props: { setErrorMsg: any, postFunction: any, setScreen: any }) {

    const options = ["MariaDB", "MongoDB", "MySQL", "Oracle", "PostgreSQL", "Supabase", "Firebase", "Microsoft SQL Server"];

    const [opacity, setOpacity] = useState("opacity-0");
    const [nextOpacity, setNextOpacity] = useState("opacity-0");
    const [success, isSuccess] = useState(false);
    const [nextDisabled, setNextDisabled] = useState(true);
    const [databaseUrl, setURL] = useState("");
    const [engine, setEngine] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [table, setTable] = useState("");
    const [message, setMessage] = useState("");
    const [manually, setManually] = useState(false);
    const [manuallyOpacity, setManuallyOpacity] = useState("opacity-0");

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
        } else {
            setTimeout(() => {
                setNextOpacity("opacity-0");
                setNextDisabled(true);
            }, 50);
        }
    }, [success])

    function nextStep() {
        props.postFunction("./checkFirstTime.php", [
            { name: "servername", value: databaseUrl },
            { name: "username", value: user },
            { name: "password", value: password },
            { name: "engine", value: engine.toLocaleLowerCase() },
            { name: "table", value: table },
            { name: "action", value: "firstConfig" },
        ]).then((response: any) => {
            if (response.status == 200) {
                if (response.data == 1) {
                    setOpacity("opacity-0");
                    setTimeout(() => {
                        props.setScreen("mainapp");
                    }, 500);
                } else {
                    alert(response.data);
                    setManually(true);
                    setManuallyOpacity("opacity-100");
                }
            } else {
                if (response.status == 404) {
                    props.setErrorMsg("Check your DatabaseViewer installation folder if checkFirstTime.php exists.");
                }
            }
        })

    }

    function tryConnection() {
        props.postFunction("./connectionChecker.php", [
            { name: "servername", value: databaseUrl },
            { name: "username", value: user },
            { name: "password", value: password },
            { name: "engine", value: engine.toLocaleLowerCase() },
            { name: "table", value: table },
            { name: "action", value: "check" },
        ]).then((response: any) => {
            if (response.status == 200) {
                if (response.data == 1) {
                    isSuccess(true);
                    setMessage("Connection Success, click next to create the application database.");
                } else {
                    isSuccess(false);
                    setMessage(response.data);
                }
            } else {
                if (response.status == 404) {
                    props.setErrorMsg("Check your DatabaseViewer installation folder if connectionChecker.php exists.");
                }
            }
        })
    }

    return (
        <section className={`${opacity} w-full h-full flex flex-col justify-center items-center gap-12 duration-500`}>
            <div className="w-[600px] flex flex-col justify-center gap-12 items-center">
                <h2 className="text-3xl duration-300">Configure your database engine</h2>
                <Select onChange={setEngine} className="w-full" placeholder="Select your database" options={options} />
                <div className="flex flex-col justify-center items-center gap-4 w-full">
                    <InputText onChange={setURL} className="w-full" type="text" label="URL" id="url" placeholder="https://example.com/" />
                    <InputText onChange={setUser} className="w-full" type="text" label="User" id="user" placeholder="admin" />
                    <InputText onChange={setPassword} className="w-full" type="password" label="Password" id="pass" placeholder="123456" />
                    <InputText onChange={setTable} className="w-full" type="text" label="Table name for DatabaseViewer" id="table" placeholder="Name" />
                    <Button disabled={false} onClick={tryConnection} argument="" className="">Try connection</Button>
                </div>
                <div className={`flex flex-col gap-4 justify-center items-center duration-500`}>
                    <p className={`${nextOpacity} duration-500`}>{message}</p>
                    <Button disabled={nextDisabled} onClick={nextStep} argument="" className="">Next</Button>
                </div>
            </div>
            {manually &&
                <div className={`${manuallyOpacity}  duration-500`}>
                    Your web engine lacks the permissions to create files. <br/>
                    Please copy the ./templates/{engine}Template.php into your root folder, rename it to mainHandler.php and change the connection params manually. <br/>
                    Then reload this page.
                </div>
            }
        </section>
    )
}

export default FirstConfig
