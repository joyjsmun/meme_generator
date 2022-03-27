import memesData from "../memesData";
import React from "react";



export default function Meme(){
    const [memeImage,setImage] = React.useState("")
    const RandomMeme = () => {
        const memes = memesData.data.memes;
        const randNum = Math.floor(Math.random()*memes.length)
        setImage(memes[randNum].url);
    }
    return(
        <div className="meme">
            <div className="form">
                    <input placeholder="Top Text"/>
                    <input placeholder="Bottom Text"/>
                    <button onClick={RandomMeme}>Get a new meme image</button>
            </div>
            {memeImage? <img className="memeImg" src={memeImage} alt="img" /> : null}
        </div>
    )
}