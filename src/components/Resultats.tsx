import { Trophy } from "lucide-react";

const Resultats = () => {
  return (
    <div>
      {/* Titre */}
      <div className="flex flex-col items-center justify-center gap-1 mb-6">
        <h2 className="text-2xl font-bold">Tes résultats</h2>
        <p>
          Calcul automatique selon la méthode officielle de la DOB
        </p>
      </div>

      {/* card de Resultats */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-md">
        <div className="flex gap-2 mb-6">
            <Trophy className="text-orange-400" />
            <h2 className="font-semibold">Moyennes par matière</h2>
        </div>

        <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-100 p-4 flex justify-between rounded-md font-medium">
                <span>Mathématiques</span>
                <span className="text-green-500 font-bold">14.50/20</span>
            </div>

             <div className="bg-gray-100 p-4 flex justify-between rounded-md font-medium">
                <span>Français </span>
                <span className="text-green-500 font-bold">12.56/20</span>
            </div>

             <div className="bg-gray-100 p-4 flex justify-between rounded-md font-medium">
                <span>Sciences Physiques</span>
                <span className="text-red-500 font-bold">09.50/20</span>
            </div>

             <div className="bg-gray-100 p-4 flex justify-between rounded-md font-medium">
                <span>Anglais</span>
                <span className="text-red-500 font-bold">14.50/20</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Resultats;
