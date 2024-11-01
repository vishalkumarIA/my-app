import data from "./Data/intro.json";

export default function IntroCompWithHead() {
  const page = data.pages.find((p) => p.id === 1);

  return (
    <div className="container">
      <div className="introWrapp">
        <h1>{page.title}</h1>
        <p>{page.description}</p>
      </div>
    </div>
  );
}
