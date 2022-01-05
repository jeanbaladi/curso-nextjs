import Link from "next/link";

export default function Navbar(){

    return (
        <nav>
            <Link href='/'>
                <a>Home</a>
            </Link> <br />
            <Link href="/user">
                <a>User</a>
            </Link><br />
            <Link href="/user/[id]" as={`/user/${5}`}>
                <a>User, ID: 5</a>
            </Link><br />
            <Link href="/post">
                <a>Post</a>
            </Link><br/>
            <Link href="/post/[id]" as={`/post/${"Jean"}`}>
                <a>Post, ID: Jean</a>
            </Link>
            <main>Main fuera del scoped de Layout</main>
            <style jsx>
                {`
                    nav {
                        padding-top: 10px;
                    }
                    a {
                        padding: 0 10px;
                    }
                `}
            </style>
        </nav>
    )
}