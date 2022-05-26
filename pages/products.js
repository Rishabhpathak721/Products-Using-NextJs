import {Container, Row, Col, carousel, card} from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHighlighter, faBucket, faBookmark } from '@fortawesome/free-solid-svg-icons';

export default function Products({products}){
    return (
        <div className="Container">
            <div className='row'>
                <div id='card-container' className='w-100'>
                {products.map(product => {
                    return( 
                        <div id='card' class="card" >
                            
                            {product.image.map((item,index) => {
                            if(index === 0){
                                return ( 
                                <div class="carousel-item active">
                                    <a className='bookmark'><FontAwesomeIcon icon={faBookmark} /></a><img class="d-block w-100 h-75" src={item} alt="slide-{index}"/>
                                </div>
                                )
                            }else{
                                return (
                                <div class="carousel-item">
                                    <img class="d-block w-100" src={item} alt="slide-{index}"/>
                                </div>
                                )
                            }
                    
                    })}
                      <div class="card-body">
                        <h5 class="card-title">{product.name}</h5>
                        <div className='rate d-flex'>
                        <p class="card-text-special-price">₹ {product.special_price} </p>
                        <p class="card-text-price"><s>{product.price} </s></p>
                        <p class="card-text-disc">( {product.discount} %)</p>
                        <a className='icon'><FontAwesomeIcon  icon={faBucket} /></a>
                        {/* <FontAwesomeIcon icon={fa-solid fa-bucket} /> */}
                        {/* <FontAwesomeIcon icon="fa-solid fabagshopping" /> */}
                        </div>
                         
                        </div>
                    </div>
                    )
                })}
                    
                </div>
            </div>
           
        </div>
    )
}

export async function getStaticProps(){
    const data = await fetch('https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json').then(r => r.json());
    console.log(data['data']['products']);
    const products = data['data']['products'];
    return{
        props: {
            products
        }
    }
}

