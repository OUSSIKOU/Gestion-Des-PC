import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Cunsomer } from '../context';
import Input from '../helpers/Input';
export default class AddRens extends Component {
    state ={
        MARK : '',
        RAM :'',
        DISQUEDUR : '',
        PROCESSEUR : '',
        WINDOWS :  '',
        NUMERO_DES_PORTS_USB: '',
        PORT_TYPE_C : ''
    }
    
    onChangeInput = (event) =>{
    this.setState({
        [event.target.name] : event.target.value
    })
}
submit = (dispatch, size , event  ) =>{
    console.log(this.state);
    event.preventDefault();
    dispatch({
        type : 'add_ren' ,
        payload : {
            id : size  + 1 ,
            mark : this.state.MARK,
            ram : this.state.RAM,
            disquedur : this.state.DISQUEDUR,
            processeur : this.state.PROCESSEUR,
            windows : this.state.WINDOWS,
            n_ports_usb : this.state.NUMERO_DES_PORTS_USB,
            port_type_c : this.state.PORT_TYPE_C
        }
    })
    this.props.history.push('/Rens'); 
}
  render() {
    
    return (
        <Cunsomer>
            {value =>{
                const {dispatch} = value
                return (
<form onSubmit={this.submit.bind(this, dispatch , value.renseignements.length )}>
      <div>
          <h3>Add Renseignement</h3>
         <Input  label = 'MARK' type='text' name='MARK' defaultValue = {this.state.MARK} onChange = {this.onChangeInput} />
         <Input  label = 'RAM' type='text' name='RAM' defaultValue = {this.state.RAM} onChange = {this.onChangeInput} />
         <Input  label = 'DISQUEDUR' type='text' name='DISQUEDUR' defaultValue = {this.state.DISQUEDUR} onChange = {this.onChangeInput} />
         <Input  label = 'PROCESSEUR' type='text' name='PROCESSEUR' defaultValue = {this.state.PROCESSEUR} onChange = {this.onChangeInput} />
         <Input  label = 'WINDOWS' type='text' name='WINDOWS' defaultValue = {this.state.WINDOWS} onChange = {this.onChangeInput} />
         <Input  label = 'NUMERO_DES_PORTS_USB' type='text' name='NUMERO_DES_PORTS_USB' defaultValue = {this.state.NUMERO_DES_PORTS_USB} onChange = {this.onChangeInput} />
         <Input  label = 'PORT_TYPE_C' type='text' name='PORT_TYPE_C' defaultValue = {this.state.PORT_TYPE_C} onChange = {this.onChangeInput} />
      </div>
      <button className="btn btn-success btn-block">Add new Rens</button>
     </form>

                )
            }

            }
        </Cunsomer>
         )
  }
}
