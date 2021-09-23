import React from "react";
import {useForm} from "react-hook-form";


interface IForm {
    email: string,
    password: string
}

export const LoggedOutRouter = () => {

    const {register, watch, handleSubmit, formState: {errors}} = useForm<IForm>();
    const onSubmit = () => {
        console.log(watch())
    }

    const onInvalid = () => {
        console.log("can't create account")
    }

    return (
        <div>
            <h1>Logged Out</h1>
            <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
                <div>
                    <input
                        {...register("email",
                            {required: true})
                        }
                        type="email"
                        placeholder="email"/>
                </div>
                {errors.email && <span className="font-bold text-red-600">Email is required</span>}

                <div>
                    <input
                        {...register("password", {required: true})}
                        name="password"
                        type="password"
                        required
                        placeholder="password"/>
                </div>

                <input type="submit" value="Submit"/>

            </form>
        </div>
    )
}