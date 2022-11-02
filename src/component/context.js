import React, { Component } from 'react'
const reducer = (state, action) => {
switch (action.type) {
    case 'delete_ren' : 
    return {
        renseignements : state.renseignements.filter((renseignement)=>
           renseignement.id !==  action.payload
        ),
        
    };
    case 'add_ren' :
        return  {
            renseignements : [action.payload ,...state.renseignements]
        }
    default :
    return state ;
}
}
const Context = React.createContext();
export  class Provider extends Component {
  
    state ={
        renseignements : [
  {id : 1 , mark : 'HP' , ram : '8GB' , disquedur : '256GB SSD' , processeur : 'I5 6EME GENERATION' , windows : 'WIN 10' , n_ports_usb : '2' , port_type_c : '1'},
  {id : 2 , mark : 'DELL' , ram : '8GB' , disquedur : '256GB SSD' , processeur : 'I5 7EME GENERATION' , windows : 'WIN 11' , n_ports_usb : '3' , port_type_c : '1'},
  {id : 3 , mark : 'HP' , ram : '4GB' , disquedur : '500GB HDD' , processeur : 'I3 4EME GENERATION' , windows : 'WIN 7' , n_ports_usb : '2' , port_type_c : '0'},
        ],
        dispatch : action => {
            console.log('jhjhjhjh')
            this.setState(state => reducer(state,action))
        }
       
     }
    
  render() {
    return (
      <div>
          <Context.Provider value={this.state}>
              {this.props.children}
          </Context.Provider>
      </div>
    )
  }
} 


export const Cunsomer = Context.Consumer;