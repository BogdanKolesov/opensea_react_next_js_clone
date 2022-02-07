import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Collection() {
    const router = useRouter()

    return (
        <Link href='/'>
            <h2>{router.query.collectionId}</h2>
        </Link>
    );
}
