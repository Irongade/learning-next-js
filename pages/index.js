import Head from 'next/head'
import {server} from "../config/index"
import ArticleList from "../components/ArticleList"
// import styles from '../styles/Home.module.css'

export default function Home({articles}) {
  return (
    <div>
      {/* Using Head directly in component */}
      {/* <Head>
          <title> WebDev News </title>
          <meta name="keywords" content="web development, programming" />
      </Head> */}
      <h1>
        Welcome to Next
      </h1>

      <ArticleList articles={articles} />

    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)

//   const articles = await res.json();

//   return {
//     props: {
//       articles
//     }
//   }
// }

//FETCHing from built in api from next, basically fetching from ourselvbes
// You can do this for the rest.

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)

  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}
