import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const DetailsComponent = () => {

    const params = useParams<{id: string}>()
    console.log(params, 'params')

    // const [articleDetails, setArticleDetails] = useState(null)

    // useEffect(() => {
    //     const articleIndex: number | undefined = params.id ? parseInt(params.id): undefined
    //     if(!articleDetails === undefined){
            
    //     }
    // })

    return (
        <div>
            <h1>{params.id}</h1>
        </div>
    )
}

export default DetailsComponent