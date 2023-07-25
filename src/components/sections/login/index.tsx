import { useEffect, useState } from "react";
import InputText from "../../common/inputs";
import Button from "../../common/buttons";

function Login(props: {
    setUserDisplayName(displayName: any): unknown;
    setDatabases(databases: any): unknown;
    setBrandImg(brandImg: any): unknown;
    setBrandName(brandName: any): unknown;
    setErrorMsg: any, postFunction: any, setScreen: any, setCurrentUser: any
}) {

    const [opacity, setOpacity] = useState("opacity-0");
    const [labelOpacity, setLabelOpacity] = useState("opacity-0");
    const [user, setUser] = useState("opacity-0");
    const [password, setPassword] = useState("opacity-0");

    useEffect(() => {
        setTimeout(() => {
            setOpacity("opacity-100");
        }, 500);
    }, [])

    function tryLogin() {
        props.postFunction("./mainHandler.php", [
            { name: "username", value: user },
            { name: "password", value: password }
        ]).then((response: any) => {
            if (response.status == 200) {
                if (response.data == "error") {
                    setLabelOpacity("opacity-100");
                    setTimeout(() => {
                        setLabelOpacity("opacity-0");
                    }, 5000);
                } else {
                    props.setBrandName(response.data.brand.brandName);
                    props.setBrandImg(response.data.brand.brandImg);
                    props.setDatabases(response.data.databases);
                    props.setUserDisplayName(response.data.user.displayName);
                    setOpacity("opacity-0");
                    setTimeout(() => {
                        props.setScreen("mainapp");
                    }, 500);
                }
            } else {
                if (response.status == 404) {
                    props.setErrorMsg("Check your DatabaseViewer installation folder if mainHandler.php exists.");
                }
            }
        })
    }

    return (
        <section className={`${opacity} w-full h-full flex flex-col justify-center items-center gap-12 duration-500`}>
            <div className="w-[600px] flex flex-col justify-center gap-3 items-center">
                <h2 className="text-3xl duration-300">Welcome to</h2>
                <h1 className="arvo text-4xl duration-300">DatabaseViewer</h1>
                <div className="flex flex-col justify-center items-center gap-6 w-full">
                    <InputText onChange={setUser} className="w-full" type="text" label="User" id="user" placeholder="admin" />
                    <InputText onChange={setPassword} className="w-full" type="password" label="Password" id="pass" placeholder="123456" />
                    <p className={`${labelOpacity} duration-500 text-red-500`}>Incorrect username or password</p>
                    <Button disabled={false} onClick={tryLogin} argument="" className="">Login</Button>
                </div>
            </div>
        </section>
    )
}

export default Login
