import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';

import Login from './Login';
import RegisterUser from './RegisterUser';

const SignIn = (props: any) => {
    const [settingOne, setSettingOne] = useState(true);

    useEffect(() => {
    },[]);

    return(
        <div className="userSignIn">
            {settingOne 
            ? 
            <Login updateToken={props.updateToken} 
            setSettingOne={setSettingOne} 
            current={settingOne} 
            changeCount={props.changeCount} 
            setChangeCount={props.setChangeCount}/> 
            :
            <RegisterUser updateToken={props.updateToken} 
            setSettingOne={setSettingOne} 
            current={settingOne} 
            changeCount={props.changeCount} 
            setChangeCount={props.setChangeCount}/>}
        </div>
    );
}

export default SignIn;