import React from 'react'
import { saveAs } from 'file-saver'

let memeUrl = "http://i.imgflip.com/1bij.jpg"

export default function Form () {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomMeme: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemes, setAllMemes] = React.useState({})
    React.useEffect(() => {
       fetch('https://api.imgflip.com/get_memes')
       .then(res => res.json())
       .then(data => setAllMemes(data.data.memes)
       )},
       [])

 
    function GetMemeImage () {
        const memesArray = allMemes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        memeUrl = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomMeme: memeUrl
        }))
        return memeUrl
    }

    const [formData, setFormData] = React.useState({
        topText: "",
        bottomText: ""
    })

    function formHandler(event) {
        const {name, value} = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name] : value
            }
        })
    }

        function downloadImage (){
          saveAs(memeUrl, 'image.jpg')
        }
     

    return (
      <main>
          <div className="form">
            <input 
                type="text" 
                className="form-input" 
                placeholder="Top Text"
                name="topText"
                value={formData.topText}
                onChange={formHandler}
            />


            <input 
                type="text" 
                className="form-input"
                placeholder="Bottom Text"
                name="bottomText"
                value={formData.bottomText}
                onChange={formHandler}
             /><br/><br/>
            <button className="meme-btn" onClick={GetMemeImage}> Get a new meme </button>
            <img className="meme-img" src={meme.randomMeme} alt="meme" />   
            <h1 className="meme-text top">{formData.topText === "" ? "Insert top text" : formData.topText}</h1>
            <h1 className="meme-text bottom">{formData.bottomText === "" ? "Insert bottom text": formData.bottomText}</h1> 

            <input className="download-btn" type="button" onClick={downloadImage} value="Download"/>
          </div>
      </main>
    );
  }
  