
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useGetUserToken = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      try {
        const userToken = await AsyncStorage.getItem('token');
        setToken(userToken);
      } catch (error) {
        console.log(error);
      }
    };

    getToken();
  }, []);

  return token;
};

export default useGetUserToken;
