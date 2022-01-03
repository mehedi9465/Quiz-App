import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface UserInformation{
    name: string,
    gender: string,
    lang: string
}

const Home: React.FC = () => {

    const navigate = useNavigate();

    const [userInfo, setUserinfo] = useState<UserInformation>({
        name: "",
        gender: "male",
        lang: "html"
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setUserinfo({...userInfo, [name]: value})
    }

    const handleSubmit = (e: React.FormEvent<EventTarget>) =>{
        e.preventDefault();
        navigate('/exam', {
            state: userInfo
        });
    }

    return (
        <>
            <div style={{marginTop: '150px'}}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input id='name' type='text' name='name' onChange={handleOnChange}/>
                    <br />
                    <br />
                    <label htmlFor="gender">Gender: </label>
                    <select  name="gender" id="gender" onChange={handleOnChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <br />
                    <br />
                    <label htmlFor="gender">Language: </label>
                    <select  name="lang" id="gender" onChange={handleOnChange}>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                    </select>
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
};

export default Home;