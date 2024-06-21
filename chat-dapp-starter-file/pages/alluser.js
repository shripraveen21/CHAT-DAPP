
// import React, { useContext } from 'react';
// import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

// // Internal import
// import UserCard from '../Components/UserCard/UserCard';
// import Style from '../styles/alluser.module.css';
// import { ChatAppContect } from '../Context/ChatAppContext';

// const AllUser = () => {
//     const { userLists, addFriends } = useContext(ChatAppContect);
//     return (
//         <MDBContainer className={Style.alluser_info}>
//             <h1 className="text-center my-4">Add Friends</h1>
//             <MDBRow>
//                 {userLists.map((el, i) => (
//                     <MDBCol key={i + 1} md="4" className="mb-4">
//                         <UserCard el={el} i={i} addFriends={addFriends} />
//                     </MDBCol>
//                 ))}
//             </MDBRow>
//         </MDBContainer>
//     );
// };

// export default AllUser;


import React, { useContext } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

// Internal import
import UserCard from '../Components/UserCard/UserCard';
import styles from '../styles/alluser.module.css';
import { ChatAppContect } from '../Context/ChatAppContext';

const AllUser = () => {
    const { userLists, addFriends } = useContext(ChatAppContect);

    return (
        <MDBContainer className="py-5">
            <h1 className="text-center mb-4">Find Friends</h1>
            <MDBRow className="d-flex justify-content-center">
                {userLists.map((el, i) => (
                    <MDBCol key={i + 1} md="4" className="mb-4 d-flex align-items-stretch">
                        <UserCard el={el} i={i} addFriends={addFriends} />
                    </MDBCol>
                ))}
            </MDBRow>
        </MDBContainer>
    );
};

export default AllUser;

