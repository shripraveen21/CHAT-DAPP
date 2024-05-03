import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

//INTERNAL IMPORT

import {
    CheckIfWalletConnected,
    connectWallet,
    connectingWithContract,
} from "../Utils/apiFeature";

export const ChatAppContect = React.createContext();

export const ChatAppProvider = ({ children }) => {
    //USESTATE
    const [account, setAccount] = useState("");
    const [userName, setUserName] = useState("");
    const [friendLists, setFriendLists] = useState([]);
    const [friendMsg, setFriendMsg] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userLists, setUserLists] = useState([]);
    const [error, setError] = useState("");

    // CHAT USER DATA
    const [currentUserName, setCurrentUserName] = useState("");
    const [currentUserAddress, setCurrentUserAddress] = useState("");

    const router = useRouter();

    // FETCH DATA TIME OF PAGE LOAD

    const fetchData = async() => {
        try {
            //Get Contract
            const contract = await connectingWithContract();
            //GET ACCOUNT
            const connectAccount = await connectWallet();
            setAccount(connectAccount);
            // GET USER NAME
            const userName = await contract.getUsername(connectAccount);
            setUserName(userName);
            //GET FRIEND LIST
            const friendLists = await contract.getMyFriendList();
            setFriendLists(friendLists);
            //GET ALL APP USER
            const userLists = await contract.getAllAppUser();
            setUserLists(userLists);
        } catch (error) {
            setError("Please install and connect your wallet");
            console.log(error)
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    //READ MESSSAGE

    const readMessage = async(friendAddress) => {
        try {
            const contract = await connectingWithContract();
            const read = await contract.readMessage(friendAddress);
            setFriendMsg(read);
        } catch (error) {
            setError("Currently You have no message");
        }
    };

    //CREATE ACCOUNT

    const createAccount = async({ name, accountAddress }) => {
        try {
            // if (!name || !accountAddress)
            //      return setError("Name and AccountAddress , cannot be empty");

            const contract = await connectingWithContract();
            const getCreatedUser = await contract.createAccount(name);
            const receipt = await getCreatedUser.wait();
            console.log(receipt);

            setLoading(true);
            await getCreatedUser.wait();
            setLoading(false);
            window.location.reload();
        } catch (error) {
            setError("Error while creating account Please reload browser");
            console.log(error.data?.message);
        }
    };

    //ADD YOUR FRIEND

    const addFriends = async({ name, accountAddress }) => {
        try {
            // if (!name || !accountAddress)
            //     return setError("address and name can't be empty"); 

            const contract = await connectingWithContract();
            const addMyFriend = await contract.addFriend(accountAddress, name);
            setLoading(true);
            await addMyFriend.wait();
            setLoading(false);
            router.push("/");
            window.location.reload();
        } catch (error) {
            setError("error while adding friends");
        }
    };

    //SEND MESSAGE TO YOUR FRIEND

    const sendMessage = async({ msg, address }) => {
        try {
            if (!address || !msg)
                return setError("Please enter message and friend address");
            const contract = await connectingWithContract();
            const addMessage = await contract.sendMessage(address, msg);
            setLoading(true);
            await addMessage.wait();
            setLoading(false);
            window.location.reload();
        } catch (error) {
            setError("error while sending message");
        }
    };

    //READ USER INFO

    const readUser = async(userAddress) => {
        try {
            const contract = await connectingWithContract();
            const userName = await contract.getUsername(userAddress);
            setCurrentUserName(userName);
            setCurrentUserAddress(userAddress);
        } catch (error) {
            setError("error while reading user");
        }
    };

    return ( <
        ChatAppContect.Provider value = {
            {
                readMessage,
                createAccount,
                addFriends,
                sendMessage,
                readUser,
                connectWallet,
                CheckIfWalletConnected,
                account,
                userName,
                friendLists,
                friendMsg,
                loading,
                userLists,
                error,
                currentUserName,
                currentUserAddress,
            }
        } > 
        { children } 
        </ChatAppContect.Provider>
    );
};
