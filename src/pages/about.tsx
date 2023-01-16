import { Inter } from "@next/font/google";

export default function About({ data }: any) {
  console.log(data);
  return (
    <main>
      <h1>Ola, mundo</h1>
    </main>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://p01--devxp--devxp--f1f1-2x5g.code.run/api/posts/"
  );
  const data = await res.json();

  return { props: { data } };
}
