import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation, Link, Route, Routes } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Player = () => {
    const [player, setPlayer] = useState({});
    const { playerId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://www.balldontlie.io/api/v1/players/${playerId}/`)
            .then(res => res.json())
            .then(result => {
                setPlayer(result);
            })
            .then(result => console.log(result))
            .catch(() => {
                navigate('/not-found');
            })
    }, [playerId, navigate]);

    const nextProductHandler = () => {
        navigate(`/players/${Number(playerId) + 1}`);
    };
    const backProductHandler = () => {
        if(playerId != 1){
            navigate(`/players/${Number(playerId) - 1}`);
        }    
    };
    return (
        <>
        <li>
			
			<Card sx={{ minWidth: 250, border: 3, borderColor: "black", borderRadius: '16px',
			 marginTop:'20px', marginBottom: '20px' }}>
				<CardContent>
					<Typography variant="h4" component="div" align="center" >
					Имя: {player.first_name} {player.last_name}
					</Typography>
					<Typography sx={{ fontSize: 26}} color="black" gutterBottom>
					Позиция на площадке: {player.position} 
					</Typography>
				</CardContent>
    		</Card>
		</li>
            <button onClick={backProductHandler}>Back</button>
            <button onClick={nextProductHandler}>Next</button>
        </>
    );
};

export default Player;
