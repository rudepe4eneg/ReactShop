import React from "react";
import Header from './Components/Header'
import Footer from './Components/Footer'
import Items from "./Components/Items";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: 'Компьютерный стол',
          img: 'table.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'tables',
          price: '149.99'
        },
        {
          id: 2,
          title: 'Компьютерное кресло',
          img: 'chair.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'chairs',
          price: '89.99'
        },
        {
          id: 3,
          title: 'Кровать',
          img: 'bed.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'bed',
          price: '189.99'
        }
      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items}/>
        <Footer />
      </div>
    );
  }
}
export default App;
