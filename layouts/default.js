import Link from "next/link"
import Head from "next/head"

export default function Layout({ children, title }) {
    return (
        <>
            <Head>
                <title>{ title ? title + ' - Von Cleaudtwyck' : 'Von Cleaudtwyck' }</title>
                <meta charSet="utf-8" />
            </Head>

            { children }
        </>
    )
}