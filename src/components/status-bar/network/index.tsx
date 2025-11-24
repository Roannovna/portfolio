import { useState, useEffect } from 'react'
import online from '@/assets/status-bar/online.svg'
import offline from '@/assets/status-bar/offline.svg'

export function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className='network_status'>
      {isOnline ? 
        <div><img src={online} style={{height: '16px'}} alt="online" /></div> : 
        <div><img src={offline} style={{height: '16px'}} alt="offline" /></div>
      }
    </div>
  )
}
