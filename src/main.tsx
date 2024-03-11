import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import './styles/index.css'
import './styles/font.css'
import { ThemeProvider } from '@material-tailwind/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from 'react-redux'
import store, { persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    {/* redux provider : 상태관리를 위한 redux provider
    - https://redux-toolkit.js.org/tutorials/typescript */}
    <Provider store={store}>

      {/* redux persist : redux에 관리되는 값을 로컬스토리지 저장 */}
      <PersistGate persistor={persistor}>

        {/* react query provider : 리엑트 쿼리를 사용하기 위한 provider
        - https://tanstack.com/query/latest/docs/framework/react/quick-start */}
        <QueryClientProvider client={new QueryClient()}>

          {/* tailwind material provider : 테일윈드 css를 사용하기 위한 provider
          - https://tailwindcss.com/docs/guides/vite 
          - https://www.material-tailwind.com/docs/react/guide/vite */}
          <ThemeProvider>
            <App />
          </ThemeProvider>

          {/* react query devtools : 리엑트 쿼리 디버깅을 위한 devtools
          - https://tanstack.com/query/latest/docs/framework/react/devtools */}
          <ReactQueryDevtools />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
