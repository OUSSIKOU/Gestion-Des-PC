import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import { Cunsomer } from '../context';
class Renseignement extends Component {
state = {
    onclick : true ,
}
show = () =>{
    console.log("hics")
this.setState({
    onclick : !this.state.onclick ,
})
}
deleteAll = (id,dispatch) => {
    
console.log('asjiasd' , id)
    dispatch ({
        type :'delete_ren',
        payload : id
    })
    
}

  render() {
      const { id, mark , ram , disquedur , processeur , windows , n_ports_usb , port_type_c ,} = this.props.data;
     
    return (
        <Cunsomer>
        {value => { 
            const {dispatch} = value
           return (
            <div>
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">
                    Mark : {mark} <i onClick={this.show}  style={{color:'blue'}} className="fa fa-sort-down"></i>
                                            <i onClick={this.deleteAll.bind(this , id , dispatch)}  style={{color:'red', float:'right'}} className='fa fa-times' aria-hidden="true" ></i>
                </h4>
            {(this.state.onclick)?(
                    <ul className="list-group">
                    <li className="list-group-item">
                        RAM : {ram}  
                    </li>
                    <li className="list-group-item">DISQUEDUR : {disquedur}</li>
                    <li className="list-group-item">PROCESSEUR : {processeur}</li>
                    <li className="list-group-item">WINDOWS : {windows}</li>
                    <li className="list-group-item">NUMERO DES PORTS USB: {n_ports_usb}</li>
                    <li className="list-group-item">PORT TYPE C : {port_type_c}</li>
                </ul>
            ):null}
                
                
            </div>
        </div>
    </div>
        )}
         }

            
        </Cunsomer>
      
    )
  }
}
Renseignement.propTypes = {
    data: PropTypes.object.isRequired ,
    
  };
export default Renseignement ;