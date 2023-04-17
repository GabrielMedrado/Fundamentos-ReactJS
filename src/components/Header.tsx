import sytles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
 return (
    <header className={sytles.header}>
       <img src={igniteLogo} alt="Logotipo do Ignite" />
    </header>  
    );
}