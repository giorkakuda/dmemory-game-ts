import { Card } from './components/card';
import './App.css';
import { Grid } from './components/grid';
import { data } from './components/data';
import Metamask from './components/metamask';


import Footer from './components/footer/footer';


const handleClick = (id: string) => {
  console.log(id);
};

export default function App() {
  return (
    <div>
      <div className='app'>
        <Grid cards={data} />   
      </div>
      <Metamask/>
      
      <Footer/>
      
    </div>
  );
}
