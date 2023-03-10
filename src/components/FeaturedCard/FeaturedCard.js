import Card from 'react-bootstrap/Card';
import FeaturedCards from '../../Data/FeaturedCards';
import Container  from 'react-bootstrap/Container';
import './Featured.scss'
function FeaturedCard() {
    const cards = FeaturedCards.map((FeaturedCard, index) => {
        return (
            <Card key={FeaturedCard.title} className="featured--card card">
                <Card.Img src={FeaturedCard.image} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Text className='card--badge'>{FeaturedCard.badge}</Card.Text>
                    <Card.Title>{FeaturedCard.title}</Card.Title>
                </Card.ImgOverlay>
            </Card>
        )
    })

    return (
        <div className='feature-bg'>
            
        <Container>
        <div className='featured'>  
        {
            cards
        }
        </div>
        </Container>
        </div>
    );
}

export default FeaturedCard;