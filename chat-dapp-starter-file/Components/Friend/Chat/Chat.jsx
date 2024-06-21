import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import images from "../../../assets";

import './Chat.module.css';
//INTERNAL IMPORT
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBTypography,
  MDBTextArea,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { convertTime } from "../../../Utils/apiFeature";
import { Loader } from "../../index";

const Chat = ({
  functionName,
  readMessage,
  friendMsg,
  account,
  userName,
  loading,
  currentUserName,
  currentUserAddress,
}) => {
  const [message, setMessage] = useState("");
  const [ChatData, setChatData] = useState({
    name: "",
    address: "",
  });

  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    setChatData(router.query);
  }, [router.isReady]);

  return (
    <MDBCard>
      {currentUserName && currentUserAddress && (
        <MDBCardHeader className="d-flex justify-content-between p-3">
          <div className="d-flex flex-row align-items-center">
            <Image src={images.accountName} alt="image" width={40} height={40} />
            <div className="ms-3">
              <h5 className="fw-bold mb-0">{currentUserName}</h5>
              <p className="text-muted mb-0">{currentUserAddress}</p>
            </div>
          </div>
        </MDBCardHeader>
      )}
      <MDBCardBody>
        <MDBTypography listUnStyled>
          {friendMsg.map((el, i) => (
            <li className="d-flex justify-content-between mb-4" key={i + 1}>
              <Image
                src={images.accountName}
                alt="image"
                width={10}
                height={10}
                className="rounded-circle d-flex align-self-start me-3 shadow-1-strong custom-image"
              />
              <MDBCard className="flex-grow-1">
                <MDBCardHeader className="d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">
                    {el.sender == ChatData.address ? ChatData.name : userName}
                  </p>
                  <p className="text-muted small mb-0">
                    <MDBIcon far icon="clock" /> {convertTime(el.timestamp)}
                  </p>
                </MDBCardHeader>
                <MDBCardBody>
                  <p className="mb-0">{el.msg}</p>
                </MDBCardBody>
              </MDBCard>
            </li>
          ))}
        </MDBTypography>
        {currentUserName && currentUserAddress && (
          <div className="mt-3">
            <MDBTextArea
              label="Type your message"
              rows={4}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <MDBBtn
              color="info"
              rounded
              className="float-end mt-2"
              onClick={() => functionName({ msg: message, address: ChatData.address })}
            >
              {loading ? <Loader /> : "Send"}
            </MDBBtn>
          </div>
        )}
      </MDBCardBody>
    </MDBCard>
  );
};

export default Chat;
