import Head from "next/head";
import Layout from "../components/layout";
import Title from "../components/title";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Aprendiendo nextJs</title>
                <meta name="desciption" content="curso de nextJs de Webtutoriales" />
            </Head>
            <Title>Home Page</Title>
            <p>hola mundo</p>
            <style jsx>
                {`
                    p {
                        color: darkgreen;
                        font-size: 2rem;
                    } 
                    p:hover {
                        color:darkred;
                    }
                `}
            </style>
        </Layout>
    )
}