import React, { useState } from 'react'
import { useEffect } from 'react'
import { addMessage, getMessages } from '../../api/messageRequest'
import { getUser } from '../../api/UserRequest'
import './ChatBox.css'
import {format} from 'timeago.js'
import InputEmoji from 'react-input-emoji'
import { useRef } from 'react'

const ChatBox = ({ chat, currentUser,setSendMessage,receivedMessage }) => {
    

    const [userData, setUserData] = useState(null)
    const [messages,setMessages] = useState([])
    const [newMessage,setNewMessage] = useState("")
    const scroll = useRef()

    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER


 

    //fetching data for header
    useEffect(() => {
        const userId = chat?.members?.find((id) => id !== currentUser)
        const getUserData = async () => {
            try {
                const { data } = await getUser(userId)
                setUserData(data)
               
               
            } catch (error) {
                console.log(error);
            }
        }
        if (chat !== null) getUserData()
    }, [chat, currentUser])


// fetching data for messages
useEffect(()=>{
    const fetchMessages = async()=>{
        try {
            const {data} = await getMessages(chat._id)
            
            setMessages(data)
            // console.log(data,"kkk");
        } catch (error) {
            console.log(error);
        }
    }
    if(chat !== null) fetchMessages()
},[chat])


  const handleChange =(newMessage)=>{
       setNewMessage(newMessage)
  }

  // Send Message
  const handleSend = async(e)=> {
    e.preventDefault()
    const message = {
      senderId : currentUser,
      text: newMessage,
      chatId: chat._id,
  }
  const receiverId = chat.members.find((id)=>id!==currentUser);
  // send message to socket server
  setSendMessage({...message, receiverId})
  // send message to database
  try {
    const { data } = await addMessage(message);
    setMessages([...messages, data]);
    setNewMessage("");
  }
  catch
  {
    console.log("error")
  }
}


   // Receive Message from parent component
useEffect(()=> {
  console.log("Message Arrived: ", receivedMessage)
  if (receivedMessage !== null && receivedMessage?.chatId === chat._id) {
    setMessages([...messages, receivedMessage]);
  }

},[receivedMessage])


//always scroll the last message
useEffect(()=>{
  scroll.current?.scrollIntoView({behavior:"smooth"})
},[messages])

    return (
        <>
            <div className="ChatBox-container">
            {chat?(
                 <>
                 <div className="chat-header">
               <div className="follower">
                 <div>
                 <img src={userData?.profilePicture ? serverPublic + userData.profilePicture : serverPublic + "profile.png"} 
         alt="" className='followerImage' style={{width:"50px",hight:"50px"}}/>
                   <div className="name" style={{ fontSize: "0.9rem" }}>
                     <span>
                       {userData?.firstname} {userData?.lastname}
                     </span>
                   </div>
                 </div>
               </div>
               <hr
                 style={{
                   width: "95%",
                   border: "0.1px solid #ececec",
                   marginTop: "20px",
                 }}
               />
             </div>
             {/* chat body */}
 
                <div className="chat-body">
                 
                 {messages.map((message)=>{
                     return(
                        <>
                         <div ref={scroll} className={ message.senderId === currentUser 
                         ? "message own"
                         : "message"}>
 
                             <span>{message.text}</span>
                             <span>{format(message.createdAt)}</span>
                             
                        </div>
                        </>
                     )
                 })}
                </div>
 
                {/* sender */}
                <div className="chat-sender">
                 <div>+</div>
                 <InputEmoji value={newMessage} onChange={handleChange}/>
                 <div className="send-button button" onClick={handleSend}>Send</div>
                </div>
                 </>
            ) : (
                <span className='chatbox-empty-message'>
                    Tap on a Chat to Start Coversation...
                </span>
            )}
               
            </div>
        </>
    )
}

export default ChatBox