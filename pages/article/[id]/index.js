import Link from "next/link"
import {useRouter} from "next/router";
import Meta from "../../../components/Meta"

const article = ({article}) => {

    // very
    // const router = useRouter()
    // console.log(router)
    // const {id } = router.query

    return (
        <>
            <Meta title={article.title} />
            <h1>
                {article.id}
            </h1>
            <p>
                {article.body}
            </p>
            <br />
            <Link href="/">
                Go back
            </Link>
        </>
    )
}

// This is run after every requests or when page is loaded

// export const getServerSideProps = async (context) => {
//     console.log("Hello world",context)

//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json();

//     return {
//         props: {
//             article
//         }
//     }

// }

export const getStaticProps = async (context) => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json();

    return {
        props: {
            article
        }
    }

}

export const getStaticPaths = async  () => {


    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

    const articles = await res.json(); 

    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ( {params: {id: id.toString()}}))
    console.log(paths)

    return {
        paths,
        fallback: false
    }

}

export default article;