type CollecteProps = {
  date: string;
  type_collecte: string;
  lieu: string;
  heure: string;
}

const CollecteList: CollecteProps[] = [
  {
    date: 'Vendredi 19 Avril',
    type_collecte: 'Collecte Mobile',
    lieu: 'Lyon 4 - Salle de la Ficelle - 65 boulevard des canuts',
    heure: '15h - 19h',
  },
  {
    date: 'Mardi 30 Avril',
    type_collecte: 'Collecte Evènementielle',
    lieu: 'Lyon 7 - LOU Rugby - 351 avenue Jean Jaurès',
    heure: '15h - 19h',
  },
  {
    date: 'Lundi 6 Mai',
    type_collecte: 'Collecte Mobile',
    lieu: 'Lyon 3 - Mairie du 3ème - 215 rue Duguesclin',
    heure: '9h - 13h & 15h - 19h',
  },
]

function Collecte({date, type_collecte, lieu, heure}: CollecteProps) {
  return (
    <div className="">
      <div className="flex items-center">
        <div className="h-3 w-3 bg-red-700 rounded-full"></div>
        <div className="ml-2 font-medium text-gray-500">{date}</div>
      </div>
      <div className="flex ">
        <div className="h-[110px] w-[2px] ml-[5px] bg-[#009de0]"></div>
        <div className="ml-4 pt-1 pb-6">
          <div className="font-bold text-xl">{type_collecte}</div>
          <div className="font-semibold text-slate-800">{lieu}</div>
          <div className="font-semibold text-slate-800">{heure}</div>
        </div>
      </div>
    </div>
  )
}

export default function Collectes() {
  return (
    <section className="py-32 px-6 sm:max-w-2xl sm:mx-auto w-fit">
      <h2 className='text-5xl font-bold text-[#009de0] dark:text-slate-300 pb-8'>
        Nos prochaines collectes
      </h2>
      <div>
        {CollecteList.map((props, idx) => (
          <Collecte key={idx} {...props} />
        ))}
      </div>
    </section>
  )
}
