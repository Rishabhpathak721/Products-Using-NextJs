
import {Container, Row, Col, carousel, card} from 'react-bootstrap';

export default function Reviews({reviews}){
    return (
        <div className="Container-reviews">
            <div className='row' id='row'>
                <div id='card-container-review' className='card w-100'>
                {reviews.map(item => {
                    return( 
                        <div id='card-review' class="card" >
                            <div className='circle'><span>&#8220;</span></div>
                        <div id="card-body" class="card-body-review">
                            <p class="card-text">{item.Reviews}</p>
                            <h4 class="card-title-review">{item.Name}</h4>
                            <p class="card-text-review">{item.Company}</p>
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
    const result = await fetch('https://admin.tomedes.com/api/v1/get-reviews?page=1').then(r => r.json());
    console.log(result['data']);
    const reviews = result['data'];
    return{
        props: {
            reviews
        }
    }
}

