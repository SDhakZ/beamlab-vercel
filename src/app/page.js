import Hero from "./(routes)/home/hero/hero";
import Offer from "./(routes)/home/offerSection/offer";
import ProjectJourney from "./(routes)/home/projectJourney/projectJourney";

export default function Home() {
  return (
    <>
      <Hero />
      <Offer />
      <ProjectJourney />
    </>
  );
}
