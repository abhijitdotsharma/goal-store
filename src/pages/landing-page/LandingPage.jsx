import { Categories, HeroSection, NavigationTop, NewArrival } from "../../components";
import "./landing-page.css";

export default function LandingPage() {
  return (
    <div>
      <NavigationTop />
      <HeroSection />
      <Categories />
      <NewArrival />
    </div>
  )
}