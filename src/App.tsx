import "./App.css";
import CardAnglais from "./components/cards/CardAnglais";
import CardFrancais from "./components/cards/CardFrancais";
import CardMath from "./components/cards/CardMath";
import CardPhysique from "./components/cards/CardPhysique";
import Hero from "./components/Hero";
import Resultats from "./components/Resultats";

function App() {
  return (
    <>
      <Hero />

      <section className="bg-slate-50 py-8">
        <div className="flex flex-col items-center justify-center gap-1 mb-6">
          <h2 className="text-2xl font-bold">Saisis tes notes par matière</h2>
          <p>
            Remplis les moyennes de tes trois trimestres et tes notes du BEPC
            pour chaque matière
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Les cards de matière */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <CardMath />
            <CardFrancais />
            <CardPhysique />
            <CardAnglais />
          </div>

          <Resultats />
        </div>
      </section>
    </>
  );
}

export default App;
