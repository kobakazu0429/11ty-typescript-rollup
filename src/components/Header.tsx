interface Props {
  title: string;
}

const data = "HELLO".split("");

export const Header = ({ title }: Props) => {
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {data.map((c) => (
          <li>{c}</li>
        ))}
      </ul>
    </>
  );
};
