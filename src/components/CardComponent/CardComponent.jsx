import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import { StarFilled } from '@ant-design/icons'
import logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
import { convertPrice } from '../../utils'

const CardComponent = (props) => {
    const { countInStock, description, image, name, price, rating, type, discount, selled, id } = props
    const navigate = useNavigate()
    const handleDetailsProduct = (id) => {
        navigate(`/product-details/${id}`)
    }

    return (
        <>
        <div class="col-md-2 col-lg-2 col-xl-2" hoverable onClick={() => handleDetailsProduct(id)}>
                <div class="rounded position-relative fruite-item">
                    <div class="fruite-img">
                    <img src={image} class="img-fluid w-100 rounded-top" alt="example" />
                    </div>
                    <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: '10px', left: '10px'}}>{type}</div>
                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>{name}</h4>
                        <p>{description}</p>
                        <WrapperReportText>
                            <span style={{ marginRight: '4px' }}>
                                <span>{rating} </span> <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
                            </span>
                            <WrapperStyleTextSell> | Da ban {selled || 1000}+</WrapperStyleTextSell>
                        </WrapperReportText>
                        <div class="d-flex justify-content-between flex-lg-wrap">
                            <p class="text-dark fs-5 fw-bold mb-0"> {convertPrice(price)}</p>
                        </div>
                    </div>
                </div>
            </div>  
            
        </>
    )
}

export default CardComponent