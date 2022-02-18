import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserIndex.css';
import UserLists from './UserLists';

const UserIndex = (props: any) => {
    useEffect(() => {

    }, [])

    return (
        <div>
            <UserLists sessionToken={props.sessionToken} />
        </div>
    );
}

export default UserIndex;