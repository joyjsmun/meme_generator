import React from "react";


export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event){
        const {name,value} = event.target
        setMeme(prev => {
          return {
              ...prev,
              [name] : value
          }

        })
    }

    
    
    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => setAllMemeImages(data.data.memes));
    },[])

    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prev => ({
            ...prev,
            randomImage: url
        }))
        
    }


 
    return(
        <div className="meme">
            <div className="form">
                    <input type="text" name="topText" onChange={handleChange} placeholder="Top Text"/>
                    <input type="text" name="bottomText" onChange={handleChange} placeholder="Bottom Text"/>
                    <button onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div className="memeImgForm">
                {meme.randomImage? <img className="memeImg" src={meme.randomImage} alt="img" /> : null}
                <h1 className="memeImgForm__top text">{meme.topText}</h1>
                <h1 className="memeImgForm__bottom text">{meme.bottomText}</h1>
            </div>
        </div>
    )
}