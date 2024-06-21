// import React, { useContext } from "react";
// import Image from "next/image";

// //INTERNAL IMPORT
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBTypography,
// } from "mdb-react-ui-kit";
// import Card from "./Card/Card";
// import Chat from "./Chat/Chat";

// import { ChatAppContect } from "../../Context/ChatAppContext";

// const Friend = () => {
//   const {
//     sendMessage,
//     account,
//     friendLists,
//     readMessage,
//     userName,
//     loading,
//     currentUserName,
//     currentUserAddress,
//     readUser,
//     friendMsg,
//   } = useContext(ChatAppContect);

//   return (
//     <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }}>
//       <MDBRow>
//         <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
//           <h5 className="font-weight-bold mb-3 text-center text-lg-start">Member</h5>
//           <MDBCard>
//             <MDBCardBody>
//               <MDBTypography listUnStyled className="mb-0">
//                 {friendLists.map((el, i) => (
//                   <Card
//                     key={i + 1}
//                     el={el}
//                     i={i}
//                     readMessage={readMessage}
//                     readUser={readUser}
//                   />
//                 ))}
//               </MDBTypography>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//         <MDBCol md="6" lg="7" xl="8">
//           <Chat
//             functionName={sendMessage}
//             readMessage={readMessage}
//             friendMsg={friendMsg}
//             account={account}
//             userName={userName}
//             loading={loading}
//             currentUserName={currentUserName}
//             currentUserAddress={currentUserAddress}
//           />
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// };

// export default Friend;

import React,{useState,useContext} from "react";
import Image from "next/image";
import { MDBCard, MDBCardBody, MDBTypography } from "mdb-react-ui-kit";

import Style from './Friend.module.css';
import images from '../../assets';
import Card from "./Card/Card";
import Chat from './Chat/Chat';

import{ChatAppContect} from "../../Context/ChatAppContext"
const Friend = () => {
  const {
    sendMessage,
    account,
    friendLists,
    readMessage,
    userName,
    loading,
    currentUserName,
    currentUserAddress,
    readUser,
    friendMsg,
  }=useContext(ChatAppContect);
  return (
    <div className={Style.Friend}>
      <div className={Style.Friend_box}>
        <div className={Style.Friend_box_left}>
          <h5 className="font-weight-bold mb-3 text-center text-lg-start">
            Friends
          </h5>
          <MDBCard>
            <MDBCardBody>
              <MDBTypography listUnStyled className="mb-0">
                {friendLists.map((el ,i)=>(
                  <Card key={i+1}
                  el={el} i={i}
                  readMessage={readMessage}
                  readUser={readUser}
                  />
                ))}
              </MDBTypography>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className={Style.Friend_box_right}>
          <Chat functionName={sendMessage}
          readMessage={readMessage} 
          friendMsg={friendMsg}
          account={account}
          userName={userName}
          loading={loading}
          currentUserName={currentUserName}
          currentUserAddress={currentUserAddress}
          />
        </div>
      </div>
    </div>
  );
};

export default Friend;
