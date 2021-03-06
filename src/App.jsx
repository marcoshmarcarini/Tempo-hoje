import React, {useState} from "react";
import fetchData from "./services/api";
import Card from "./components/Card";
import initialData from "./helpers/initialData";

function App() {
  const [city, setCity] = useState('')
  const [data, setData] = useState(initialData)

  const handleSubmit = (event) => {
    event.preventDefault() // Preserva que o evento ocorra sem recarregar a página.
    fetchData(city).then((response) => {
      setData(response)

      
    })
  }

  return (
    <>
      <div className="flex flex-col w-full h-screen items-center sm:justify-center p-4">
        <h1 className="mb-4 text-2xl text-center font-medium">Confira a Previsão do Tempo em sua Cidade</h1>
        <form onSubmit={handleSubmit} className="fixed bottom-0 w-full flex p-4 sm:relative justify-center">
          <input 
            type="text" 
            placeholder="Cidade" 
            className="p-3 rounded-lg outline-none w-full sm:max-w-[300px] flex-1 "
            onChange={({target: {value}}) => setCity(value)}
            value={city}
          />
          <button 
            type="Submit"
            className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold hover:bg-blue-400 transition-[400ms] ease-in"
          >
            Pesquisar
          </button>
        </form>
        
        <Card data = {data}/>
      </div>
    </>
  );
}

export default App;
