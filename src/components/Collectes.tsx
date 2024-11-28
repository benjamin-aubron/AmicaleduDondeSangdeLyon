import futuresCollectes from "../db/futuresCollectes.json";

type CollecteProps = {
  mois: string;
  date: string;
  type_collecte: string;
  lieu: string;
  heure: string;
}

function Collecte({mois, date, type_collecte, lieu, heure}: CollecteProps) {
  return (
    <div className="">
      <div className="flex items-center">
        <div className="h-3 w-3 bg-red-700 dark:bg-red-800 rounded-full"></div>
        <div className="ml-2 font-medium text-gray-500">{date}</div>
      </div>
      <div className="flex ">
        <div className="h-[110px] w-[2px] ml-[5px] bg-[#009de0] dark:bg-blue-900"></div>
        <div className="ml-4 pb-6">
          <div className="font-bold text-2xl">{lieu}</div>
          <div className="font-semibold text-slate-800 dark:text-gray-300">{type_collecte}</div>
          <div className="font-semibold text-slate-800 dark:text-gray-300">{heure}</div>
        </div>
      </div>
    </div>
  )
}

export default function Collectes() {
  
  const mois = [...new Set(futuresCollectes.map(el => el.mois))];

  return (
    <section className="py-20 md:py-32 px-6">
      <div className="sm:max-w-2xl sm:mx-auto w-fit">
        <h2 className='text-3xl md:text-5xl font-bold text-[#009de0] dark:text-slate-300 pb-8'>
          Nos prochaines collectes
        </h2>
        <div>
          {mois.map((mois, idx) => (
            <div key={idx} className='pb-4'>
              <h3 className=" mb-1 text-2xl font-semibold text-gray-900 dark:text-slate-200">{mois}</h3>
              <div className="">
                {futuresCollectes.filter(collecte => collecte.mois === mois).map((props, idx) => (
                  <Collecte key={idx} {...props} />
                ))}
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  )
}
