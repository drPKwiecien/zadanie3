import React, { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/router'


export default function Comments() {
  const [text, setText] = useState('Wpisz komentarz')
  const [name, setName] = useState('Wpisz nick')

const handleSubmit = (event) => {
    event.preventDefault(); 
    if (text !== 'Wpisz komentarz' && name !== 'Wpisz nick') {
      console.log(`${name}: ${text}`);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="m-2">Komentarze</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          className="m-2 bg-slate-100"
          id="name"
          name="name"
          size="38"
          autoComplete="true"
          onChange={(event) => setName(event.target.value)}
          value={name}
          style={{ border: '1px solid black', padding: '1px' }}
        />
        <textarea
          className="m-4 bg-slate-100"
          id="comment"
          name="comment"
          rows="5"
          cols="40"
          autoComplete="true"
          onChange={(event) => setText(event.target.value)}
          value={text}
          style={{ border: '1px solid black', padding: '1px' }}
        />
        <button
          type="submit"
          className="btn m-4 bg-slate-500 text-white hover:bg-red-500"
        >
          Wyślij komentarz
        </button>
      </form>
    </div>
  );

}