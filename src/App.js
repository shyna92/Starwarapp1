import React, { useState,useEffect,useRef} from 'react';
import axios from 'axios';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import LoadingBar from 'react-top-loading-bar'


export default function App() { 
  const ref = useRef(null)
  const[item1,setitem1]=useState("");
  const[item2,setitem2]=useState("");
  const[item3,setitem3]=useState("");
  const[item4,setitem4]=useState("");
  const[item5,setitem5]=useState("");
  const[item6,setitem6]=useState("");
  const[movie1,setmovie1]=useState("");
  const[movie2,setmovie2]=useState("");
  const[movie3,setmovie3]=useState("");
  const[movie4,setmovie4]=useState("");
  const[movie5,setmovie5]=useState("");
  const[movie6,setmovie6]=useState("");
  const[date,setrdate]=useState("");

  useEffect(()=>ref.current.continuousStart()
  );
 
  useEffect(() =>{
   
    axios.get(`${movie1}`).then(response => {
      setitem1(response.data.title);
    });
    
    axios.get(`${movie2}`).then(response => {
      setitem2(response.data.title);
    });
    
    axios.get(`${movie3}`).then(response => {
      setitem3(response.data.title);
      console.log(response.data.title);
    });
    
    axios.get(`${movie4}`).then(response => {
      setitem4(response.data.title);
      
    });
   
    
    axios.get(`${movie5}`).then(response => {
      setitem5(response.data.title);
    });
    axios.get(`${movie6}`).then(response => {
      setitem6(response.data.title);
    });
    axios.get(`${movie4}`).then(response => {
      setrdate(response.data.release_date);
    });

  });
 
  




  const listofmovies=(event)=>{
    var opt=event.target.value;
    axios.get(`https://swapi.dev/api/people/${opt}`).then(response => {

     setmovie1(response.data.films[0]);
    setmovie2(response.data.films[1]);
    setmovie3(response.data.films[2]);
    setmovie4(response.data.films[3]);
    setmovie5(response.data.films[4]);
    setmovie6(response.data.films[5]);
console.log(response.data.films[0]);    
      
});
  }
  return(
  <>
  <LoadingBar color='#f11946' ref={ref} />
 <div className="container">
 
   <h1 className="text-center bg-dark text-white">Star Wars</h1>
 
     
<div className="text-left" width="30%">
  <h1> Character:</h1>
<Form.Select aria-label="Default select example" onChange={listofmovies}>

  <option > Select </option>
  <option value="1">Luke Skywalker</option>
  <option value="2">C-3PO</option>
  <option value="4">Darth Vader</option>
  <option value="5">Leia Organa</option>
</Form.Select>

<br/>
<h1> List of Movies:</h1>
<ListGroup >
  <ListGroup.Item >{item1}</ListGroup.Item>
  <ListGroup.Item>{item2}</ListGroup.Item>
  <ListGroup.Item>{item3}</ListGroup.Item>
  <ListGroup.Item>{item4}</ListGroup.Item>
  <ListGroup.Item>{item5}</ListGroup.Item>
  <ListGroup.Item>{item6}</ListGroup.Item>
</ListGroup>

<h1> Name/Year last Movie:</h1>
<p className="text-decoration-underline">{item4}/{date}</p>

</div>
</div>



</>
    
  )
};
