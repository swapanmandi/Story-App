import React, { useState, useEffect } from 'react';
import axios from "axios";
import './about.css';

function About(){
      
          const [data, setData] = useState([]);
        
          
            useEffect(() => {
              async function fetchData() {
                const response = await axios.get("http://localhost:4000/data");
                setData(response.data);
              }
              fetchData();
            }, []);
          
            return (
              <div>
                <h2>fii dii</h2>
                {data.map((item) => (
                  <div key={item._id}>
                    <h2>{item.name}</h2>
                    <p>{item.email}</p>
                  </div>
                ))}
              </div>
            );
          }
          
    
        
export default About;