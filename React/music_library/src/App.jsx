import './App.css';
import {  useState, useRef } from 'react'
import SearchBar from './components/SearchBar'
import Gallery from './components/Gallery'
import { DataContext } from './Context/DataContext'
import { SearchContext } from './Context/SearchContext';

function App() {

  let [data, setData] = useState([])
  let [message, setMessage] = useState("Search for music!")
  let searchInput =useRef('')

  const API_URL = 'https://itunes.apple.com/search?term='



  const handleSearch = (e, term) => {
    e.preventDefault()
    document.title = `${term} Music`
    fetch(API_URL + term)
    .then(res => res.json())
    .then(resData => {
      if (resData.results.length > 0) {
        setData(resData.results)
      } else {
        setMessage("No results found!")
      }
    })
  }

  return (
    <div className="App">
      <SearchContext.Provider value={{
        term: searchInput,
        handleSearch: handleSearch
      }}>
      <SearchBar/>
      </SearchContext.Provider>
      {message}
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
    </div>
  );
}

export default App;

