import { useEffect, useState } from 'react';
import CardComponent from './CardComponent';
import { Col, Row } from 'react-bootstrap';

export interface Welcome {
    count: number
    next: string
    previous: null
    results: [Article]
}

export interface Article {
    id: number
    title: string
    url: string
    image_url: string
    news_site: string
    summary: string
    publiched_at: string
    updated_at: string
    featured: boolean
}

const HomeComponent = () => {

    const [articles, setArticles] = useState<Welcome>()

    useEffect(() => {
        fetch('https://api.spaceflightnewsapi.net/v4/articles')
        .then((res) => {
            if(res.ok){
                return res.json()
            } else {
                throw new Error('Errore nel recupero articles')
            }
        })
        .then((data) => {
            setArticles(data)
            console.log(data)
        })
        .catch((err) => console.log('errore', err))
    }, [])

    
    return (
        <>
            <h1>NEWS!!</h1>
            <Row>
            {
                articles && articles.results ? (
                    articles.results.map((art) => {
                        return (
                                <CardComponent info={art} key={art.id}/>
                        )
                    })
                ) : (
                    <p>Loading....</p>
                )
            } 
            </Row>
        </>
    )
}

export default HomeComponent