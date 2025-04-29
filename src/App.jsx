import { useState } from 'react'
import './App.css'
import Menu from "./Menu/Menu.jsx";
import Crud from "./CRUD/Crud.jsx";

function App() {
  const [currentPage, setPage] = useState(null);

  const handleChange = (page) => {
      setPage(page)
  }
    const handleBackChange = () => {
        setPage(null)
    }

  return (
    <div>
        <div className={'container'}>
            <button onClick={() => handleChange('Menu')}>Меню</button>
            <button onClick={() => handleChange('Crud')}>CRUD</button>
            <button onClick={() => handleBackChange()}>Назад</button>
        </div>

        {currentPage === 'Menu' && <Menu/>}
        {currentPage === 'Crud' && <Crud/>}
    </div>


  )
}

export default App
