import React from 'react'

export default function Input(props) {
  return (
    <div>
       
       <div className="form-group">
    <label htmlFor={props.name}>{props.label}</label>
    <input type={props.type} className='form-control' name={props.name} value={props.value} onChange={props.onChange} />
    <div className="invalid-feedback">{props.error}</div>

 </div>
    </div>
  )
}
