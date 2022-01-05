import Head from "next/head";
import Layout from "../../components/layout";
import Title from "../../components/title";

export default function post1( {post}) {
    const {id, title, body} = post;
    // const router = useRouter();
    return (
        <Layout>
            <Head>
                <title>Post #{post.id}</title>
                <meta name="desciption" content="curso de nextJs de Webtutoriales" />
            </Head>
            <Title>post details</Title>
            <div className="card">
                <h2>{title}</h2>
                <p>{body}</p>
                <span>{id}</span>
            </div>
            <style jsx>
                {`
                    .card {
                        width: 350px;
                        height: 400px;
                        padding: 0 20px;
                        border: 2px inset #00cffe;
                        border-radius: 10px;
                        transition-duration: 500ms ;
                        margin: 20px auto;
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

export async function getServerSideProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await res.json();
    return {
      props: {
        post
      }
    }
  }

