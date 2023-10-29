import { HeroSection } from "@/components/hero-section";
import { LatestWorkSection } from "@/components/latest-work-section";
import { ReferencesSection } from "@/components/references-section";

export default function Home() {
	return (
		<>
			<HeroSection />
			<ReferencesSection />
			{/* <AboutMeSection /> */}
			<LatestWorkSection />
		</>
	);
}
