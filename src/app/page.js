import Hero from "./(routes)/home/hero/hero";
import Offer from "./(routes)/home/offerSection/offer";
import ProjectJourney from "./(routes)/home/projectJourney/projectJourney";
import Home from "@/app/(routes)/home/home";

const hcaptcha_site_key = process.env.HCAPTCHA_SITE_KEY;

export default function page() {
  return (
    <>
      <Home hcaptcha_site_key={hcaptcha_site_key} />
    </>
  );
}
