import React, { useEffect, useState } from 'react';
import axios from '../../node_modules/axios/index';

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import LoadingBox from "./LoadingBox";
// import MessageBox from "./MessageBox";
// import Ratings from "./Rating";

export default  function SearchBox(props) {
  const [title, setTitle] = useState('');
 
  // const [searchParam] = useState(["title"]);

  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/title/${title}`);
  };

  // const [items , setItems] = useState([]);

  // useEffect(() => {
  //   async function getCharacter() {
  //   const { data } = await axios.get("api/products/");
  //   setItems(data);
  //   }
  //   getCharacter();
  // }, []);




  return (
      
    <form className="search" onSubmit={submitHandler}>
      <div className="row" style ={{display:"flex", flexDirection: 'row'}}>
        <input
          type="text"
          title="q"
          id="q"
   style ={{height:"37px"}}
          // value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <button className="primary" type="submit" type="submit" style ={{height:"37px", marginBottom: '7px'}}>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
}
//props.history.push(`/search/title/${title}`);

// export default function SearchBox() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   // Note: the empty deps array [] means
//   // this useEffect will run once
//   // similar to componentDidMount()
//   useEffect(() => {
//     fetch("localhost:3000/products")
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setItems(result);
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       );
//   }, []);

//   if (error) {
//     return <>{error.message}</>;
//   } else if (!isLoaded) {
//     return <>loading...</>;
//   } else {
//     return (
//       <div>
//         <div className="row">
//           {
//             <div>{items.length} Results</div>
//           }
//         </div>
//         <div className="row top">
//           <div className="col-1">
//             <ul>
//               <li>Category </li>
//             </ul>
//           </div>
//           <div className="col-3">
            
//               <>
//                 {items.length === 0 && (
//                   <MessageBox>No Product Found</MessageBox>
//                 )}
//                 <div className="row center">
//                   {items.map((item) => (
//                     <div key={item.id} className="card">
    
//                     <div className="card-body">
//                     <Link to={`/products/${item.id}`}>
//                         <h2>{item.title}</h2>
//                       </Link>
//                       <Ratings
//                         ratings={item.ratings}
                      
//                       ></Ratings>
//                       <div>Category: {item.category.title}</div>
              
//                       <div>Brand: {item.brand.name}</div>
              
                  
//                       <div className="price">${item.price}</div>
//                     </div>
//                   </div>
//                   ))}
//                 </div>
//               </>
//             )
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
