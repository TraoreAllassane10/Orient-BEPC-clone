import { Heart } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-1 py-6 items-center justify-center">
      <h2 className="text-3xl font-bold">
        <span className="text-orange-500">Orient</span>
        <span className="text-green-500">'BEPC</span>
      </h2>
      <p className="text-sm">Calculateur de moyenne d'orientation en seconde</p>

      <div className="max-w-4xl mx-auto bg-linear-to-r from-orange-400/10 to-green-400/10 p-4 mt-6 rounded-2xl space-y-1 shadow-sm border border-orange-300/10">
        <div className="flex place-items-center gap-2">
          <Heart size={20} className="text-orange-500" />
          <h4 className="font-bold text-sm">Important</h4>
        </div>
        <p className="text-sm ml-7 w-[90%]">
          Cet outil respecte la méthode officielle de calcul de moyenne
          d'orientation de la <span className="text-orange-500 font-bold">Direction de l'Orientation et des Bourses (DOB)</span>.
          Il a été conçu pour aider les élèves à se préparer en toute autonomie.
        </p>
      </div>
    </div>
  );
};

export default Hero;
