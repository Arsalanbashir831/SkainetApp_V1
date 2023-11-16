export default fetchMsg =(senderId,grpId)=>{

    return JSON.stringify({
        command: "fetch_messages",
        sender: senderId,
        chatId: grpId,
      })

}  

