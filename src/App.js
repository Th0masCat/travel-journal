import Navbar from "./navbar";
import Card from "./card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card {...item} />;
  });

  return (
    <div>
      <Navbar />
      <section className="card-list">{cards}</section>
    </div>
  );
}

export default App;
