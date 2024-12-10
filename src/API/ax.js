import axios from "axios";
import React from 'react';
function ax(){
    var a;
    axios.get('https://dummyjson.com/products')
    .then(function (response){
        console.log(response.data);
        a=response.data.products[0].title;
        document.write(a)
    })
    return(
        <>
        <h1>{console.log(a)}</h1>
        </>
    )
}
export default ax;