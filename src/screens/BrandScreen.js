import React, { useEffect, useState } from "react";
import axios from "../../node_modules/axios/index";
// import { error } from "../../node_modules/loglevel/index";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";



function BrandScreen() {

    const [brandItems, setbrandItems] = useState([]);

    useEffect(() => {
      async function getCharacter() {
      const { data } = await axios.get("api/brand");
      setbrandItems(data);
      }
      getCharacter();
    }, []);
  


    return (
    
    <div>
        <h1>Brands {brandItems.id}</h1>
        <div className="row top">
          <div className="col-2">
            <ul>
              
             
              <li>
                <div className="card card-body">
                  <h2>Brand detail list</h2>
                  <ul>
                    {brandItems.map((item) => (
                      <li key={item.id}>

                        <div className="row">
                         
                      Brand Name: {item.name}
                       
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          
          </div>
        </div>
     
    );
  }

export default BrandScreen
