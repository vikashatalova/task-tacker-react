import React from "react";
import { useParams } from "react-router-dom";

const MainPage = () => {
    const params = useParams();
    console.log(params);
    return ( <h1>Main</h1> );
}
  
export default MainPage;