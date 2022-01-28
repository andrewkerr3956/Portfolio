import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Sidebar from './sidebar'
import { useState, useEffect } from 'react'

export default function Layout({ children }) {
    // When the page is loaded, determine if their is a user logged in. If not, display the login and register buttons.
    const [userId, setUserId] = useState(null);
    useEffect(() => {
        const fetchSession = async () => {
            if (sessionStorage.getItem("userid")) {
                document.getElementById("displayButtons").style = "display: none;";
                document.getElementById("titlePositioner").style = "margin-top: -20px;";
                document.getElementById("displayUsername").innerHTML = `Welcome, <strong>${sessionStorage.getItem("username")}</strong>`;
                document.getElementById("displayPoints").innerText = `${sessionStorage.getItem("points")} points`;
                document.getElementById("displayLogout").style = "display: block;";
                setUserId(sessionStorage.getItem("userid"));
            }
        }
        fetchSession();
    }, []);
    return (
        <div>
            <Head>
                <title>Answers Galore</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.headerContainer}>
                <h1 className={styles.title}>Answers Galore</h1>
                <div id="titlePositioner" style={{ marginTop: "20px" }}>
                    <Link href={`/profile?id=${userId}`} passHref><div id="displayUsername"></div></Link>
                    <span id="displayPoints"></span>
                    <div id="displayLogout" style={{ display: "none" }}>
                        <Link href={'/logout'} passHref><button style={{backgroundColor: 'palevioletred'}}>Logout</button></Link></div>
                    <div id="displayButtons">
                        <Link href={'/login'} passHref><button style={{backgroundColor: 'lightblue'}}>Login</button></Link>
                        <Link href={'/register'} passHref><button style={{backgroundColor: 'lightgreen'}}>Register</button></Link>
                    </div>
                </div>
            </header>
            <main className={styles.container}>
                {children}
            </main>
        </div>
    )
}