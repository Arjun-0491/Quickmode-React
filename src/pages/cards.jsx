import { useEffect, useState } from "react";
import axios from "axios";

function FoodCards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get("http://localhost:3000/allcards");
        setCards(res.data.data); // 👈 matches backend { data: [...] }
      } catch (err) {
        setError(err.response?.data?.message || "Server error");
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
   {cards.map((item) => (
  <h1 key={item._id}>{item.name}</h1>
))}

    </div>
  );
}

export default FoodCards;

