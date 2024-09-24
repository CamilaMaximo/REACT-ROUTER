import React from 'react';

//6 - carregamento de dados
import { useEffect, useFetch } from '../hooks/useFetch';

const url = "http://localhost:3000/products";

const Home = () => {
  const {data: items} = useFetch(url)
  return (
    <div>
        <h1>Home</h1>
        </div>
  )
}

export default Home