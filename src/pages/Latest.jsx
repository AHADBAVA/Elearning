import Header from "../Components/Header/Header";
import LatestCard from "../Components/LatestCard/LatestCard";
import Chatbot from "../Components/ChatBot/Chatbot";
export default function Latest() {
  return (
    <>
    <Header />
    <section className="grid p-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-5 place-items-center w-full">
    <Chatbot/>
     <LatestCard/>
     <LatestCard/>
     <LatestCard/>
     <LatestCard/>
     <LatestCard/>
     <LatestCard/>
     <LatestCard/>
    </section>
  </>
  );
}
