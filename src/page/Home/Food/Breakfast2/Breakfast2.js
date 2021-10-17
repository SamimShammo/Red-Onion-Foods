import React from 'react';
import { Col, Image } from 'react-bootstrap';
import './Breakfast2.css'

const Breakfast2 = (props) => {
    console.log(props)
    

    const {title, image, desc, category} = props.food
    return (
     <Col lg={4} xxl={4}  md={6} sm={12} className>
       <div className="breakfast">
       <small className="p-2 w-100">{category}</small>
          <Image src={image}  className="img-fluid mt-4"/>
         <h5>{title.slice(0, 25)}</h5>
         <p>{desc.slice(0, 35)}</p>
         <button class="btn-regular shadow fs-6">Add To Cart</button>
         
       </div>
     </Col>
    );
};

export default Breakfast2;