
import { Link } from 'react-router-dom'
import FormLogin from '../../../components/forms/formLogin/FormLogin'

import './_loginPage.scss'

export default function LoginPage() {
    return (
        <main>
            <section className="s-loginPage__header">
                <div className='s-loginPage__header__img'>
                    <img src="public/loginPage/loginPageImg.png" alt="allergy login page" />
                    <img src="public/loginPage/logo app.png" alt="llergy login page" />
                </div>
                <div className='s-loginPage__header__info'>
                    <h2>¡Bienvenido de nuevo!</h2>
                    <p>Por favor, introduce tus datos <br /> para continuar.</p>
                </div>
            </section>
            <FormLogin></FormLogin>
            <section className='s-loginPage__options'>
                <Link to="/register">Crea tu cuenta aquí</Link>
                <Link to="/">Me registraré en otro momento</Link>
            </section>
        </main>
    )
}

