import Head from "next/head";
import { useRouter } from "next/router"
import Layout from "../../components/layout";
import Title from "../../components/title";

export default function User( {user} ){

    const router = useRouter();
    console.log(router);
    if (router.isFallback) {
        return <div>Cargando...</div>
    }
    console.log(router);
    return (
        <Layout>
            <Head>
                <title>User #{user.id}</title>
                <meta name="desciption" content="curso de nextJs de Webtutoriales" />
            </Head>
            <Title>user ID {user.id}</Title>
            <div className="card">
                <h3>Name : {user.name}</h3>
                <p>Email : {user.email}</p>
                <p>phone : {user.phone}</p>
                <p>website : {user.website}</p>
            </div>
            <style jsx>
                {`
                .card {
                    margin: 1rem;
                    flex-basis: 45%;
                    padding: 1.5rem;
                    text-align: left;
                    color: inherit;
                    text-decoration: none;
                    border: 1px solid #eaeaea;
                    border-radius: 10px;
                    transition: color 0.15s ease, border-color 0.15s ease;
                }
        
                .card:hover,
                .card:focus,
                .card:active {
                    color: #0070f3;
                    border-color: #0070f3;
                }
        
                .card h3 {
                    margin: 0 0 1rem 0;
                    font-size: 1.5rem;
                }
        
                .card p {
                    margin: 0;
                    font-size: 1.25rem;
                    line-height: 1.5;
                }
                `}
            </style>
        </Layout>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const users = await res.json();

    // const paths = [
    //     { params: { id: '1' } },
    //     { params: { id: '2' } }
    // ];

    const paths = users.map(user => {
        return {
            params: {id : `${user.id}`}
        }
    });
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps( {params} ){
    // context.params
    // context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json(); 

    return {
        props: {
            user
        }
    }
}