interface PostCardProps {
  title: string;
  description: string;
}

export default function PostCard({ title, description }: PostCardProps) {
  return (
    <div style={{ height: 200, width: 600, border: "1px red solid" }}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
