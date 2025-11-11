import { CircleAlert, CircleCheckBig } from "lucide-react";

interface MoyenneProps {
  moyenneOrientation: number | undefined;
}

const Moyenne = ({ moyenneOrientation } : MoyenneProps) => {

  return (
    <div>
      {moyenneOrientation !== undefined && (
        <div>
          {moyenneOrientation >= 10 ? (
            // Moyennne en cas de succès
            <div className="max-w-4xl mx-auto bg-linear-to-r from-green-400/10 to-green-600/10 p-4 rounded-2xl shadow-sm">
              <div className="flex flex-col gap-4 items-center py-8">
                <div className="w-12 h-12 bg-green-500 flex items-center justify-center rounded-full">
                  <CircleCheckBig className="text-white" />
                </div>

                <h2 className="font-bold text-xl">
                  Moyenne d'orientation : {moyenneOrientation}/20
                </h2>

                <div className="bg-green-500 flex gap-2 text-white p-4 rounded-4xl">
                  <CircleCheckBig />
                  <span className="font-medium">Orientation possible</span>
                </div>
              </div>

              <div className="bg-green-50 p-4 text-sm text-center rounded-md">
                <span className="text-green-700 font-medium">
                  {" "}
                  Félicitations !
                </span>{" "}
                Avec une moyenne de 10.92/20, tu remplis les conditions
                d'orientation vers le second cycle selon les critères de la DOB.
              </div>
            </div>
          ) : (
            // Moyenne en cas d'echec
            <div className="max-w-4xl mx-auto bg-linear-to-r from-red-400/15 to-red-600/15 p-4 rounded-2xl shadow-sm">
              <div className="flex flex-col gap-4 items-center py-8">
                <div className="w-12 h-12 bg-red-500 flex items-center justify-center rounded-full">
                  <CircleAlert className="text-white" />
                </div>

                <h2 className="font-bold text-xl">
                  Moyenne d'orientation : {moyenneOrientation}/20
                </h2>

                <div className="bg-red-500 flex gap-2 text-white p-4 rounded-4xl">
                  <CircleAlert />
                  <span className="font-medium">Orientation non possible</span>
                </div>
              </div>

              <div className="bg-red-50 p-4 text-sm text-center rounded-md">
                <span className="text-red-700 font-medium">
                  {" "}
                  Moyenne insuffisante.{" "}
                </span>{" "}
                Il faut au minimum 10/20 de moyenne générale pour être orienté
                vers le second cycle en Côte d'Ivoire.
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Moyenne;
