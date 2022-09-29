import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../../redux/actions/UsersAction";


export default function UpdateUsers (){
    const dispatch = useDispatch()
    const users = useSelector(state=> state.users.allUsers)
    useEffect(()=>{
        dispatch(getAllUsers())
    }, [])

    return (
        <div> hola
             {
                users && users.map(e => {
                    return(
                        <Link to={e.id}>{e.email}</Link>
                    )
                })
            } 
        </div>
    )
}