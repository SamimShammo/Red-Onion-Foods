
import React, { useEffect, useState } from 'react';
import { Container, Row, Tab, Tabs } from 'react-bootstrap';
import Breakfast2 from '../Breakfast2/Breakfast2';
import useFoods from '../Brekfast/useFoods';
import './Breakfast3.css';

const Breakfast3 = () => {

    const { foods, setFoods } = useFoods()



    

    return (
        <div> 
         <Container>
              <Row>
              <Tabs
                 
                className="mb-3 m-auto w-25 border-none "
                >
                <Tab eventKey="home" title="BreakFast">
         <Container>
                 <Row>
                    {
                      foods?.slice(0, 6).map(food => <Breakfast2 food={food}></Breakfast2>)
                    }
               </Row>
          </Container>
                </Tab>
                <Tab eventKey="profile" title="Lunch" className="border-none">
              
         <Container>
                 <Row>
                    {
                      foods?.slice(6, 12).map(food => <Breakfast2 food={food}></Breakfast2>)
                    }
               </Row>
          </Container>
                </Tab>
                <Tab eventKey="contact" title="Dinner" >
                <Container>
                 <Row>
                    {
                      foods?.slice(12, 18).map(food => <Breakfast2 food={food}></Breakfast2>)
                    }
               </Row>
          </Container>
                </Tab>
            </Tabs>
               <div className="text-center mt-5">
               <button className=" btn-checkFood shadow ">Check Your Food</button>
               </div>
              </Row>
          </Container>
        </div>
    );
};

export default Breakfast3;