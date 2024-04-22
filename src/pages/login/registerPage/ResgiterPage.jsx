//import React from 'react'
import Bttn_Back from '../../../components/bttns/bttn_Back/Bttn_Back'
import { useForm } from 'react-hook-form'

import "./register.scss"

//import { API } from '../../../context/postContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { TRUE } from 'sass';

export default function ResgiterPage() {
    //const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { isDirty, isValid, errors }
    } = useForm({
        mode: "onBlur"
    });

    const submit = (dataForm) => {
        navigate("/register/registerContact");
        localStorage.setItem("userDataString", JSON.stringify(dataForm));

        console.log("userRegisterDataForm", dataForm);

    }
    //recogemos el objeto transformado en string y lo volvemos a pasar a objeto

    console.log(JSON.parse(localStorage.getItem('form')));

    const bb = watch(('coverImage'));

    console.log(bb);

    return (

        <div className="reg-perfil">
            <div className="top-P">
                <Bttn_Back />
                <h4>1 de 4</h4>
            </div>
            <div className="info-P">
                <h2>Dinos quién eres</h2>

            </div>
            <form onSubmit={handleSubmit(submit)} >
                <fieldset className="formulario-P" >

                    <legend></legend>

                    <div className='input-foto'>
                        <img src={bb} />
                    </div>

                    <label >
                        <input
                            type="text"

                            id="foto-P"
                            placeholder='image'
                            {...register("coverImage")}
                        />
                    </label>

                    <label>
                        <input
                            type="text"
                            id="name-P"
                            placeholder='Nombre Completo'
                            {...register("name", { required: true })} />
                    </label>

                    <label>
                        <input type="text"
                            id="email-P"
                            placeholder='Direccion Email'
                            {...register("email", { required: true, pattern: /@/ })} />
                        {errors.email && <p style={{ color: "red" }}>El formato email no es válido</p>}
                        {/* , { required: true, pattern: /@/})} /> */}
                        {/* {errors.email && <p style={{ color: "red" }}>El email no es válido</p>} */}
                    </label>

                    <label>
                        <input type="number"
                            id="telefono-P"
                            placeholder='Móvil'
                            {...register("phoneNumber", { required: true, pattern: /^[0-9]+$/ })} />
                        {errors.phoneNumber && <p style={{ color: "red" }}>El teléfono no es válido, dede ser numerico</p>}
                        {/* , { required: true, pattern: /^[0-9]+$/})} /> */}
                        {/* {errors.phoneNumber && <p style={{ color: "red" }}>El teléfono no es válido</p>} */}
                    </label>

                    <label>
                        <input type="password"
                            id="pass-P"
                            placeholder='Password'
                            {...register("password", { required: true, pattern: /^(?=.*[A-Z]).{6,}$/ })} />
                        {errors.password && <p style={{ color: "red" }}>El password debe tener una minuscula y seis caracteres minimo</p>}



                        {/* {errors.password && errors.password.type === 'pattern' && <p style={{ color: "red" }}>La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.</p>} */}
                    </label>

                    {/* <button className='guardar-P'>Guardar perfil</button> */}
                    <input type="submit" id="guardar-P" value="Guardar perfil"
                        className={!isDirty || !isValid ? "disabled" : ""}
                        disabled={!isDirty || !isValid} />
                </fieldset>

                {/* <div className='d-flex align-items-center flex-column'>
                <Link to={"/register/registerContact"}>Crear</Link>
            </div> */}
            </form>

        </div>
    )
}


