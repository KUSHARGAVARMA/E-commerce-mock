import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "../components/header/Header";

import useFetchData from '../hooks/useFetchData';
import Loader from '../components/loader/Loader';
import ProductList from '../pages/productList';
import NotFound from '../pages/notFound/NotFound';
import Cart from '../pages/cart/cart';


const AppRoutes = () => {
   const {data: categories, isLoading } = useFetchData('https://fakestoreapi.com/products/categories',[]);
   

    return (
        <>
          <Router>
            {/* <Loader /> */}
            <Header categories={categories}/> 
            {
              isLoading ? (<Loader />) :
              (
                <Routes>
                  <Route path="/products/:categoryName" element={<ProductList />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              )
            }

            {/* <Footer /> */}
          </Router>
        </>
    )

}

export default AppRoutes;