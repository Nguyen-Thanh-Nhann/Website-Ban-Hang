// style.js
import styled from "styled-components";

export const InformationContainer = styled.div`
  width: 100%;  // Thêm width để full màn hình
  padding: 20px; // Giữ padding để nội dung không dính sát vào cạnh
  display: flex;
  justify-content: space-between;
  box-sizing: border-box; // Đảm bảo padding không ảnh hưởng đến tổng chiều rộng
  background-color: #f8f9fa; // Thêm màu nền (nếu muốn)
`;
// justify-content: space-between;
export const Title = styled.h3`
  margin: 0;
  font-size: 18px;
`;

export const SmallLinks = styled.div`
  font-size: 14px;
  margin-top: 8px;
  width: 200px;
`;

export const Link = styled.a`
  color: rgb(128, 128, 137);
  text-decoration: none;
  margin-right: 10px;
  display: block;
  padding: 10px;
`;
export const CertifiedImage = styled.img`
  height: 52px;
  width: 52px;
`;

export const StyledAnchor = styled.a`
  display: inline-block;
  height: 32px;
  margin-right: 10px;
`;

export const Icon = styled.span`
  display: flex;
  justify-content: space-evenly;
  font-size: 35px;
`;
export const FooterWrapper = styled.style`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;
export const Fontstyle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 10px;
`;
export const style = styled.p`
  margin-top: 10px;
`;