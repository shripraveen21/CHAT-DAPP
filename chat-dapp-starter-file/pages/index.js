import React, { useContext } from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

//INTERNAL IMPORT

import { ChatAppContect } from "../Context/ChatAppContext";
import {  Friend } from "../Components/index";
const ChatApp = () => {
  const {  } = useContext(ChatAppContect);
  return <div>
    <Friend/>
  </div>;
};

export default ChatApp;
 