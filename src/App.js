import  React ,{useEffect} from 'react';
import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import News from './components/News/News';

function App() {
  const [articles,setArticles]=useState([]);
  useEffect(()=>{
    const url='http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-01&sortBy=publishedAt&apiKey=c1738ba45bc848608c59b1472dacc7d4';
    fetch(url)
    .then(res=>res.json())
    .then(data=>setArticles(data.articles))
  },[])
  useEffect( () =>{
    const url = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-01&sortBy=publishedAt&apiKey=c1738ba45bc848608c59b1472dacc7d4';
    axios(url)
    //.then(data => console.log(data.data.articles))
    .then(data => setArticles(data.data.articles))
  }, [])
  return (
    <div className="App">
      
      {
        articles.map(article=><News article={article}></News>)
      }
    </div>
  );
}

export default App;
