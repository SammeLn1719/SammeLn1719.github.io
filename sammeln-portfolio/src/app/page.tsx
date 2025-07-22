import Header from "../components/Header";
import Stack from "../components/Stack";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center min-h-screen p-4 gap-8 bg-background text-foreground">
      <Header />
      <Stack />
      <Experience />
      {/* Здесь будут секции Projects и Experience */}
    </div>
  );
}
