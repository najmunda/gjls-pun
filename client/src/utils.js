import { useEffect, useState } from "react";

export function useLineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    function onlineHandler() {
      console.log('online');
      setIsOnline(true);
    };
    function offlineHandler() {
      console.log('offline');
      setIsOnline(false);
    };
    window.addEventListener('online', onlineHandler);
    window.addEventListener('offline', offlineHandler);
    return () => {
      window.removeEventListener('online', onlineHandler);
      window.removeEventListener('offline', offlineHandler);
    };
  }, []);
  return isOnline;
}