import React from "react";
import { WrapperContent, WrapperLabelText, WrapperTextPrice } from "./style";
import TypeProductNavbar from "../TypeProductNavbar/TypeProductNavbar";
import { Checkbox, Rate } from "antd";
import "./style.css";

const NavBarComponent = () => {
  const onChange = () => {};

  const images = [
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MY1W2_GEO_VN?wid=890&hei=890&fmt=jpeg&qlt=90&.v=1680742496862",
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HPBJ2?wid=890&hei=890&fmt=jpeg&qlt=90&.v=1601575259000",
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HQ5Z2?wid=890&hei=890&fmt=jpeg&qlt=90&.v=1661963682947",
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=532&hei=582&fmt=png-alpha&.v=1724041669458",
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MA7F4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723162550519",
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQKJ3?wid=890&hei=890&fmt=jpeg&qlt=90&.v=1701898734502",
  ];

  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option, index) => (
          <div key={option} className="category-item">
            <TypeProductNavbar name={option} image={images[index]} />
          </div>
        ));
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onChange={onChange}
          >
            {options.map((option) => (
              <Checkbox
                style={{ marginLeft: 0 }}
                value={option.value}
                key={option.value}
              >
                {option.label}
              </Checkbox>
            ))}
          </Checkbox.Group>
        );
      case "star":
        return options.map((option) => (
          <div style={{ display: "flex" }} key={option}>
            <Rate style={{ fontSize: "12px" }} disabled defaultValue={option} />
            <span> {`từ ${option} sao`}</span>
          </div>
        ));
      case "price":
        return options.map((option) => (
          <WrapperTextPrice key={option}>{option}</WrapperTextPrice>
        ));
      default:
        return {};
    }
  };

  return (
    <div style={{ backgroundColor: "rgb(255, 255, 255)", marginRight: "15px" }}>
      <WrapperContent>
        <div className="category">
          {renderContent("text", [
            "Bộ sạc",
            "Giá đỡ",
            "Kính Cường Lực",
            "Tai Nghe",
            "Ốp Lưng",
            "Dây sạc",
          ])}
        </div>
      </WrapperContent>
    </div>
  );
};

export default NavBarComponent;
