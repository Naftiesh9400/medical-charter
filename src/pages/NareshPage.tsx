import NareshHeader from "@/components/layout/NareshHeader";
import NareshSection from "@/components/sections/NareshSection";

const NareshPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <NareshHeader />
      <main className="pt-[75px]">
        <NareshSection />
      </main>
    </div>
  );
};

export default NareshPage;