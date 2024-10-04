import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchmydata } from './store/getdataSlice'
import getdataSlice from './store/getdataSlice'
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'

import { deletemydata } from './store/deleteSlice';
import './App.css';
function Viewdata() {
    const dispatch=useDispatch()
    const productData = useSelector((state)=>state.getdata.productList)
    console.log(productData)
    //console.log(mystate)
    useEffect(()=>{
        dispatch(fetchmydata())
    },[])
    const handleDelete=(id)=>{
        dispatch(deletemydata(id))
    }
    return (
        <div>
            {/* <button onClick={()=>dispatch(fetchmydata())}>Get all data</button>
            <button>add new data</button> */}

<div id="recentItems">
        <Container>
          <Row style={{rowGap:'20px'}}>
           

            {productData?.map((p)=>{
              console.log(productData)
              return <Col> <Card style={{ width: "18rem" }}>
              <Card.Img
              id='cardImg'
                variant="top"
                src={p.image}
              />
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>
             
                  <b id='price'>${p.price}</b>
                </Card.Text>
                <Button class='amazonBtn ' id='buynow' >Buy now</Button>
                <Link class='amazonBtn ' id='update' to={'update/' + p.id} >Update product</Link>
                <Button onClick={()=>handleDelete(p.id)} class='amazonBtn ' id='delete'>Delete</Button>
                {/* <Button class='amazonBtn ' id='buynow' >Buy now</Button>  <Button class='amazonBtn'> <Link to={`/details/${p.id}`}>see more</Link></Button><br/> */}
                <Button class='amazonBtn ' id='addtocart'>Add to cart</Button>
                {/* <Link to={`/update/${p.id}`}> <Button class='amazonBtn ' id='delete'>Update</Button></Link>
                <Link to={`/delete/${p.id}`}> <Button class='amazonBtn ' id='delete'>Delete</Button></Link> */}
              </Card.Body>
            </Card></Col>
            })}
          </Row>
        </Container>
      </div>
        </div>
    )
}

export default Viewdata
