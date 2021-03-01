import {articles} from "../../../data";


export default function handler({query: {id}}, res) {
    // or use req,res and destructure id off
    // const id = req.query.id 
    const filteredArticle = articles.filter(article => article.id === id)

    if(filteredArticle.length > 0) {
        res.status(200).json(filteredArticle[0])
    } else{
        res.status(404).json({message: `Article of the id of ${id} is not found`})
    }
} 