import Head from "next/head";

export default function Home({ data }: any) {
  return (
    <>
      <Head>
        <title>HOME</title>
        <meta name="description" content="Esta es la descripción del Home" />
      </Head>
      <h1>Inicio</h1>
      <div>
        {data.results.map((user: any) => {
          return (
            <li key={user.id.value}>
              {user.name.title} {user.name.first} {user.name.last}
            </li>
          )
        })}
      </div>
    </>
  )
}

export async function getServerSideProps(context: any) {

  const res = await fetch("https://randomuser.me/api/?results=10");
  const data = await res.json();

  return {
    props: { data },
  }
}