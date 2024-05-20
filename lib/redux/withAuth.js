'use client';
import {useState} from 'react';
import {useLayoutEffect} from 'react';
import {isAuthenticated} from './middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function withAuth(Component) {
  const WithAuth = props => {
    const [loading, setloading] = useState(true);
    useLayoutEffect(() => {
      const checkAuth = async () => {
        if (!isAuthenticated()) {
          await AsyncStorage.clear();
        }
      };
      checkAuth();
      setTimeout(() => setloading(false), 500);
    }, []);
    return loading ? <></> : <Component {...props} />;
  };

  // Add a displayName to your HOC
  WithAuth.displayName = `WithAuth(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WithAuth;
}
