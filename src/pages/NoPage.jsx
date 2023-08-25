import React from "react";
import {Link } from "react-router-dom";
import '../styles/pages/_noPage.scss'

function NoPage() {
    return (
        <main className="errorPage">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </main>
    )
}

export default NoPage;