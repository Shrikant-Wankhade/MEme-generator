import React, { useEffect } from "react";



export default function Meme() {
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        console.log("ran")
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
            
    }, [])
    
    function getMemeImage() {
        console.log("get meme")
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    function handleChange(event) {
        event.preventDefault()

        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    return (
        <main>
            <div className="form">
                <div className="form__input__div">
                    <input 
                        className="form--input" 
                        type="text" 
                        placeholder="top text" 
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                />
                    <input 
                        className="form--input" 
                        type="text" 
                        placeholder="bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button 
                    onClick={getMemeImage} 
                    className="form--button"
                    >
                        Get a new meme image
                    </button>
            </div>
            <div className="meme">
                <img className="meme--image" src={meme.randomImage}/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>  
        </main>
    )
}