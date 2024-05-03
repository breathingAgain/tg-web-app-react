import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import  Header  from './components/Header/Header';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

function App() {
  
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg])


  return (
    <TonConnectUIProvider manifestUrl="https://super-buttercream-e12921.netlify.app/tonconnect-manifest.json">
      { 
        <div className="App">
          <Header/>
        </div> 
      }
    </TonConnectUIProvider>
  );

}

export default App;
