import React, {useState} from "react"

const FilmForm = ({onFilmSubmit}) => {
    const [name, setName] = useState("")
    const [url, setUrl] = useState("")

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleUrlChange = (event) => {
        setUrl(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const nameToSubmit = name.trim()
        const urlToSubmit = url.trim()
        if (!nameToSubmit || !urlToSubmit){
            return
        }
        onFilmSubmit({name: nameToSubmit, url: urlToSubmit})
        setName("")
        setUrl("")

    }

    return (
        <>
        <h2>Add Film</h2>
        <form onSubmit = {handleFormSubmit}>
            
            <input type="text" placeholder="Film Name" value={name} onChange={handleNameChange}/>

            <input type="text" placeholder="URL" value={url} onChange={handleUrlChange}/>

            <input type="submit" value="Post"/>
    
        </form>
        </>
    )
}

export default FilmForm