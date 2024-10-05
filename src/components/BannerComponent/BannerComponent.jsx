import React from "react";
import { searchProduct } from "../../redux/slides/productSlide";
import { useState } from "react";
import { useDispatch } from "react-redux";
import videobn1 from '../../assets/video1.mp4'
import videobn2 from '../../assets/video2.mp4'
const BannerComponent = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const onSearch = (e) => {
    setSearch(e.target.value);
    dispatch(searchProduct(e.target.value));
  };

  return (
    <>
      {/* <!-- Hero Start --> */}
      <div className="container-fluid py-5 mb-5 hero-header">
        <div className="container py-5" style={{ position: "relative", zIndex: 2 }}>
          <div className="row g-5 align-items-center">
            <div className="col-md-12 col-lg-7">
              <h4 className="mb-3 text-secondary">100% Digital Solutions</h4>
              <h1 className="mb-5 display-3 text-primary">
              Smart Technology for Sustainable Living
              </h1>
              <div className="position-relative mx-auto">
                <input
                  className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
                  size="large"
                  bordered={false}
                  textButton="Tìm kiếm"
                  placeholder="Bạn tìm gì hôm nay"
                  onChange={onSearch}
                />
                <button
                  type="submit"
                  className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
                  style={{ top: 0, right: "25%" }}
                >
                  Submit Now
                </button>
              </div>
            </div>
            <div className="col-md-12 col-lg-5">
              <div
                id="carouselId"
                className="carousel slide position-relative"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active rounded">
                    <video style={{width:'500px'}} src={videobn1} autoPlay loop muted/>
                  </div>
                  <div className="carousel-item rounded">
                  <video style={{width:'500px'}} src={videobn2} autoPlay loop muted/>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselId"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselId"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Hero End --> */}
    </>
  );
};

export default BannerComponent;
