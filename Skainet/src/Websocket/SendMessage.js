
export default function sendMessage (genType,msg,senderId,chatId){

return  JSON.stringify({
        command:genType === "@IMAGE"? "generate_image": genType === "@SKAI"? "chat_with_ai": "new_message",
        chatId: chatId,
        text:msg,
        sender: senderId,
    })
}