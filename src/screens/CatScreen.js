import React, { useEffect, useState } from "react";
import axios from "../../node_modules/axios/index";
// import { error } from "../../node_modules/loglevel/index";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";



function CatScreen() {

    const [categoryItems, setcategoryItems] = useState([]);

    useEffect(() => {
      async function getCharacter() {
      const { data } = await axios.get("api/category");
      setcategoryItems(data);
      }
      getCharacter();
    }, []);
  


    return  (
        <div>
        <h1>categorys {categoryItems.id}</h1>
        <div className="row top">
          <div className="col-2">
            <ul>
              
             
              <li>
                <div className="card card-body">
                  <h2>category detail list</h2>
                  <ul>
                    {categoryItems.map((item) => (
                      <li key={item.id}>
                        <div className="row">
                         
                      Category Name: {item.title}
                       
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

export default CatScreen
