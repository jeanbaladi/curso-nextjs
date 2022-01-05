import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout from "../../components/layout"
import Title from "../../components/title"


export default function Post({posts}){
    //CLIENT SIDE RENDERING
    // const [posts, setPosts] = React.useState([]);

    // React.useEffect(() => {
    //     const fetchPosts = async () => {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    //         const newPost = await res.json();
    //         setPosts(newPost);
    //     }
    //     fetchPosts();
    // }, []);
    return (
        <Layout>
            {/* <Head>
                <title>Landing page de Post</title>
                <meta name="desciption" content="curso de nextJs de Webtutoriales" />
            </Head> */}
            <Title>post Page</Title>
            <div className="api-res">
                {posts.map((item) => {
                    const {id, title, body} = item;
                    return (
                        <Link href="/post/[id]" as={`/post/${id}`} key={id.toString()}>
                            <div className="card">
                                <a>
                                    <h3>{title}</h3>
                                    <p>{body}</p>
                                    <span>{id}</span>
                                </a>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <style jsx>
                {`
                    .api-res {
                        display: flex;
                        flex-wrap: wrap;
                        width: 85vw;
                        justify-content: center;
                        gap:20px 50px;
                        margin: 50px 0;
                        cursor: pointer;
                    }
                    .card {
                        width: 350px;
                        height: 400px;
                        padding: 0 20px;
                        border: 2px inset #00cffe;
                        border-radius: 10px;
                        transition-duration: 500ms ;
                    }
                    .card:hover {
                        background-color: black;
                        color: white;
                        border: 2px solid #6200fe;
                    }
                `}
            </style>
        </Layout>
        )
}


export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
  
    return {
      props: {
        posts
      }
    }
  }