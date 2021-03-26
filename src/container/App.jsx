import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carrusel from '../components/Carrusel'
import CarruselItem from '../components/CarruselItem'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/App.scss'

const API = "http://localhost:3000/initalState"

const App = () =>{
  const initialState = useInitialState(API)
  return (
    <div className='app'>
      <Header />
      <Search />
      {initialState.myList?.length > 0 &&  
        <Categories  tittle='Mi lista'> 
          <Carrusel>
          {initialState.myList.map(item =>
            <CarruselItem key={item.id} {...item}/>
          )}
          </Carrusel>
        </Categories>  
      }
      
      <Categories tittle='Tendencias'> 
          <Carrusel>
            {initialState.trends?.map(item =>
              <CarruselItem key={item.id} {...item}/>
            )}
          </Carrusel>
      </Categories>
      <Categories tittle="Originales de Platzi video"> 
          <Carrusel>
            {initialState.originals?.map(item => 
              <CarruselItem key={item.id} {...item}/>
            )}
          </Carrusel>
      </Categories>
      <Footer/>

    </div>
)};

export default App;
