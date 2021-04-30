import { useRouter } from "next/router"
import Layout from "../layouts/default"

export default function Page({ page }) {
    const router = useRouter()
    const { slug } = router.query

    return (
        <Layout title={ page.title.rendered }>
            <p>Page: { slug }</p>

            <h1>{ page.title.rendered }</h1>

            <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        </Layout>
    )
}

export async function getServerSideProps({ params }) {
    //const res = await fetch( 'https://cibola.voncleaudtwyck.nl/wp-json/wp/v2/pages?slug=' + params.slug )
    const res = await fetch( 'https://www.radishconcepts.com/wp-json/wp/v2/pages?slug=' + params.slug )
    const json = await res.json()

    const page = json[0]

    if ( !page ) {
        return {
            notFound: true
        }
    }

    return {
        props: { page }
    }
}