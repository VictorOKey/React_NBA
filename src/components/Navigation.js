import { Link, NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
    const setNavStyle = ({isActive}) => {
        return isActive
            ? styles['active-link']
            : undefined;
    }

    const clickHandler = () => {
        setNavStyle = {isActive};
    };

    return (
        <nav>
            <NavLink className={setNavStyle} to="/players">Игроки</NavLink>
            <NavLink className={setNavStyle} to="/teams">Команды</NavLink>
        </nav>
    );
}
