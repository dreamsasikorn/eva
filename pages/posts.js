import Nav from '../components/layout/navbar'
import Image from 'next/image'
import React, { Fragment } from 'react';
export default function Posts({ posts }) {
    return (
        <div className='container'>
            <Nav></Nav>

            <h2>products</h2>
            {/* <ul> */}

            {posts.map(post =>
                <Image src={post.image} alt='' key={post.id} width={100} height={100}></Image>
                // <div className='card' style={{ width: 18 + `rem` }}></div>
                // <li className="text-black" key={post.id}>{post.image} & rating : & {post.rating.rate}</li>
            )}
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://fakestoreapi.com/products')
    const response = await res.json()

    return {
        props: {
            posts: response
        },
        // revalidate: 5,
    }
}

// export default Posts