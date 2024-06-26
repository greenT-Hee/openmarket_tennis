
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import reset from 'styled-reset';
import { createGlobalStyle, ThemeProvider} from 'styled-components';
import { lightTheme } from './styles/colorPalette';
import { useEffect, useState } from 'react';
import './styles/global.css';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { RecoilRoot, useRecoilValue } from 'recoil';
import ResetRecoilContext from './ResetRecoilContext';
import MainPage from './pages/mainPage';
import LoginPage from './pages/auth/loginPage';
import SignupPage from './pages/auth/signupPage';
import SellerCenterPage from './pages/seller/sellerCenterPage';
import RegistProductPage from './pages/seller/registProductPage';
import EditPage from './pages/seller/editPage';
import ErrorPage from './pages/errorPage';
import DetailPage from './pages/detailPage';
import CartPage from './pages/buyer/CartPage';
import { OREDER_DATA, TOTAL_PRICE, user_info, user_role } from './atom/Atom';
import PaymentPage from './pages/buyer/PaymentPage';
import OrderPage from './pages/buyer/OrderPage';
import {PrivateRouter,  IsLoginRouter } from './components/PrivateRouter';
import OrderDetailPage from './pages/buyer/OrderDetailPage';
import SearchPage from './pages/searchPage';

const queryClient = new QueryClient();
const GlobalStyle = createGlobalStyle`
  ${reset};
  /* other styles */
  `

function App() {
  const orderData = useRecoilValue(OREDER_DATA);
  const [theme, setTheme] = useState(lightTheme);
  const [recoilKey, setRecoilKey] = useState(0);
  const resetRecoil = () => {
		setRecoilKey(prev => prev + 1);
	};

  return (
    <QueryClientProvider client={queryClient}>
      <ResetRecoilContext.Provider value={resetRecoil}>
        <RecoilRoot key={recoilKey}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <GlobalStyle/>
              <Routes>
                {/* --- 공통 --- */}
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/search/:keyword" element={<SearchPage />}></Route>
                <Route path="/signup" element={<SignupPage />}></Route>
                <Route path="/product/:pid" element={<DetailPage />}></Route>
                <Route path="/*" element={<ErrorPage />}></Route>
                {/* --- 비회원만 --- */}
                <Route element={<IsLoginRouter />}>
                  <Route path="/login" element={<LoginPage />} />
                </Route>
                
                {/* -- seller -- */}
                <Route element={<PrivateRouter isAuth={"SELLER"} />}>
                  <Route path="/seller_center" element={<SellerCenterPage />} />
                  <Route path="/regist_product" element={<RegistProductPage />} />
                  <Route path="/edit/:pid" element={<EditPage />} />
                </Route>
              
                {/* -- buyer -- */}
                <Route element={<PrivateRouter isAuth={"BUYER"} />}>
                  <Route path="/cart" element={<CartPage />} />
                  {orderData && <Route path="/payment" element={<PaymentPage />} />}
                  <Route path="/order" element={<OrderPage />} />
                  <Route path="/order/:order_num" element={<OrderDetailPage />} />
                </Route>
              </Routes>
            </ThemeProvider>
          </BrowserRouter>
        </RecoilRoot>
      </ResetRecoilContext.Provider>
    </QueryClientProvider>

  )
}

export default App
