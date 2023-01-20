import PostCard from "@/components/PostCard";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

export default function Home({ data }: any) {
  const renderPostList = () => {
    const res = data.docs.map((post: any) => {
      return (
        <PostCard
          key={post.id}
          title={post.title}
          description={post.descriptiom}
        />
      );
    });
    return res;
  };
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Ola, mundo</h1>
      {renderPostList()}
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
