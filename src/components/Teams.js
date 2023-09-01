import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation, Link, Route, Routes } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Teams = () => {
    const [teams, setTeams] = useState({});
    const { teamsId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://www.balldontlie.io/api/v1/teams/${teamsId}/`)
            .then(res => res.json())
            .then(result => {
                setTeams(result);
            })
            .catch(() => {
                navigate('/not-found');
            })
    }, [teamsId, navigate]);

    const nextProductHandler = () => {
        navigate(`/teams/${Number(teamsId) + 1}`);
    };
    const backProductHandler = () => {
        if(teamsId != 1){
            navigate(`/teams/${Number(teamsId) - 1}`);
        }    
    };
    return (
        <>
        <li>
			
			<Card sx={{ minWidth: 250, border: 3, borderColor: "black", borderRadius: '16px',
			 marginTop:'20px', marginBottom: '20px' }}>
				<CardContent>
					<Typography variant="h4" component="div" align="center" >
					{teams.full_name}
					</Typography>
					<Typography sx={{ fontSize: 20}} color="black" gutterBottom>
					Аббревиатура: {teams.abbreviation} 
					</Typography>
					<Typography sx={{ fontSize: 20 }} color="black" gutterBottom>
					Город: {teams.city}
					</Typography>
					<Typography sx={{ fontSize: 20 }} color="black" gutterBottom>
					Конференция: {teams.conference}
					</Typography>
					<Typography sx={{ fontSize: 20 }} color="black" gutterBottom>
					Дивизион: {teams.division}
					</Typography>
				</CardContent>
    		</Card>
		</li>
            <button onClick={backProductHandler}>Back</button>
            <button onClick={nextProductHandler}>Next</button>
        </>
    );
};

export default Teams;
