import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Card, Col, Row } from "react-bootstrap"
import NavBarComponent from "./NavBarComponent"

interface Details {
    id: number
    title: string
    url: string
    image_url: string
    news_site: string 
    summary: string
    publishedAt: string
    updatedAt: string
    featured: boolean
}

const DetailsComponent = () => {

    const params = useParams<{id: string}>()
    console.log(params, 'params')

    const [articleDetails, setArticleDetails] = useState<Details>()

    useEffect(() => {
        console.log(params.id)
        fetch(`https://api.spaceflightnewsapi.net/v4/articles/${params.id}`)
        .then((res)=> {
            if(res.ok){
                return res.json()
            } else {
                throw new Error ('errore nel recupero json')
            }
        })
        .then((data) => {
            console.log(data)
            setArticleDetails(data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [params.id])

    return (
        <div>
            <NavBarComponent />
            {articleDetails && (
            <Row>
                <Col>  
                    <Card>
                        <Card.Img variant="top" src={articleDetails.image_url} />
                        <Card.Body>
                            <Card.Title className="fs-3">{articleDetails.title}</Card.Title>
                            <Card.Text>
                            {articleDetails.summary}
                            </Card.Text>
                            <Card.Text>
                            <p className="m-0">For more info go to the website:</p>
                            <p className="m-0">{articleDetails.url}</p>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            )}
        </div>
    )
}

export default DetailsComponent