
// import React from 'react';
// import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
// import Image from 'next/image';
// import images from '../../assets'; // Ensure this import matches your project structure

// const UserCard = ({ el, i, addFriends }) => {
//     // Handle dynamic image selection
//     const imageSrc = images[`image${i + 1}`];

//     return (
//         <MDBCard className="mb-4">
//             <div className="rounded-circle mx-auto mt-3" style={{ width: '100px', height: '100px', overflow: 'hidden' }}>
//                 <Image
//                     src={imageSrc}
//                     alt="user"
//                     width={100}
//                     height={100}
//                     objectFit="cover"
//                     unoptimized // Add this if the images are not served from a CDN
//                 />
//             </div>
//             <MDBCardBody className="text-center">
//                 <MDBCardTitle>{el.name}</MDBCardTitle>
//                 <MDBCardText>{el.accountAddress.slice(0, 25)}..</MDBCardText>
//                 <MDBBtn color="primary" onClick={() => addFriends({ name: el.name, accountAddress: el.accountAddress })}>
//                     Add Friend
//                 </MDBBtn>
//             </MDBCardBody>
//         </MDBCard>
//     );
// };

// export default UserCard;


import React from 'react';
import Image from 'next/image';
import images from '../../assets'; // Ensure this import matches your project structure
import styles from './UserCard.module.css'; // Make sure to create and import the corresponding CSS module

const UserCard = ({ el, i, addFriends }) => {
    // Handle dynamic image selection
    const imageSrc = images[`image${i + 1}`];

    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <div className="rounded-circle" style={{ width: '48px', height: '48px', overflow: 'hidden' }}>
                    <Image
                        src={imageSrc}
                        alt="user"
                        width={48}
                        height={48}
                        objectFit="cover"
                        unoptimized // Add this if the images are not served from a CDN
                    />
                </div>
                <p className={styles.para}>{el.name}</p>
                <button className={styles.link} onClick={() => addFriends({ name: el.name, accountAddress: el.accountAddress })}>
                    Add Friend
                </button>
            </div>
        </div>
    );
};

export default UserCard;
