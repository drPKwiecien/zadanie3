import React, { useState } from 'react'


export default function AddComment() {
  const [text, setText] = useState('Wpisz komentarz')
  const [name, setName] = useState('Wpisz nick')

const handleSubmit = (event) => {
    event.preventDefault(); 
    if (text !== 'Wpisz komentarz' && name !== 'Wpisz nick') {
      console.log(`${name}: ${text}`);
    }
  };

  return (
    <div className="flex flex-col items-center w-full mt-2 p-2">
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
        <input
          className="p-2 mb-1 bg-gray-100 border rounded-lg w-full"
          id="name"
          name="name"
          autoComplete="true"
          onChange={(event) => setName(event.target.value)}
          value={name}
          style={{ border: '1px solid black', padding: '1px' }}
        />
        <textarea
          className="p-2 bg-gray-100 border rounded-lg w-full"
          id="comment"
          name="comment"
          rows="5"
          autoComplete="true"
          onChange={(event) => setText(event.target.value)}
          value={text}
          style={{ border: '1px solid black', padding: '1px' }}
        />
        <button
          type="submit"
          className="btn m-4 bg-gray-500 text-white hover:bg-red-500"
        >
          Wyślij komentarz
        </button>
      </form>
    </div>
  );

}