
import { useState, useEffect } from "react";

const useFetchChat = (authToken) => {
  const [chatData, setChatData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChatData = async () => {
      setIsLoading(true);
      try {
        const chatResponse = await fetch(
          "https://api.ilmoirfan.com/chats/get_user_chats",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        const response = await chatResponse.json();
        if (response) {
          
          setChatData(response);
        }

      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchChatData();
    
  }, [authToken]);

 
  return { chatData, isLoading, error };

};

export default useFetchChat;
