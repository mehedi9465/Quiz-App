import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Button, Container, MenuItem, TextField, Typography} from '@mui/material'

export interface UserInfo{
    name: string,
    gender: string,
    lang: string       
}

const Home = () => {
    const history = useHistory();
    const [userInfo, setUserInfo]  = useState<UserInfo>({name: '', gender: 'Male', lang: 'React'});
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUserInfo({...userInfo, [name]: value});
    }

    const handleSubmit = () => {
        history.push('/exam', userInfo);
    }

    return (
        <Container data-testid='home'>
            <Typography variant='h4' sx={{margin: '20px 0'}}>User Details</Typography>

            <div>
                <TextField 
                    name='name'
                    value={userInfo?.name}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <TextField 
                    name='name'
                    value={userInfo?.gender}
                    onChange={handleInputChange}
                    select
                >
                    <MenuItem value='Male'>Male</MenuItem>
                    <MenuItem value='Female'>Female</MenuItem>
                </TextField>
            </div>
            <div>
                <TextField 
                    name='lang'
                    value={userInfo?.lang}
                    onChange={handleInputChange}
                    select
                >
                    <MenuItem value='JavaScript'>JavaScript</MenuItem>
                    <MenuItem value='HTML'>HTML</MenuItem>
                </TextField>
            </div>

            <Button
                variant='contained'
                disabled={userInfo?.name.length < 1}
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </Container>
    );
};

export default Home;