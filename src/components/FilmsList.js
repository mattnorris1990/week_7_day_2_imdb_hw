import React from "react"
import Film from "./Film"

const FilmsList = ({films}) => {
    
    const filmNodes = films.map(film => {
        return (
            <Film key = {film.id} name = {film.name} url = {film.url}></Film>
        );
    } )
    
    return (
        <>
            <ul>
                {filmNodes}
            </ul>
        </>
    )
}

export default FilmsList