import { Button, Card, Col } from "react-bootstrap"
import { Article } from "./HomeComponent"
import { Link } from "react-router-dom"

const CardComponent = ({info}: {info: Article}) => {
    return (
        <Col className=" col col-4 mb-4">
            <Card key={info.id} className="h-100">
                <Card.Img variant="top" src={info.image_url} />
                <Card.Body className="d-flex flex-column justify-content-evenly">
                    <Card.Title>{info.title}</Card.Title>
                    {/* <Card.Text>
                    {info.summary}
                    </Card.Text> */}
                    <Link to={'/details/' + info.id}>
                        <Button variant="primary">Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CardComponent