import React, { Component } from 'react';
import { Cunsomer } from '../context';
import Renseignement from './Renseignement';

class Renseignements extends Component {
  
  
  render(props) {
      
    return (
        <Cunsomer>
            {
                value => (
                    <div>
                    {
                        value.renseignements.map((renseignement)=>(
                        <Renseignement 
                        key = {renseignement.id}
                        data = {renseignement}
                        
                        />
                         ) )
                    } 
                 </div>
                )
            }
        </Cunsomer>
     
    )
  }
}
export default Renseignements ;