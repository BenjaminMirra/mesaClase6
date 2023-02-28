import Head from 'next/head'
import React from 'react'

const faqs = ({ data }: any) => {
    return (
        <>
            <Head>
                <title>Preguntas Frecuentes</title>
                <meta name="description" content="Esta es la descripción de las preguntas frecuentes" />
            </Head>
            <h1>
                Preguntas Frecuentes
            </h1>
            <br />
            <div>
                {data.faqs.map((question: any) => {
                    return (
                        <div key={question.id}>
                            <h3>
                                {question.title}
                            </h3>
                            <p>
                                {question.description}
                            </p>
                            <br />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default faqs

export async function getStaticProps() {

    const response = await fetch(`https://my-json-server.typicode.com/DH-Esp-Frontend/ctd-fe3-s2-c6-integracion-terminado/db`);
    const data = await response.json();

    return {
        props: {
            data
        },
    }
}