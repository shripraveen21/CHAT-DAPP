

import React, { useState, useContext } from "react";
import Image from "next/image";

// INTERNAL IMPORT
import Style from "./Model.module.css";
import images from '../../assets';
import { ChatAppContect } from "../../Context/ChatAppContext";
import { Loader } from "../../Components/index";

const Model = ({
  openBox,
  title,
  address,
  head,
  info,
  smaLLinfo,
  image,
  functionName
}) => {
  // USESTATE
  const [name, setName] = useState("");
  const [accountAddress, setAccountAddress] = useState("");

  const { loading } = useContext(ChatAppContect);

  return (
    <div className={Style.Model}>
      <div className={Style.Model_box}>
        <div className={Style.Model_box_left}>
        <div className={Style.Quote}>
        <h2 className={Style.Txt_back} ><span style={{ 
    fontStyle: "italic", 
    fontFamily: "Arial, sans-serif", 
    fontWeight:"bolder", 
    fontSize: "7rem", 
    lineHeight: "1.5",
    backgroundImage: "url(./login.gif)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "transparent",
    WebkitBackgroundClip: "text", /* For Safari */
    backgroundClip: "text"
  }}>
    "Chat 
    <br /> 
    Freely,
    </span>
    </h2>
      <h2 className={Style.Txt_back}><span style={{ 
    fontStyle: "italic", 
    fontFamily: "Arial, sans-serif", 
    fontWeight: "bolder", 
    fontSize: "7rem", 
    lineHeight: "1.5",
    backgroundImage: "url(./login.gif)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "transparent",
    WebkitBackgroundClip: "text", /* For Safari */
    backgroundClip: "text"
  }}>
    Chat 
    <br /> 
    Privately"
    </span></h2>
        </div>

        </div>
        <div className={Style.Model_box_right}>
          <h1>
            <span>{title}</span>&nbsp;&nbsp;<span>{head}</span>
          </h1>
          <p>{info}</p>
          <small>{smaLLinfo}</small>
          {loading ? (
            <Loader />
          ) : (
            <div className={Style.Model_box_right_name}>
              <div className={Style.Model_box_right_name_info}>
                <Image src={images.username} alt="user" width={30} height={30} />
                <input
                  type="text"
                  placeholder="Your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={Style.Model_box_right_name_btn}>
                <button onClick={() => functionName({ name, accountAddress })}>
                  <Image src={images.send_black} alt="send" width={30} height={30} />
                  Submit
                </button>
                {/* &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;

                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;

                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;


                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp; */}
                <button onClick={() => openBox(false)}>
                  <Image src={images.close} alt="close" width={30} height={30} />
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Model;
