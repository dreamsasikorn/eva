import Nav from '../components/layout/navbar';
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
export default function page({ data }) {
    return (
        <div>
            <Nav></Nav>
        </div>
    );
}


export async function ReportEva005() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/100`);
    const data = await res.json();
    // console.log(res.json());
    return {

        props: {
            data,
        },
    }
}