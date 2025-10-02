import React from "react";
import "../App.css";

function Header(){
    return(
        <header className="header">
          <h1>Meu Cabeçalho</h1>
          <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/contato">Contato</a></li>
            </ul>
          </nav>
        </header>
    );
}

export default Header;