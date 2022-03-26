import memesData from "../memesData";

export default function Meme(){
    const memes = memesData.data.memes;
    const randNum = Math.floor(Math.random()*memes.length)
    console.log(memes[randNum].url);
    return(
        <div className="meme">
            <div className="form">
                    <input placeholder="Top Text"/>
                    <input placeholder="Bottom Text"/>
                    <button>Get a new meme image</button>
            </div>
        </div>
    )
}