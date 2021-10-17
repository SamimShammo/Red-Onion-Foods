import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
// import Breakfast2 from '../Breakfast2/Breakfast2';



const useFoods = () => {
    
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('fooditems.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [])

    return {foods, setFoods}
        
};

export default useFoods;







        //  <Container>
        //       <Row>
        //           {
        //            foods.map(food => <Breakfast2
        //            key={food.id}
        //            food={food}
        //            ></Breakfast2>)
        //           }
        //       </Row>
        //   </Container>







// const bfastfood = [
    //   {  id: 1,
    //     img:  'https://i.ibb.co/DgcKSBk/breakfast1.png',
    //     name: 'Salmon With Grapefruit and Lentil Salad',
    //     description: 'How we dream About Out future',
    //     price: 10.99},
    //   {  id: 2,
    //     img: 'https://i.ibb.co/jWM002w/breakfast3.png',
    //     name: 'Salmon With Grapefruit and Lentil Salad',
    //     description: 'How we dream About Out future',
    //     price: 9.99},
    //   {  id: 3,
    //     img: 'https://i.ibb.co/PTMWspb/breakfast4.png',
    //     name: 'Salmon With Grapefruit and Lentil Salad',
    //     description: 'How we dream About Out future',
    //     price: 11.99},
    //   {  id: 4,
    //     img: 'https://i.ibb.co/JvmDRBh/breakfast5.png',
    //     name: 'Salmon With Grapefruit and Lentil Salad',
    //     description: 'How we dream About Out future',
    //     price: 8.99},
    //   {  id: 5,
    //     img: 'https://i.ibb.co/xGfGRWR/breakfast6.png',
    //     name: 'Salmon With Grapefruit and Lentil Salad',
    //     description: 'How we dream About Out future',
    //     price: 21.99},
    //   {  id: 6,
    //     img: 'https://i.ibb.co/DgcKSBk/breakfast1.png',
    //     name: 'Salmon With Grapefruit and Lentil Salad',
    //     description: 'How we dream About Out future',
    //     price: 7.99}
    // ]