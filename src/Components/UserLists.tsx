// import React, { useState, useEffect } from 'react';
// import { Card, Col, Row} from 'reactstrap';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './UserLists.css';

// import AddMovies from "../PublicList/AddMovies";
// import CommentsReviews from '../PublicList/Comments-Reviews';

// import APIURL from '../Helpers/environments';

// const UserLists = (props : any) => {

//     const [myMovies, setMyMovies] = useState([]);

//     useEffect(() => {
//         getMovies();
//     }, [])

//     const getMovies = () => {
//         if (props.sessionToken) !== '') {
//             fetch(`${APIURL}/allMovies/getMovies`, {
//                 method: 'GET',
//                 headers: new Headers ({
//                     'Content-Type' : 'application/JSON',
//                     'Authorization' : `Bearer ${props.sessionToken}`
//                 })
//             })
//             .then(response => response.json())
//         }
//     }
// }
export {}