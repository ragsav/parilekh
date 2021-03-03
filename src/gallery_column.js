
import React from 'react';
function GColumn(props) {
    const cp1 = ["21.png", "17.png", "13.png", "9.jpg", "5.png"];
    const cp2 = ["20.jpg", "16.png", "12.png", "8.png", "4.png"];
    const cp3 = ["19.jpg", "15.jpg", "11.jpg", "7.jpg", "3.jpg"];
    const cp4 = ["18.jpg", "14.png", "10.png", "6.png", "2.png"];
    

    const base_url = "https://parilekh-server.herokuapp.com/";

    if(props.name=="c1"){
        const images = cp1.map(image => {
            var url  = base_url+image;
           return <img src={url}/>
        });
        return images;
    }else if(props.name=="c2"){
        const images = cp2.map(image => {
            var url  = base_url+image;
           return <img src={url}/>
        });
        return images;
    }else if(props.name=="c3"){
        const images = cp3.map(image => {
            var url  = base_url+image;
           return <img src={url}/>
        });
        return images;
    }else if(props.name=="c4"){
        const images = cp4.map(image => {
            var url  = base_url+image;
           return <img src={url}/>
        });
        return images;
    }
    
    
  }
export default GColumn;  
