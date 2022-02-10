import React from "react";
import MovieList from "./movie-list";

import LiloStitch from './LiloStitch.jpg';
import PrincessFrog from './PrincessFrog.jpg';
import Soul from './Soul.jpg'
import Raya from './Raya.jpg'
import Cruella from './Cruella.jpg'

export default class WebLayout extends React.Component {
    render() {
        let movies = [
            {
                title: "Lilo & Stitch",
                image: LiloStitch,
                rating: "PG",
                synopsis: "A young and parentless girl adopts a 'dog' from the local pound, completely unaware that it's supposedly a dangerous scientific experiment that's taken refuge on Earth and is now hiding from its creator and those who see it as a menace.",

            },

            {
                title: "Princess & the Frog",
                image: PrincessFrog,
                rating: "PG",
                synopsis: "A waitress, desperate to fulfill her dreams as a restaurant owner, is set on a journey to turn a frog prince back into a human being, but she has to face the same problem after she kisses him.",

            },

            {
                title: "Soul",
                image: Soul,
                rating: "PG",
                synopsis: "After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife.",

            },

            {
                title: "Raya and The Last Dragon",
                image: Raya,
                rating: "PG",
                synopsis: "In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.",

            },

            // {
            //     // title: "Cruella",
            //     // image: Cruella,
            //     // rating: "PG-13",
            //     // synopsis: "A live-action prequel feature film following a young Cruella de Vil before she appeared in 101 Dalmation's",

            // },
        ];
        return (
            <div className="movie">
                <MovieList {...{movies: movies, title: 'Cruella', image: Cruella, rating: 'PG-13', synopsis:'A live-action prequel feature film following a young Cruella de Vil before she appeared in 101 Dalmations',}} />
            </div>
        )
    }
}