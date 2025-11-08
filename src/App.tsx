import { FileDown, Lock, RotateCcw } from "lucide-react";
import "./App.css";
import CardAnglais from "./components/cards/CardAnglais";
import CardFrancais from "./components/cards/CardFrancais";
import CardMath from "./components/cards/CardMath";
import CardPhysique from "./components/cards/CardPhysique";
import Hero from "./components/Hero";
import Moyenne from "./components/Moyenne";
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

          <Moyenne />

          <div className="mt-4 flex items-center justify-center gap-2 mb-6">
            <Lock className="text-green-500" size={15} />
            <span className="text-sm">
              Toutes tes données restent sur ton appareil et ne sont jamais
              envoyées en ligne
            </span>
          </div>

          <div className="flex items-center justify-center">
            <button className="bg-linear-to-r from-orange-500 to-orange-300 text-white flex place-items-center gap-2 shadow-sm hover:opacity-85">
              <FileDown size={20} />
              Télécharger les resultats en PDF
            </button>

            <button className="hover:bg-orange-100 flex gap-2 place-items-center">
              <RotateCcw />
              Réinitialiser toutes les données
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
