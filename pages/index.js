import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Title from "../components/title";

export default function Home() {
    return (
        <Layout>
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