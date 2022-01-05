import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect }from "react";
// import { useEffect } from "react";
import Layout from "../../components/layout"
import Title from "../../components/title"

export default function Users( {users}){


    return (
        <Layout>
            <Head>
                <title>Landing page de User</title>
                <meta name="desciption" content="curso de nextJs de Webtutoriales" />
            </Head>
            <Title>users</Title>
            <div className="grid">
                {users.map(user =>{
                    return (
                        <Link href={'/user/[id]'} as={`/user/${user.id}`} key={user.id}>
                            <a className="card" id="cardId">
                                <h3>User</h3>
                                <p>Name= {user.name}</p>
                                <p>Email= {user.email}</p>
                            </a>
                        </Link>
                    )
                })}
                <style jsx>
                {`
                    .grid {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    max-width: 800px;
                    margin-top: 3rem;
                    width: 100vw;
                    overflow: hidden;
                    }
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
                    // .card:nth-child(odd){
                    //     transform: translateX(-48vw);
                    // }
                    // .card:nth-child(even){
                    //     transform: translateX(48vw);
                    // }
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
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return {
        props:{
            users
        }
    }
}