import Homepage from "@/screens/Homepage";
import MobileHomepage from "@/screens/MobileHomepage";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="md:hidden">
        <MobileHomepage />
      </div>
      <div className="hidden md:block">
        <Homepage />
      </div>
    </div>
  );
}
