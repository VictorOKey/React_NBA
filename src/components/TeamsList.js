import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const TeamsList = () => {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('https://www.balldontlie.io/api/v1/teams')
            .then(res => res.json())
            .then( result => {
                setTeams(result.data);
            });
    }, []);

    return (
        <>
        <h2>Полный Список Команд:</h2>
        <ul>
            {teams.map((x, i) => <li><Link key={x.id}
            to={`/teams/${i + 1}`}>{x.full_name}</Link></li>)}
        </ul>
        </>
    );
};

export default TeamsList;