import { useState, useEffect } from "react";

function useUserDetails(authToken) {
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const response = await fetch("https://api.ilmoirfan.com/auth/me", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        const data = await response.json();
        setUserDetails(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }

    fetchUserDetails();
  }, [authToken]);

  return { userDetails, isLoading, error };
}
export default useUserDetails;
