import Header from "./Components/Header";
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('Marvin Tamayo');
  const [inputValue, setInputValue] = useState(''); 

  const handleChange = (event) => {
    setInputValue(event.target.value); 
  };

  const updateName = () => {
    setName(inputValue);
    setInputValue(''); 
  };

  return (
    <div className="bg-darkbg">
      <Header />
      <main className="w-full h-screen flex justify-center items-center" id="info">
        <section className="text-white gap-4 flex flex-col items-center w-full">
          <h3 className="font-sans text-2xl sm:text-xl">Lorem, ipsum.</h3>
          <h1 className="font-bold text-5xl md:text-4xl sm:text-3xl">{name}</h1>
          <h2 className="text-2xl sm:text-xl">Lorem, ipsum dolor.</h2>
          <input 
            type="text" 
            value={inputValue} 
            onChange={handleChange} 
            placeholder="Enter a new name"
            className="px-4 py-2 rounded text-darkbg"
          />
          <button 
            onClick={updateName} 
            className="px-8 py-2 bg-transparent text-xl text-white rounded-3xl border border-white hover:bg-white hover:text-darkbg transition duration-300"
          >
            Update Name
          </button>
        </section>
      </main>
    </div>
  );
}
