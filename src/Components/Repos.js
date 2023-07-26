import axios from "axios";
import React, { useEffect, useState } from "react";
import { ListGroup,ListGroupItem } from "reactstrap";

const Repos=({repos_url})=>{
    const[repo,setRepo]=useState([])

    const fetchRepos=async ()=>{
        const {data} =await axios.get(repos_url);
        // console.log("repos",response);
        setRepo(data)
    }
    useEffect(()=>{
        fetchRepos();
    },[repos_url])
return (
    <ListGroup>
       {repo.map(r=>
         <ListGroupItem key={r.id}>
            <div className="text-primary">{r.name}</div>
            <div className="text-secondary">{r.language}</div>
            <div className="text-info">{r.description}</div>
         </ListGroupItem>)}
    </ListGroup>
)
}
export default Repos;