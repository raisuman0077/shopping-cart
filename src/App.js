import axios from 'axios';
import  React from 'react'
import './App.css';
import CardItem from './components/cards/card';



function App() {

  const [data,setData] = React.useState([])
  React.useEffect(()=>{
    axios.get('https://electronic-ecommerce.herokuapp.com/api/v1/product').then(res=>setData(res.data.data.product))
  },[])



  return (
    // eslint-disable-next-line


          <CardItem data={data} />
        
  
    
    
  );
}

export default App;
