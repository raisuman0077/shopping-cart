import axios from 'axios';
import  React from 'react'
import './App.css';
import CardItem from './components/cards/card';
import Navbar from './components/navbar/navbar';



function App() {

  const [data,setData] = React.useState([])
  React.useEffect(()=>{
    axios.get('https://electronic-ecommerce.herokuapp.com/api/v1/product').then(res=>setData(res.data.data.product))
  },[])


        
  return (

          <>
      <Navbar />
      <CardItem data={data} />
      </>
        
  
    
    
  );
}

export default App;
