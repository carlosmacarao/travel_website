import React from 'react'
import './App.css'

function App() {

  const Pessoa = {
    id: 1,
    nome: 'Abv',
    idade: 22
  }

  const Pessoas = {
    name: 'Carlos',
    age: 22
  }

  let novoItem = document.querySelector('btn')
  novoItem = 0
  let lista = []
  lista.push(2)
  lista.push(4, 8, 9, 6)

  return (
    <>
      <h2>Working</h2>
      <h3>Hello</h3>
    </>
  )
}

export default App
