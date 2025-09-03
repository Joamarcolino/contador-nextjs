"use client"
import { useState } from 'react'
export default function Counter() {
    const [numero, setNumero] = useState(0)
    const [value, setValue] = useState(1)
    let [limit, setLimit] = useState(100)
    function add() {
        setNumero(numero + value)
        limiter()
        console.log(numero)
    }
    function minus() {
        setNumero(numero - value)
        limiter()
        console.log(numero)
    }
    function changebodycolor() {
        if (numero < 0) return document.body.style.backgroundColor = "red"
        if (numero > 0) return document.body.style.backgroundColor = "yellow"
        else return document.body.style.backgroundColor = "white"
    }
    function changeelementscolor() {
        if (numero < 0) return 'negative'
        if (numero > 0) return 'positive'
        else return 'neutral'
    }
    function changecountershadow() {
        if (numero < 0) return 'negativelight'
        if (numero > 0) return 'positivelight'
        else return 'neutrallight'
    }
    function limiter() {
        if (numero >= limit || numero <= -limit) {
            setNumero(0)
        }
    }
        function reset() {
            setNumero(0)
        }
        changebodycolor()
        return (
            <div id="encapsulador">
                <main className={changecountershadow()} id='contador'>
                    <h1 className={changeelementscolor()}>Contador</h1>
                    <hr className={changeelementscolor()} />
                    <div>
                        <button id='minus' onClick={minus}>-</button>
                        <p className={changeelementscolor()} id="numero">{numero}</p>
                        <button id="positive" onClick={add}>+</button>
                    </div>
                    <button className="reset" onClick={reset}>reset</button>
                </main>
            </div>
        );
    }