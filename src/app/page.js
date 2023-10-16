import Alert from "@/Components/Alert";
import Homes from "@/Components/Homes";
import Navbar from "@/Components/Navbar";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Alert />
        <Homes />
      </main>
    </>
  );
}
