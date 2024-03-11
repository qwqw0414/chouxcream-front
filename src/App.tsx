import MainPage from "./pages/main/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

interface RouteProps {
  path: string; // 라우트 경로
  component: any; // 라우트 컴포넌트
  role?: string; // 라우트 접근 권한
}

function App() {

  // 라우트 매핑 설정 
  // @TODO: 라우트 권한 설정
  const routes: Array<RouteProps> = [
    // ex :: { path: '/', component: MainPage, role: 'ROLE_ADMIN'},
    { path: '/', component: MainPage },
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
