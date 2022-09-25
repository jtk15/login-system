import React, {useState} from 'react';

import './style.css'

const LoginPage = () => {

    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
    }

    return (
        <div id="login">
            <h1 className="title">Login do sistema</h1>

            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Email: </label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                
                <div className="field">
                    <label htmlFor="senha">Senha: </label>
                    <input 
                        type="password" 
                        name="pass" 
                        id="pass"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>

                <div className="action">
                    <button>Entrar</button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;