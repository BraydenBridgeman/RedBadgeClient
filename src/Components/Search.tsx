import React from 'react';
import { Input } from 'reactstrap';

import './Search.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = (props: any) => {
    return (
        <div className="container searchBar">
            <Input className="form-control"
                value={props.value}
                onChange={(e) => props.setSearchValue(e.target.value)}
                placeholder="Search movies here...">
            </Input>
        </div>
    )
}

export default Search;