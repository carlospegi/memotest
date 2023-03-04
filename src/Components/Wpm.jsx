import React, { useEffect, useState } from 'react'

const Wpm = () => {

    let List = [
        "internet",
        "computadora",
        "telefono",
        "smartphone",
        "software",
        "hardware",
        "wifi",
        "aplicación",
        "redes",
        "ciberseguridad",
        "nube"
    ]


    const [WORDS, setWORDS] = useState([...List])
    const [word, setWord] = useState('');
    const [indexSelected, setIndexSelected] = useState([]);
    const [text, setText] = useState('');
    const [countWords, setCountWords] = useState(0);
    const [time, setTime] = useState(0);
    const [msg, setMsg] = useState('');

    useEffect(() => {

        const indiceAleatorio = Math.floor(Math.random() * WORDS.length | 0);
        setWord(WORDS[indiceAleatorio])

        const newL = WORDS.filter(e => e !== word)
        setWORDS(newL)
    }, []);


    useEffect(() => {
        if (time !== 0 && msg == '') {
            setTimeout(() => {
                setTime(time - 1)

                if (time - 1 === 0) {

                    setMsg('tiempo terminado')

                }
            }, 1000);
        } else {
            setTime(0)
        }
    }, [time]);

    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {

        e.preventDefault()

        if (text === word) {
            setIndexSelected([...indexSelected, word])
            setCountWords(countWords + 1)
            const newL = WORDS.filter(e => e !== word)
            setWORDS(newL)
            if (newL.length === 0) {
                setMsg('Finish words')
                setTime(0)
            }
            let randomWord = '';
            do {
                const randomIndex = Math.floor(Math.random() * newL.length);
                randomWord = newL[randomIndex];
            } while (indexSelected.includes(randomWord));

            setWord(randomWord);
        }
        setText('')

    }

    const handlePlay = () => {
        setTime(9)
        setMsg('')
        setCountWords(0)
    }

    return (

        <div>
            {
                time > 0 && (
                    <div>

                        {msg == '' && <h3>{time}</h3>}
                        <h2>{word}</h2>


                        <h2>{countWords}</h2>

                        <form onSubmit={handleSubmit}>
                            <input autoFocus value={text} type="text" onChange={handleChange} />
                        </form>



                    </div>

                )
            }
            <div>
                {time == 0 && <button onClick={() => handlePlay()} >PLAY</button>}
            </div>
            <div>
                <h3>{msg}</h3>
            </div>
        </div>





    )
}


export default Wpm

