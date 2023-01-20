interface PostCardProps {
  title: string;
  description: string;
  author: string;
}

export default function PostCard({
  title,
  description,
  author,
}: PostCardProps) {
  return (
    <div style={{ height: 200, width: 600, border: "1px red solid" }}>
      <h4>{title}</h4>
      <p>{author}</p>
      <p className="truncate ...">{description}</p>
    </div>
  );
}
