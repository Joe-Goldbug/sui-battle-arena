import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SuiClientProvider, WalletProvider as DappKitWalletProvider } from "@mysten/dapp-kit"; // 重命名以区分
import { networkConfig } from './config/networkConfig.tsx'
import { BrowserRouter } from 'react-router-dom';
import { WalletProvider as AppWalletProvider } from './context/WalletContext';


const queryClient = new QueryClient();



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider defaultNetwork="testnet" networks={networkConfig}>
        {/* DappKitWalletProvider 提供底层的钱包连接能力 */}
        <DappKitWalletProvider autoConnect>
          {/* AppWalletProvider 使用 DappKit 的 hooks 并提供自定义的 Context */}
          <AppWalletProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </AppWalletProvider>
        </DappKitWalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  </StrictMode>
);
