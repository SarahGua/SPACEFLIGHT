import { Button, Card, Col, Row } from "react-bootstrap"
import { Article } from "./HomeComponent"

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
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CardComponent