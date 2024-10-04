import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { useParams } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { updateData } from '../store/updateSlice';
function UpdateData() {
    const {id}=useParams()
    const [selectedItem,setSelectedItem]=useState()
    const [newdata,setNewData]=useState({
        title:'',
        price:''
    })
    const dispatch=useDispatch()
    useEffect(()=>{
        fetch('http://localhost:3000/products/'+id)
        .then((res)=>res.json())
        .then((data)=>setSelectedItem(data))

    })
    const handleUpdate=(e)=>{
        e.preventDefault()
        
       
        dispatch(updateData([id,selectedItem]))
        if(newdata.title !='' && newdata.price !=''){
            dispatch(updateData([id,newdata]))
        }else{
            dispatch(updateData([id,selectedItem]))
        }
    }
    return (
        <>
         <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter new title" defaultValue={selectedItem?.title} onChange={(e)=>setNewData({...selectedItem,title:e.target.value})}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="New Price" defaultValue={selectedItem?.price} onChange={(e)=>setNewData({...selectedItem,price:e.target.value})}/>
      </Form.Group>
     
      <Button onClick={(e)=>handleUpdate(e)} variant="primary" type="submit">
        Update
      </Button>
    </Form>

    <hr/>
    <h5>{newdata.title}</h5>
    <h5>{newdata.price}</h5>
        </>
    )
}

export default UpdateData
