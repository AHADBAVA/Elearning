import TrendingCard from "../Components/TrendingCard/TrendingCard";
import Header from "../Components/Header/Header";
import Chatbot from "../Components/ChatBot/Chatbot";

export default function Trending() {
  return (
    <>
      <Header />
      <section className="grid p-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-5 place-items-center w-full">
        <Chatbot/>
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
      </section>
    </>
  );
}
