import './ProductCard.scss';
import { BsFillCartCheckFill, BsFillArrowRightSquareFill, BsFillStarFill, BsWindowSidebar} from "react-icons/bs";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartItems, setCartItems } from '../../redux/actions/CartActions';
function ProductCard(props) {
    const { id, title, price, category, image, description, rating:{rate, count } } = props.data;
    const dispatch = useDispatch();
    const addToCart = (id) => {
        const pro = {
            id: id,
            name: `custom Name ${id}`,
        }
        dispatch(setCartItems(pro))
    };
    return (
        <>
            <div className="product-card">
                <div className="badge">Hot</div>
                <div className="product-tumb">
                    <img src={image} alt="" />
                </div>
                <div className="product-details">
                    <span className="product-catagory">{category} <span className='plp--star'> <BsFillStarFill />{rate} </span> </span>
                    
                    <a className='product-title' href={`product/${id}`}>{title}</a>
                    <p>{description}</p>
                    <div className="product-bottom-details">
                        <div className="product-price"><small></small>${price}</div>
                        <div className="product-links">
                            <a onClick={() => addToCart(id)}><BsFillCartCheckFill /></a>
                            <a href={`product/${id}`}><BsFillArrowRightSquareFill /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;