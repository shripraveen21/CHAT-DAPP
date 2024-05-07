import React , {useState,useEffect,useContext} from 'react';

//internal import

import UserCard from "../Components/UserCard/UserCard";

import Style from "../styles/alluser.module.css";
import {ChatAppContect} from "../Context/ChatAppContext";

const alluser = () => {
    const {userLists, addFriends} = useContext(ChatAppContect);
  return (
    <div>
        <div className={Style.alluser_info}>
            <h1>Add Friends</h1>
        </div>
        <div className={Style.alluser}>
            {userLists.map((el,i)=>(
            <UserCard key={i+1} el={el} i={i} addFriends={addFriends}/>
            ))}
        </div>
    </div>
  )
}

export default alluser
