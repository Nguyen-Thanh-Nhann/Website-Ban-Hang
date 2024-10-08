import React, { useState, useEffect } from "react";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WrapperNavbar, WrapperProducts } from "./style";
import { useLocation } from "react-router-dom";
import * as ProductService from "../../services/ProductService";
import Loading from "../../components/LoadingComponent/Loading";
import { useSelector } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";

const TypeProductPage = () => {
  const searchProduct = useSelector((state) => state?.product?.search);
  const searchDebounce = useDebounce(searchProduct, 500);
  const { state } = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [panigate, setPanigate] = useState({
    page: 1, // Start with page 1
    limit: 10,
    total: 1,
  });

  const fetchProductType = async (type, page, limit) => {
    setLoading(true);
    const res = await ProductService.getProductType(type, page, limit);
    if (res?.status === "OK") {
      setLoading(false);
      setProducts(res?.data);
      setPanigate({ ...panigate, total: res?.totalPage });
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (state) {
      fetchProductType(state, panigate.page - 1, panigate.limit);
    }
  }, [state, panigate.page, panigate.limit]);

  const onChange = (page, pageSize) => {
    setPanigate({ ...panigate, page, limit: pageSize });
  };

  return (
    <Loading isPending={loading}>
      <div style={{ width: "100%", background: "#efefef", height: "calc(100vh - 64px)" }}>
         {/* <!-- Single Page Header start --> */}
        <div class="container-fluid page-header py-5">
              <h1 class="text-center text-white display-6">Shop</h1>
              <ol class="breadcrumb justify-content-center mb-0">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item"><a href="#">Pages</a></li>
                  <li class="breadcrumb-item active text-white">Danh mục sản phẩm</li>
              </ol>
          </div>
        {/* <!-- Single Page Header End --> */}
        <div style={{ width: "1270px", margin: "0 auto", height: "100%" }}>
          <Row style={{ flexWrap: "nowrap", paddingTop: "10px", height: "calc(100% - 20px)" }}>
            <WrapperNavbar span={4}>
              <NavBarComponent />
            </WrapperNavbar>
            <Col span={20} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <WrapperProducts>
                {products
                  ?.filter((pro) => {
                    if (searchDebounce === '') {
                      return pro;
                    } else if (pro?.name?.toLowerCase()?.includes(searchDebounce?.toLowerCase())) {
                      return pro;
                    }
                  })
                  ?.map((product) => (
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
                  ))}
              </WrapperProducts>
              <Pagination
                current={panigate.page}
                pageSize={panigate.limit}
                total={panigate.total * panigate.limit} // Total items
                onChange={onChange}
                style={{ textAlign: "center", marginTop: "10px" }}
              />
            </Col>
          </Row>
        </div>
      </div>
    </Loading>
  );
};

export default TypeProductPage;
