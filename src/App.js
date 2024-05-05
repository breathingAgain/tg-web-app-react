import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import  Header  from './components/Header/Header';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import  Form  from './components/Form/Form';

function App() {
  
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg])


  return (
    <TonConnectUIProvider manifestUrl="https://super-buttercream-e12921.netlify.app/tonconnect-manifest.json">
      { 
        <div className="App">
          <Header/>
          <Form/> 
        </div> 
      }
    </TonConnectUIProvider>
  );

}

export default App;
