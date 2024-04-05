import { Button, Card, Col } from "react-bootstrap"
import { Article } from "./HomeComponent"
import { Link } from "react-router-dom"

const CardComponent = ({info}: {info: Article}) => {
    return (
        <Col className=" col col-4">
            <Card key={info.id}>
                <Card.Img variant="top" src={info.image_url} />
                <Card.Body>
                    <Card.Title>{info.title}</Card.Title>
                    <Card.Text>
                    {info.summary}
                    </Card.Text>
                    <Link to={'/details/' + info.id}>
                        <Button variant="primary">Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CardComponent