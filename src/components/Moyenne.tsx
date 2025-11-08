import { CircleCheckBig } from "lucide-react";

const Moyenne = () => {
  return (
    <div className="max-w-4xl mx-auto bg-linear-to-r from-green-400/10 to-green-600/10 p-4 rounded-2xl shadow-sm">
      {/* Entête */}
      <div className="flex flex-col gap-4 items-center py-8">
        <div className="w-12 h-12 bg-green-500 flex items-center justify-center rounded-full">
          <CircleCheckBig className="text-white" />
        </div>

        <h2 className="font-bold text-xl">Moyenne d'orientation : 10.92/20</h2>

        <div className="bg-green-500 flex gap-2 text-white p-4 rounded-4xl">
          <CircleCheckBig />
          <span className="font-medium">Orientation possible</span>
        </div>
      </div>

      <div className="bg-green-50 p-4 text-sm text-center">
        <span className="text-green-700 font-medium"> Félicitations !</span>{" "}
        Avec une moyenne de 10.92/20, tu remplis les conditions d'orientation
        vers le second cycle selon les critères de la DOB.
      </div>
    </div>
  );
};

export default Moyenne;
