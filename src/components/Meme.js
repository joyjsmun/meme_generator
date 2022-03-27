import memesData from "../memesData";
import React from "react";



export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prev => ({
            ...prev,
            randomImage: url
        }))
        
    }
 
    return(
        <div className="meme">
            <div className="form">
                    <input placeholder="Top Text"/>
                    <input placeholder="Bottom Text"/>
                    <button onClick={getMemeImage}>Get a new meme image</button>
            </div>
            {meme.randomImage? <img className="memeImg" src={meme.randomImage} alt="img" /> : null}
        </div>
    )
}