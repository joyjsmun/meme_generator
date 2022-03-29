import memesData from "../memesData";
import React from "react";



export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event){
        setMeme(prev => {
          return {
              ...prev,
              [event.target.name] : event.target.value
          }

        })
    }

    console.log(meme)
    
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
            <form className="form">
                    <input type="text" name="topText" onChange={handleChange} placeholder="Top Text"/>
                    <input type="text" name="bottomText" onChange={handleChange} placeholder="Bottom Text"/>
                    <button onClick={getMemeImage}>Get a new meme image</button>
            </form>
            <div>Top:{FormData.topText}</div>
            <div>Bottom:{FormData.bottomText}</div>
            {meme.randomImage? <img className="memeImg" src={meme.randomImage} alt="img" /> : null}
        </div>
    )
}