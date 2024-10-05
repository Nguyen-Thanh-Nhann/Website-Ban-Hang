import React, { useEffect, useRef, useState } from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import {
  WrapperButtonMore,
  WrapperProducts,
  WrapperTypeProduct,
} from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import * as ProductService from "../../services/ProductService";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/LoadingComponent/Loading";
import { useSelector } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import BannerComponent from "../../components/BannerComponent/BannerComponent";
// links này là cho Footer
const supportLinks = [
  { href: "https://example.com/link1", text: "Hotline" },
  { href: "https://example.com/link2", text: "Các câu hỏi thường gặp" },
  { href: "https://example.com/link2", text: "Gửi yêu cầu hỗ trợ" },
  { href: "https://example.com/link2", text: "Hướng dẫn đặt hàng" },
  { href: "https://example.com/link2", text: "Phương thức vận chuyển" },
  { href: "https://example.com/link2", text: "Chính sách đổi trả" },
  { href: "mailto:tientantai12@gmail.com", text: "Báo lỗi bảo mật " },
  { href: "https://example.com/link2", text: "Hướng dẫn trả góp" },
];

const StoreLinks = [
  { href: "https://example.com/tiki1", text: "Giới thiệu NhânTàiStore" },
  { href: "https://example.com/tiki2", text: "NhânTàiStore Blog" },
  { href: "https://example.com/tiki2", text: "Tuyển dụng" },
  { href: "https://example.com/tiki2", text: "Chính sách bảo mật thanh toán" },
  {
    href: "https://example.com/tiki2",
    text: "Chính sách bảo mật thông tin cá nhân",
  },
  {
    href: "https://example.com/tiki2",
    text: "Chính sách giải quyết khiếu nại",
  },
  {
    href: "https://example.com/tiki2",
    text: "Tiếp thị liên kết cùng NhânTàiStore",
  },
  { href: "https://example.com/tiki2", text: "Bán hàng doanh nghiệp" },
  { href: "https://example.com/tiki2", text: "Điều kiện vận chuyển" },
];

const CooperationLinks = [
  { href: "https://example.com/tiki1", text: "Quy chế hoạt động sàn GDTMDT" },
  { href: "https://example.com/tiki2", text: "Bán hàng cùng NhânTàiStore" },
];

const HomePage = () => {
  const searchProduct = useSelector((state) => state?.product?.search);
  const searchDebounce = useDebounce(searchProduct, 500);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(6);
  const [typeProducts, setTypeProducts] = useState([]);

  const fetchProductAll = async (context) => {
    const limit = context?.queryKey && context?.queryKey[1];
    const search = context?.queryKey && context?.queryKey[2];
    const res = await ProductService.getAllProduct(search, limit);

    return res;
  };
  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct();
    if (res?.status === "OK") {
      setTypeProducts(res?.data);
    }
  };
  useEffect(() => {
    fetchAllTypeProduct();
  }, []);
  const {
    isPending,
    data: products,
    isPreviousData,
  } = useQuery({
    queryKey: ["products", limit, searchDebounce],
    queryFn: fetchProductAll,
    retry: 3,
    retryDelay: 1000,
    placeholderData: (previousData) => previousData,
  });
  
  return (
    <Loading isPending={isPending || loading}>
      <div className="body">
         <BannerComponent />
        <div id="container">
            {/* <!-- Fruits Shop Start--> */}
        <div class="container-fluid fruite py-5">
            <div class="container py-5">
                <div class="tab-class text-center">
                    <div class="row g-4">
                        <div class="col-lg-4 text-start">
                            <h1>Our Organic Products</h1>
                        </div>
                        <div class="col-lg-8 text-end"> 
                          <ul class="nav nav-pills d-inline-flex text-center mb-5">
                            {typeProducts.map((item) => (
                              <li class="nav-item" key={item}>
                                <a class="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" >
                                  <span class="text-dark" style={{ width: '130px' }}><TypeProduct name={item}/></span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                    </div>
                    <div class="tab-content">
                        <div id="tab-1" class="tab-pane fade show p-0 active">
                            <div class="row g-4">
                                <div class="col-lg-12">
                                    <div class="row g-4">
                                    <WrapperProducts>
                                      {products?.data?.map((product) => {
                                        return (
                                          <CardComponent
                                            key={product._id}
                                            countInStock={product.countInStock}
                                            description={product.description}
                                            image={product.image}
                                            name={product.name}
                                            price={product.price}
                                            rating={product.rating}
                                            type={product.type}
                                            selled={product.selled}
                                            discount={product.discount}
                                            id={product._id}
                                          />
                                        );
                                      })}
                                    </WrapperProducts>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>      
            </div>
        </div>
        {/* <!-- Fruits Shop End--> */}
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <WrapperButtonMore
              textButton={isPreviousData ? "Load more" : "Xem thêm"}
              type="outline"
              styleButton={{
                border: `1px solid ${
                  products?.total === products?.data?.length
                    ? "#f5f5f5"
                    : "#9255FD"
                }`,
                color: `${
                  products?.total === products?.data?.length
                    ? "#f5f5f5"
                    : "#9255FD"
                }`,
                width: "240px",
                height: "38px",
                borderRadius: "4px",
              }}
              disabled={
                products?.total === products?.data?.length ||
                products?.totalPage === 1
              }
              styleTextButton={{ fontWeight: 500 }}
              onClick={() => setLimit((prev) => prev + 8)}
            />
          </div>
          {/* <!-- Featurs Section Start --> */}
        <div class="container-fluid featurs py-5">
            <div class="container py-5">
                <div class="row g-4">
                    <div class="col-md-6 col-lg-3">
                        <div class="featurs-item text-center rounded bg-light p-4">
                        <div class="featurs-icon btn-square rounded-circle mb-5 mx-auto" style={{backgroundColor: '#319fff'}}>
                                <i class="fas fa-car-side fa-3x text-white"></i>
                            </div>
                            <div class="featurs-content text-center">
                                <h5>Free Shipping</h5>
                                <p class="mb-0">Free on order over $300</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="featurs-item text-center rounded bg-light p-4">
                            <div class="featurs-icon btn-square rounded-circle mb-5 mx-auto" style={{backgroundColor: '#319fff'}}>
                                <i class="fas fa-user-shield fa-3x text-white"></i>
                            </div>
                            <div class="featurs-content text-center">
                                <h5>Security Payment</h5>
                                <p class="mb-0">100% security payment</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="featurs-item text-center rounded bg-light p-4">
                        <div class="featurs-icon btn-square rounded-circle mb-5 mx-auto" style={{backgroundColor: '#319fff'}}>
                                <i class="fas fa-exchange-alt fa-3x text-white"></i>
                            </div>
                            <div class="featurs-content text-center">
                                <h5>30 Day Return</h5>
                                <p class="mb-0">30 day money guarantee</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="featurs-item text-center rounded bg-light p-4">
                        <div class="featurs-icon btn-square rounded-circle mb-5 mx-auto" style={{backgroundColor: '#319fff'}}>
                                <i class="fa fa-phone-alt fa-3x text-white"></i>
                            </div>
                            <div class="featurs-content text-center">
                                <h5>24/7 Support</h5>
                                <p class="mb-0">Support every time fast</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Featurs Section End --> */}
        </div>

      <FooterComponent
        supportLinks={supportLinks}
        StoreLinks={StoreLinks}
        CooperationLinks={CooperationLinks}
      />
    </Loading>
  );
};

export default HomePage;
