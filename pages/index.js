import Head from 'next/head';
import Header from '../components/Header';
import {getSession} from "next-auth/client";
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';

export default function Home({session}) {
  if (!session) return <Login />

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      <main className="flex">
        {/* SideBar */}
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widgets */}
        <Widgets />

      </main>
      
    </div>
  )
}

export async function getServerSideProps(context){
  //Get the user
  const session = await getSession(context);

  return {
    props: {
      session,
    }
  }
};
