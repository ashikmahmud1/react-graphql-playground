import React, {useState} from "react";
import {isLoggedInVar} from "../apollo";

export const LoggedOutRouter = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (event: any) => {
        const {target: {name, value}} = event;
        if (name === "email") {
            setEmail(value)
        }
        if (name === "password") {
            setPassword(value);
        }
    }

    return (
        <div>
            <h1>Logged Out</h1>
            <form>
                <input
                    onChange={onChange}
                    name="email"
                    type="email"
                    required
                    placeholder="email"
                    value={email}/>
                <input
                    onChange={onChange}
                    name="password"
                    type="password"
                    required
                    placeholder="password"
                    value={password}/>

            </form>
        </div>
    )
}