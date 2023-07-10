import { useEffect, useState } from "react";
import InputText from "../../common/inputs";
import Button from "../../common/buttons";

function Login(props: {setScreen: any, setCurrentUser: any}) {

    const [opacity, setOpacity] = useState("opacity-0");
    const [labelOpacity, setLabelOpacity] = useState("opacity-0");

    useEffect(() => {
        setTimeout(() => {
            setOpacity("opacity-100");
        }, 500);
    }, [])
    
    function tryLogin() {
        if (true) {
            setOpacity('opacity-0');
            setTimeout(() => {
                props.setScreen('mainapp');
            }, 500);
        } else {
            setLabelOpacity("opacity-100");
            setTimeout(() => {
                setLabelOpacity("opacity-0");
            }, 5000);
        }
    }

    return (
        <section className={`${opacity} w-full h-full flex flex-col justify-center items-center gap-12 duration-500`}>
            <div className="w-[600px] flex flex-col justify-center gap-3 items-center">
                <h2 className="text-3xl duration-300">Welcome to</h2>
                <h1 className="arvo text-4xl duration-300">DatabaseViewer</h1>
                <div className="flex flex-col justify-center items-center gap-6 w-full">
                    <InputText className="w-full" type="text" label="User" id="user" placeholder="admin" />
                    <InputText className="w-full" type="password" label="Password" id="pass" placeholder="123456" />
                    <p className={`${labelOpacity} duration-500 text-red-500`}>Incorrect username or password</p>
                    <Button disabled={false} onClick={tryLogin} argument="" className="">Login</Button>
                </div>
            </div>
        </section>
    )
}

export default Login
