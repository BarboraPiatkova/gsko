interface CardProps {
  heading: string;
  content: string;
}

export default function Card({ heading, content }: CardProps) {
  return (
    <div>
      <h1>{heading}</h1>
      <p>{content}</p>
    </div>
  );
}