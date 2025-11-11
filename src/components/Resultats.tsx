import { Goal, Trophy } from "lucide-react";

interface ResultatProps {
  moyenneMath: number | undefined;
  moyenneFrancais: number | undefined;
  moyennePhysique: number | undefined;
  moyenneAnglais: number | undefined;
  moyenneOrientation: number | undefined;
}

const Resultats = ({
  moyenneMath,
  moyenneFrancais,
  moyennePhysique,
  moyenneAnglais,
  moyenneOrientation,
} : ResultatProps) => {
  return (
    <div className="mb-6">
      {/* Titre */}
      <div className="flex flex-col items-center justify-center gap-1 mb-6">
        <h2 className="text-2xl font-bold">Tes résultats</h2>
        <p>Calcul automatique selon la méthode officielle de la DOB</p>
      </div>

      {moyenneOrientation !== undefined && moyenneOrientation > 0 ? (
        //  Card de Resultats
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex gap-2 mb-6">
            <Trophy className="text-orange-400" />
            <h2 className="font-semibold">Moyennes par matière</h2>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-100 p-4 flex justify-between rounded-md font-medium">
              <span>Mathématiques</span>
              <span className={`${moyenneMath !== undefined && moyenneMath >= 10 ? "text-green-500" : "text-red-500"}  "font-bold"`} >{moyenneMath}/20</span>
            </div>

            <div className="bg-gray-100 p-4 flex justify-between rounded-md font-medium">
              <span>Français </span>
              <span className={`${moyenneFrancais !== undefined && moyenneFrancais >= 10 ? "text-green-500" : "text-red-500"}  "font-bold"`}>
                {moyenneFrancais}/20
              </span>
            </div>

            <div className="bg-gray-100 p-4 flex justify-between rounded-md font-medium">
              <span>Sciences Physiques</span>
              <span className={`${moyennePhysique !== undefined && moyennePhysique >= 10 ? "text-green-500" : "text-red-500"}  "font-bold"`}>
                {moyennePhysique}/20
              </span>
            </div>

            <div className="bg-gray-100 p-4 flex justify-between rounded-md font-medium">
              <span>Anglais</span>
              <span className={`${moyenneAnglais !== undefined && moyenneAnglais >= 10 ? "text-green-500" : "text-red-500"}  "font-bold"`}>
                {moyenneAnglais}/20
              </span>
            </div>
          </div>
        </div>
      ) : (
        // Card d'avant resultat
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex flex-col items-center justify-center gap-2 mb-6">
            <Goal size={50} className="text-gray-400" />
            <h2 className="font-medium text-lg text-gray-400">
              Remplis toutes les matières
            </h2>
            <p className="text-sm text-gray-400">
              Tes résultats apparaîtront ici une fois que tu auras saisi toutes
              tes notes.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resultats;
