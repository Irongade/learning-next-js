import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
    return (
        <Head>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <title>{title}</title> 
        </Head>
    )
}

Meta.defaultProps = {
    title: "WebDevs News",
    keywords: "web development, programming",
    description: "Get the latests news in webDev"
}

export default Meta;