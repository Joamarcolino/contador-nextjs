"use client"
import "./page.module.css"
import "./globals.css"
import { useState } from "react";
export default function Home() {
  const [numero, setNumero] = useState(0)
  function add() {
    setNumero(numero + 1)
  }
  function minus() {
    setNumero(numero - 1)
    console.log(numero)
  }
 function changebodycolor(){
  if (numero < 0) return "negativebody"
  if (numero > 0) return  "positivebody"
  else return  "neutralbody"
 }
 function changeelementscolor(){
   if (numero < 0) return 'negative'
   if (numero > 0) return 'positive'
   else return 'neutral'
 }
 function changecountershadow(){
   if (numero < 0) return 'negativelight'
   if (numero > 0) return 'positivelight'
   else return 'neutrallight'
 }
  return (
    <html>
    <body className={changebodycolor()}>
    <div id="encapsulador">
      <main className={changecountershadow()} id='contador'>
        <h1 className={changeelementscolor()}>Contador</h1>
        <hr className={changeelementscolor()} />
        <div>
        <button id='minus' onClick={minus}>-</button>
        <p className={changeelementscolor()} id="numero">{numero}</p>
        <button id="positive" onClick={add}>+</button>
        </div>
      </main>
    </div>
    </body>
    </html>
  );
}
