import React from "react";


export default function Meme() {
    return (
        <form className="form">
            <div className="form__input__div">
                <input className="form__input form__input--text" type="text" placeholder="top text"></input>
                <input className="form__input form__input--image" type="text" placeholder="bottom text"></input>
            </div>
            <button className="form--button">Get a new meme image</button>
        </form>
    )
}