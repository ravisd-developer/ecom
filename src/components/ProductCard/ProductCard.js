import './ProductCard.scss';
import { BsFillCartCheckFill, BsFillArrowRightSquareFill, BsFillStarFill} from "react-icons/bs";
function ProductCard(props) {
    const { id, title, price, category, image, description, rating:{rate, count } } = props.data;
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
                            <a href=""><BsFillCartCheckFill /></a>
                            <a href={`product/${id}`}><BsFillArrowRightSquareFill /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;