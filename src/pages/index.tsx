import PostCard from "@/components/PostCard";

export default function Home({ data }: any) {
  const renderPostList = () => {
    const res = data.docs.map((post: any) => {
      return (
        <PostCard
          key={post.id}
          title={post.title}
          author={post.author.name}
          description={post.content[0].children[0].text}
        />
      );
    });
    return res;
  };
  return (
    <div className="md:container md:mx-auto">
      <h1 className="text-3xl font-bold underline">Ola, mundo</h1>
      <div className="flex flex-col items-center ...">{renderPostList()}</div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://p01--devxp--devxp--f1f1-2x5g.code.run/api/posts/"
  );
  const data = await res.json();

  return { props: { data } };
}
