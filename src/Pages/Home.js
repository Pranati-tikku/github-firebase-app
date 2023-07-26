import React, { useContext, useEffect, useState } from "react";
import userContext from '../context/UserContext';
import { useNavigate } from "react-router-dom";
import { Input,Label,Button,Container,Row,Col,InputGroup } from "reactstrap";
import { toast } from "react-toastify";
import axios from "axios";
import Repos from "../Components/Repos";
import UserCard from "../Components/UserCard";

const Home=()=>{
    const navigate=useNavigate();
    const context=useContext(userContext);
    const[user,setUser]=useState(null)
    const[userValue,setUserValue]=useState("")
   
    const fetchDetails=async()=>{
        try{
            const {data}=await axios.get("https://api.github.com/users/"+userValue);
            // console.log("data",data);
            setUser(data);
            // console.log("userstate",user);
        }
        catch(error){
            toast(error.message,{type:"error"})
        }
    }

    useEffect(()=>{
        if(!context.user?.uid){
            navigate("/signup")
        }
    },[])
    return(
        <Container>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={userValue}
              onChange={e=>setUserValue(e.target.value)}
              placeholder="Please provide the username"
            />
              <Button 
              onClick={fetchDetails}
              color="primary">Fetch User</Button>
          </InputGroup>
          {user?(
            <UserCard user={user}/>
          ):(null)}
        </Col>
        <Col md="7">{user ? (<Repos repos_url={user.repos_url}/>):null}</Col>
      </Row>
      
    </Container>
    )
}
export default Home;