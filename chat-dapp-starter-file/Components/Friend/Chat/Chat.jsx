import React,{useState,useEffect} from "react";
import Image from "next/image";
import { useRouter } from "next/router";
//INTERNAL IMPORT
import Style from "./Chat.module.css";
import images from '../../../assets';
import { convertTime } from "../../../Utils/apiFeature";
import {Loader} from '../../index';
      
const Chat = ({
  functionName,
  readMessage,
  friendMsg,
  account,
  userName,
  loading,
  currentUserName,
  currentUserAddress
}) => {

  //USE STATE
  const[message,setMessage]=useState('');
  const[ChatData,setChatData]=useState({
    name:"",
    address: "",
  });

  const router=useRouter()
  useEffect(()=>{
    if(!router.isReady) return;
    setChatData(router.query);
  },[router.isReady]);

  return (
    <div className={Style.Chat} style={{ border: '1px solid white' , boxShadow:'0 0 5px 0' }}>
      {currentUserName && currentUserAddress ? (
        <div className={Style.chat_user_info}>
          <Image src={images.accountName} alt="image" width={70}
          height={70} />
          <br />
          <div className={Style.Chat_user_info_box}>
            <h4>{currentUserName}</h4>
            <br />
            <p className={Style.show}>
              {currentUserAddress}
               <hr style={{position:'relative', top:'10px'}}/>
            </p>
            
          </div>
          
        </div>
      ): (
        ""
      )}
      <br />
      <div className={Style.Chat_box_box} >
        <div className={Style.Chat_box} >
          <div className={Style.Chat_box_let} >
            {
              friendMsg.map((el,i)=>(
                <div>
                  {el.sender==ChatData.address ? (
                    <div className={Style.Chat_box_let_title}>
                      <Image src={images.accountName}
                      alt="image"
                      width={50}
                      height={50}
                      />
                     
                      <span>
                        {ChatData.name} {""}
                        <small>Time:{convertTime(el.timestamp)}</small>
                      </span>
                    </div>
                  ):(
                    <div className={Style.Chat_box_let_title} >
                      <Image src={images.accountName}
                      alt="image"
                      width={50}
                      height={50}
                      />
                      <span>
                        
                        {userName} {""}
                        <small>Time:{convertTime(el.timestamp)}</small>
                      </span>
                    </div>

                  ) }
                  <p key={i+1}  >
                      {el.msg}
                      {""}
                      {""}
                      <br />
                      <br />
                  </p>
                  <br />
                
                </div>
              ))}
          </div>
        </div>


        {currentUserName && currentUserAddress ?(

          <div className={Style.Chat_box_send}>
            <div className={Style.Chat_box_send_img}>
              {/* <Image src={images.smile} alt="smile" width={50} height={50} /> */}
              <input type="text" placeholder="Type your message" onChange={(e)=>setMessage(e.target.value)} />
              {/* <Image src={images.file} alt="file" width={50} height={50}/> */}
              
                {loading==true ? (
                  <Loader/>
                ):(
                  <Image src={images.send} alt="send" width={50} height={50} onClick={()=> functionName({msg:message,address:ChatData.address})}/>

                )}
            </div>
          </div>


        ):(
          ""
        )}
      </div>
    </div>
  );
};

export default Chat;
