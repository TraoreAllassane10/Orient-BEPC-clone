import { FileDown, Lock, RotateCcw } from "lucide-react";
import "./App.css";
import CardAnglais from "./components/cards/CardAnglais";
import CardFrancais from "./components/cards/CardFrancais";
import CardMath from "./components/cards/CardMath";
import CardPhysique from "./components/cards/CardPhysique";
import Hero from "./components/Hero";
import Moyenne from "./components/Moyenne";
import Resultats from "./components/Resultats";
import { useEffect, useState } from "react";

interface State {
  t1: number | null;
  t2: number | null;
  t3: number | null;
  bepc: number | null;
  oral?: number | null;
}

function App() {
  const [math, setMath] = useState<State>({
    t1: null,
    t2: null,
    t3: null,
    bepc: null,
  });

  const [francais, setFrancais] = useState<State>({
    t1: null,
    t2: null,
    t3: null,
    bepc: null,
  });

  const [physique, setPhysique] = useState<State>({
    t1: null,
    t2: null,
    t3: null,
    bepc: null,
  });

  const [anglais, setAnglais] = useState<State>({
    t1: null,
    t2: null,
    t3: null,
    bepc: null,
    oral: null,
  });

  const [moyenneMath, setMoyenneMath] = useState();
  const [moyenneFrancais, setMoyeenneFrancais] = useState();
  const [moyennePhysique, setMoyennePhysique] = useState();
  const [moyenneAnglais, setMoyenneAnglais] = useState();

  const [moyenneOrientation, setMoyenneOrientation] = useState();

  // Fonction de calcule de moyenne anulle
  const calculeMoyenneAnnulle = (t1: number, t2: number, t3: number) => {
    return (t1 + t2 * 2 + t3 * 2) / 5;
  };

  const calculeMoyenne = () => {
    // Calcule des moyennes annuelles
    const moyenneAnnulleMath = calculeMoyenneAnnulle(
      Number(math.t1),
      Number(math.t2),
      Number(math.t3)
    );
    const moyenneAnnulleFrancais = calculeMoyenneAnnulle(
      Number(francais.t1),
      Number(francais.t2),
      Number(francais.t3)
    );
    const moyenneAnnullePhysique = calculeMoyenneAnnulle(
      Number(physique.t1),
      Number(physique.t2),
      Number(physique.t3)
    );
    const moyenneAnnulleAnglais = calculeMoyenneAnnulle(
      Number(anglais.t1),
      Number(anglais.t2),
      Number(anglais.t3)
    );

    setMoyenneMath(moyenneAnnulleMath);
    setMoyeenneFrancais(moyenneAnnulleFrancais);
    setMoyennePhysique(moyenneAnnullePhysique);
    setMoyenneAnglais(moyenneAnnulleAnglais);

    // Les totaux : (moyenne annuelle + bepc) * 2
    const totalMath = 2 * (moyenneAnnulleMath + Number(math.bepc));
    const totalFrancais = 2 * (moyenneAnnulleFrancais + Number(francais.bepc));
    const totalPhysique = moyenneAnnullePhysique + Number(physique.bepc);
    const totalAnglais =
      moyenneAnnulleAnglais + (Number(anglais.bepc) + Number(anglais.oral)) / 2;

    // Total general
    const totalGeneral =
      totalMath + totalFrancais + totalPhysique + totalAnglais;

    // Calcule de moyenne d'orientation
    const moyenne = totalGeneral / 12;

    setMoyenneOrientation(moyenne);

    console.log(moyenne);
  };

  useEffect(() => {
    const verification =
      math.t1 !== null &&
      math.t2 !== null &&
      math.t3 !== null &&
      math.bepc !== null &&
      francais.t1 !== null &&
      francais.t2 !== null &&
      francais.t3 !== null &&
      francais.bepc !== null &&
      physique.t1 !== null &&
      physique.t2 !== null &&
      physique.t3 !== null &&
      physique.bepc !== null &&
      anglais.t1 !== null &&
      anglais.t2 !== null &&
      anglais.t3 !== null &&
      anglais.bepc !== null;

    if (verification) {
      calculeMoyenne();
    }
  }, [math, physique, francais, anglais]);

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
            <CardMath data={math} setData={setMath} />
            <CardFrancais data={francais} setData={setFrancais} />
            <CardPhysique data={physique} setData={setPhysique} />
            <CardAnglais data={anglais} setData={setAnglais} />
          </div>

          <Resultats
            moyenneMath={moyenneMath}
            moyenneFrancais={moyenneFrancais}
            moyennePhysique={moyennePhysique}
            moyenneAnglais={moyenneAnglais}
            moyenneOrientation={moyenneOrientation}
          />

          <Moyenne moyenneOrientation={moyenneOrientation} />

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
