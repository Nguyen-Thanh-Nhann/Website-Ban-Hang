import { Col, Image, InputNumber } from "antd";
import styled from "styled-components";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

export const WrapperStyleImageSmall = styled(Image)`
  height: 64px;
  width: 64px;
`;

export const WrapperStyleColImage = styled(Col)`
  flex-basis: unset;
  display: flex;
`;

export const WrapperStyleNameProduct = styled.h1`
  color: rgb(36, 36, 36);
  font-size: 24px;
  font-weight: 300;
  line-height: 32px;
  word-break: break-word;
`;

export const WrapperStyleTextSell = styled.span`
  font-size: 15px;
  line-height: 24px;
  color: rgb(120, 120, 120);
`;

export const WrapperPriceProduct = styled.div`
  background: rgb(250, 250, 250);
  border-radius: 4px;
`;

export const WrapperPriceTextProduct = styled.h1`
  font-size: 32px;
  line-height: 40px;
  margin-right: 8px;
  font-weight: 500;
  padding: 10px;
  margin-top: 10px;
`;

export const WrapperAddressProduct = styled.div`
  span.address {
    text-decoration: underline;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span.change-address {
    color: rgb(11, 116, 229);
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }
`;

export const WrapperQualityProduct = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  width: 104px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const WrapperInputNumber = styled(InputNumber)`
  &.ant-input-number.ant-input-number-sm {
    width: 40px;
    border-top: none;
    border-bottom: none;
    .ant-input-number-handler-wrap {
      display: none !important;
    }
  }
`;

export const WrapperDescriptionProduct = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  color: rgb(39, 39, 42);
`;

export const DropdownContent = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  padding: 10px;
  border: 1px solid #ddd;
  margin-top: 5px;
  background-color: #f9f9f9;
`;

export const DropdownToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: rgb(39, 39, 42);
  margin-left: auto;
`;
