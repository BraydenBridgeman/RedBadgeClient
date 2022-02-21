// import React from 'react';
// import { Button, Form } from 'reactstrap';

// import APIURL from '../Helpers/environments';

// type Props = {
//     sessionToken: string
//     setCreateList: any
//     createList: any
//     movies: any
// }

// type State = {
//     listName: string,
//     movieTitle: string,
// }

// class UpdateList extends React.Component<Props, State> {
//     constructor(props: Props) {
//         super(props)
//         this.state = {
//             listName: '',
//             movieTitle: '',
//         }
//     }

//     updateList = (props: any) => {
//         fetch(`${APIURL}/movieList/list/${props.createList.idNumber}`, {
//             method: "PUT",
//             body: JSON.stringify({
//                 userList: { listName: this.state.listName, movieTitle: this.state.movieTitle }
//             }),
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${this.props.sessionToken}`
//             })
//         }).then((res) => res.json())
//             .then((data) => {
//                 console.log(data);
//                 this.props.setCreateList(data);
//                 console.log(this.props.createList);
//                 this.setState({
//                     listName: this.props.createList.listName,
//                     movieTitle: this.props.createList.movieTitle
//                 })
//                 alert(`Movie List Updated!`)
//             })
//     }

//     render() {
//         return (
//             <div>
//                {this.props.movies.map
//                             ((: {
//                                 Poster: string | undefined;
//                                 Title: string;
//                                 Year: number;
//                                 Genre: string;
//                                 Plot: string;
//                             }, _index: any) =>
//                                 <div key={_index}>
//                                     <img style={{ width: "250px" }} src={movie.Poster} alt="movie poster"></img>
//                                     <h2>{movie.Title}</h2>
//                                     <h4>{movie.Year}</h4>
//                                     <p id="genre"><span>{movie.Genre}</span></p>
//                                     <p id="plot"><span>{movie.Plot}</span></p>
//                                     <AddMovies setTargetMovie={props.setTargetMovie} sessionToken={props.sessionToken} movies={movie} />
//                                     <br />
//                                     <br />
//                                 </div>
//                             )}
//             </div>
//         )
//     }
// }

// export default UpdateList;
export {}