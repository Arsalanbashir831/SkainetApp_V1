export default function CreateNewRoom(title , senderId){
    return  JSON.stringify({
        command: "start_chat",
        text: title,
        sender: senderId
      })
}