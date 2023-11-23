import { useState, useEffect } from "react";
import { DevSettings } from "react-native";

function useUserDetails(authToken) {
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ServerResponse , setServerResponse]= useState()

  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const response = await fetch("https://api.ilmoirfan.com/auth/me", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        console.log('Actual Response ',response.status);
        if (response.status===200) {   
          const data = await response.json();
          setUserDetails(data);
          setIsLoading(false);
          setServerResponse(response.status)
          
        }
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
      finally{
         console.log(ServerResponse);
      }
    }

    fetchUserDetails();
  }, [authToken,ServerResponse]);

  return { userDetails, isLoading, error, ServerResponse };
}
export default useUserDetails;
