import React, { Component } from "react";
import './card-list.style.css';
import Card from "../cards/card.component";

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//     <div className="card-list">
//         {monsters.map(monster => 
//            <Card key={monster.id} monster={monster} /> 
//         )}   
//     </div>
//     );
//   }
// }

const CardList = ({ monsters }) => { 
    return (
    <div className="card-list">
        {   monsters.map(monster => 
           <Card key={monster.id} monster={monster} /> 
        )}   
    </div>
    );
}

export default CardList;