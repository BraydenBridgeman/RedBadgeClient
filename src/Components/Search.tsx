import React from 'react';
import TextField from '@mui/material/TextField';

import './Search.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = (props: any) => {
    return (
        <div className="container searchBar">
            <br />
            <TextField fullWidth label="Search Movies Here..." id="fullWidth"
                value={props.value}
                onChange={(e) => props.setSearchValue(e.target.value)}
                placeholder="Find A Movie">
            </TextField>
        </div>
    )
}

export default Search;