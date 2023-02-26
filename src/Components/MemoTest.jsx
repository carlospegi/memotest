import React, { useEffect, useState } from 'react'

const IMAGES = [
  'https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/apple-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/firefox-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/git-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/linkedin-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/python-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/atom-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/doctrine-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/grunt-original.svg?size=128&color=currentColor',
].flatMap(img => [`a|${img}`, `b|${img}`]).sort(() => Math.random() - 0.5)

const MemoTest = () => {


  const [guessed, setGuessed] = useState([]);            // -> los adivinados, dado vuelta
  const [selected, setSelected] = useState([]);          //  -> seleccionados si son iguales 2 pasan a guessed

useEffect(() => {

if(selected.length === 2){

  if(selected[0].split('|')[1] === selected[1].split('|')[1] ){
    setGuessed(sel => sel.concat(selected))

    setSelected([])
  }else{
    setTimeout(() => {
      
      setSelected([])
    }, 1000);
  }


}

}, [selected]);

useEffect(() => {
if(guessed.length === IMAGES.length){
  alert(' YOU WIN !!!')

  setTimeout(() => {
    setGuessed([])
  }, 1000);
}
}, [guessed]);

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gridGap: '10px'


    }}>

      {
        IMAGES.map((img) => {
          const [, url] = img.split('|');
          return (
            <div
            onClick={()=>{selected.length < 2 && setSelected(se=>se.concat(img))}}
             key={img}
              style={{
                border: "2px solid gray",
                borderRadius: '5%',
                padding: '10px'
              }}

            >
              {
                selected.includes(img) || guessed.includes(img) ? (
                  <img src={url} alt="icon" />
                ) : (
                  <img src="https://icongr.am/clarity/half-star.svg?size=128&color=currentColor" alt="icono" />
                )
              }
            </div>
          )



        }

        )
      }

    </div >
  )
}

export default MemoTest
