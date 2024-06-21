// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// //INTERNAL IMPORT
// import { MDBTypography, MDBIcon } from "mdb-react-ui-kit";
// import images from "../../../assets";

// const Card = ({ readMessage, el, i, readUser }) => {
//   return (
//     <Link
//       href={{
//         pathname: "/",
//         query: { name: `${el.name}`, address: `${el.pubkey}` },
//       }}
//     >
//       <li
//         className="p-2 border-bottom"
//         style={{ backgroundColor: "#eee" }}
//         onClick={() => (readMessage(el.pubkey), readUser(el.pubkey))}
//       >
//         <div className="d-flex justify-content-between">
//           <div className="d-flex flex-row">
//             <Image
//               src={images.accountName}
//               alt="username"
//               width={50}
//               height={20}
//               className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
//             />
//             <div className="pt-1">
//               <p className="fw-bold mb-0">{el.name}</p>
//               <p className="small text-muted">
//                 {el.smallubkey ? el.smallubkey.slice(21) : ''}..
//               </p>
//             </div>
//           </div>
//           <div className="pt-1">
//             <p className="small text-muted mb-1">{i + 1}</p>
//             <span className="badge bg-danger float-end">1</span>
//           </div>
//         </div>
//       </li>
//     </Link>
//   );
// };

// export default Card;

import React,{useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { MDBIcon } from "mdb-react-ui-kit";

import Style from "./Card.module.css"
import images from "../../../assets";

const Card = ({readMessage,el, i,readUser}) => {
  return (
    <Link 
      href={{
        pathname: "/",
        query:{name:`${el.name}`,address:`${el.pubkey}`},
    }}
    >
      <li
        className="p-2 border-bottom"
        style={{ backgroundColor: "#eee" }}
        onClick={()=>(readMessage(el.pubkey),readUser(el.pubkey))}
      >
        <a href="#!" className="d-flex justify-content-between">
          <div className="d-flex flex-row">
            <Image src={images.accountName}
            alt="username"
            width={60}
            height={60}
            className={Style.Card_box_left_img}
            />
            <div className="pt-1">
              <p className="fw-bold mb-0">{el.name}</p>
              <p className="small text-muted">
                
              </p>
            </div>
          </div>
          <div className="pt-1">
            <p className="small text-muted mb-1"></p>
            <span className="text-muted float-end">
              <MDBIcon fas icon="check" />
            </span>
          </div>
        </a>
      </li>
    </Link>
  );
};

export default Card;

