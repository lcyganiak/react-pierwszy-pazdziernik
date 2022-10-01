import React, { useEffect, useState } from "react";




function Paragraf(props) {
    const [wartoscParagrafu, setWartoscParagrafu] = useState(props.value || '')

    const [kolenaWartosc, setKolejnaWartosc] = useState('Jakaś tam wartosc')


    const [expapleObjState, setExpapleObj] = useState({name: "jan", age: 45})



    useEffect(() => {
        console.log("useEffect dla kolenaWartosc")
    }, [kolenaWartosc])
    useEffect(() => {
        console.log("useEffect dla wartoscParagrafu")
    }, [wartoscParagrafu])

    useEffect(() => {
        console.log(this , 'useEffect')
    }, [])

    const zminaNazyw = () => {
        const nowynapis = Math.random()
        setWartoscParagrafu(nowynapis)
    }
    const zminaState2 = () => {
        console.log(this , 'useEffect')
        const nowaNazwa = Math.random() * 1000
        setKolejnaWartosc(nowaNazwa)
    }
    return (
        <>
            <p>
                {wartoscParagrafu}
                <button onClick={zminaNazyw}>Zmina Napisu</button>
            </p>
                {kolenaWartosc}
                <button onClick={zminaState2}>Zmina State 2</button>
            <p>

            </p>
        </>

    )
}

export default Paragraf;