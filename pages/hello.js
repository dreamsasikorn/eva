import Nav from '../components/layout/navbar'

function Hello({ title }) {
    return (
        <>
            <Nav></Nav>
            <p className="text-black">{title}</p>
        </>
    )

}

export async function getServerSideProps(context) {
    return {
        props: { title: 'This is title from getServerSideProps' },
    }
}

export default Hello
