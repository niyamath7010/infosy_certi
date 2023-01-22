import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import Table from './Table';
// import Product from './Product';
// import QualityDiscount from './Quality';
import AddEmployee from './AddEmployee';
// import ArrayProps from './ArrayProps';
// import ChildToProps from './ChildToParent';
// import Product from './ProductReview/Product';
// import ProductDetails from './ProductReview/ProductDetails';
// import Axioss from './Axios';
// import BootStrapForm from './FormBootsrap';
import AddDeleteEmployee from './ProductReview/AddDeleteEmplyee';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Product /> */}
    {/* <Table /> */}
    {/* <QualityDiscount/> */}
    {/* <AddEmployee /> */}
    {/* <ArrayProps /> */}
    {/* <ChildToProps /> */}
    {/* <Product /> */}
    {/* <ProductDetails /> */}
    {/* <BootStrapForm /> */}
    {/* <Axioss /> */}
    <AddDeleteEmployee />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
