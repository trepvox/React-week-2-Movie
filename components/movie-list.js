import LiloStitch from './LiloStitch.jpg';
import PrincessFrog from './PrincessFrog.jpg';
import Raya from './Raya.jpg'

import React from "react";
import Movie from "./movie";

export default class MovieList extends React.Component {
        render() {
            return (
                <div className="movieList container">
                    <Movie {...
                        {id: 1,
                            key: 1,
                            title: 'Lilo & Stitch', 
                            image: LiloStitch,
                            synopsis: "A young and parentless girl adopts a 'dog' from the local pound, completely unaware that it's supposedly a dangerous scientific experiment that's taken refuge on Earth and is now hiding from its creator and those who see it as a menace.",
                            rating: "PG"}} />
                    <Movie {...
                        {id: 2,
                            key: 2,
                            title: 'Princess & The Frog',
                            image: PrincessFrog,
                            synopsis: "A waitress, desperate to fulfill her dreams as a restaurant owner, is set on a journey to turn a frog prince back into a human being, but she has to face the same problem after she kisses him.",
                            rating: "PG"}} />
                    <Movie {...
                        {id: 3,
                            key: 3,
                            title: 'Raya & The Last Dragon',
                            image: Raya,
                            synopsis: "In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.",
                            rating: "PG"}} />
                </div>
            );
        }
}