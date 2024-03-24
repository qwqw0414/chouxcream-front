import MainPage from "./pages/main/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TestPage } from "./pages/test/TestPage";
import FindPasswordPage from "./pages/login/find_password/FindPasswordPage";
import FindEmailPage from "./pages/login/find_email/FindEmailPage";
import JoinPage from "./pages/join/JoinPage";
import { ReduxTestPage } from "./pages/test/ReduxTestPage";
import LoginPage from "./pages/login/Loginpage";
import SavedProductPage from "./pages/mypage/shopping/saved/savedProduct/SavedProductPage";
import RecentlyViewedPage from "./pages/mypage/shopping/saved/recentlyViewed/RecentlyViewedPage";
import ProfilePage from "./pages/mypage/my/profile/ProfilePage";
import ProfileEditPage from "./pages/mypage/my/profileEdit/ProfileEditPage";
import AddressPage from "./pages/mypage/my/address/AddressPage";

interface RouteProps {
  path: string; // 라우트 경로
  component: any; // 라우트 컴포넌트
  role?: string; // 라우트 접근 권한
}

function App() {
  // 운영 환경 로깅
  console.log("NODE_ENV", import.meta.env.NODE);

  // api 서버 주소 로깅
  console.log("SERVER_HOST", import.meta.env.VITE_SERVER_HOST);

  // 라우트 매핑 설정
  // @TODO: 라우트 권한 설정
  const routes: Array<RouteProps> = [
    // ex :: { path: '/', component: MainPage, role: 'ROLE_ADMIN'},

    // ############################################################
    // 메인 페이지
    // ############################################################
    { path: "/", component: MainPage },
    { path: "/test", component: TestPage },
    { path: "/login/find_password", component: FindPasswordPage },
    { path: "/login/find_email", component: FindEmailPage },
    { path: "/join", component: JoinPage },
    { path: "/login", component: LoginPage },
    { path: "/my/", component: LoginPage },
    { path: "/my/saved/tab/saved-product", component: SavedProductPage },
    {
      path: "/my/saved/tab/recently-viewed-product",
      component: RecentlyViewedPage,
    },
    { path: "/my/profile", component: ProfilePage },
    { path: "/my/profile-edit", component: ProfileEditPage },
    { path: "/my/address", component: AddressPage },

    // ############################################################
    // 테스트 페이지
    // ############################################################
    { path: "/test/none", component: TestPage },
    { path: "/test/redux", component: ReduxTestPage },
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
