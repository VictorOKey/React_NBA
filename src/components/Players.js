import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Players = () => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('https://www.balldontlie.io/api/v1/players')
            .then(res => res.json())
            .then( result => {
                setPlayers(result.data);
            })
            .then(result => console.log(result));
    }, []);

    return (
        <>
        <h2>Список игроков:</h2>
        <ul>
            {players.map((x, i) => 
            <li><Link key={x.id} 
            to={`/players/${i + 1}`}>{x.first_name} {x.last_name}</Link></li>)}
        </ul>
        </>
        
    );
};

export default Players;