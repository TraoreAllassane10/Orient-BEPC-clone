import { BookText } from "lucide-react"


const CardFrancais = () => {
  return (
     <div className="bg-white p-6 rounded-lg shadow-sm">
      {/* Titre */}
      <div className="flex place-items-center gap-2 mb-6">
        <div className="bg-green-500 p-2 rounded-md">
          <BookText className="text-white" />
        </div>
        <h4 className="font-bold"> Français </h4>
      </div>

      <div className="grid grid-cols-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="font-medium">1er Trimestre</label>
          <input
            type="number"
            className="w-[80%] border border-slate-300 rounded-md p-3 outline-orange-300 text-center"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="" className="font-medium">2eme Trimestre</label>
          <input
            type="number"
            className="w-[80%] border border-slate-300 rounded-md p-3 outline-orange-300 text-center"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="" className="font-medium">3eme Trimestre</label>
          <input
            type="number"
            className="w-[80%] border border-slate-300 rounded-md p-3 outline-orange-300 text-center"
          />
        </div>
      </div>

      <hr className="border border-slate-100 my-4" />

      <div className="">
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="font-medium">Note BEPC</label>
          <input
            type="number"
            className=" border border-slate-300 rounded-md p-3 outline-orange-300 text-center"
          />
        </div>
      </div>
    </div>
  )
}

export default CardFrancais