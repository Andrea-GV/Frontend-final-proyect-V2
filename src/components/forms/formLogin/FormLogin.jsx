//import React, { useEffect } from 'react'
//import axios from 'axios';

import "./_formLogin.scss"

import { useForm } from 'react-hook-form';
import { API } from '../../../context/postContext';
import { useNavigate } from 'react-router-dom';

export default function FormLogin() {

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (dataForm) => {

        const { data } = await API.post("/login", dataForm);

        console.log("login", data);
        // console.log(data.data.token);

        localStorage.setItem("token", data.data.token)
        localStorage.setItem("userId", data.data.user._id)



        navigate("/")
    }

    return (

        <main>



            <div className="c-loginForm__container">

                <form onSubmit={handleSubmit(onSubmit)} >
                    <fieldset>
                        <legend></legend>

                        <label className="c-loginForm__label" >
                            <input className="c-loginForm__input"
                                type="text"
                                placeholder='Email'
                                {...register("email")} />
                        </label>

                        <label className="c-loginForm__label" >
                            <input className="c-loginForm__input"
                                type="text"
                                placeholder='Password'
                                {...register("password")} />
                        </label>

                    </fieldset>

                    <button
                        className="c-loginForm__button">Entrar</button>

                </form>

            </div>


        </main>
    )
}
