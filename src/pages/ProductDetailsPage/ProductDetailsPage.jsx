import React from "react";
import ProductDetailsComponent from "../../components/ProductDetailsComponent/ProductDetailsComponent";
import { Navigate, useNavigate, useParams } from "react-router-dom"

const ProductDetailsPage = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  return (
    <>
    {/* <!-- Single Page Header start --> */}
    <div class="container-fluid page-header py-5">
      <h1 class="text-center text-white display-6">Shop</h1>
        <ol class="breadcrumb justify-content-center mb-0">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Pages</a></li>
            <li class="breadcrumb-item active text-white">Chi tiết sản phẩm</li>
        </ol>
    </div>
    {/* <!-- Single Page Header End --> */}
    <div style={{padding: "10px 120px", background: "#efefef", minHeight: "100vh"}}>
         
      <ProductDetailsComponent idProduct={id}/>
    </div>
    </>
  );
};

export default ProductDetailsPage;
