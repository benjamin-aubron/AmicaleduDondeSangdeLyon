import listCollectes from "../db/listCollectes.json";

type CollecteProps = {
  mois: string;
  date: string;
  type_collecte: string;
  lieu: string;
  heure: string;
  statut: string;
}

function Collecte({date, type_collecte, lieu, heure, statut}: CollecteProps) {
  const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

  const formattedDate = new Date(date.split('/').reverse().join('-')).toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  const [weekDay, day, month] = formattedDate.split(' ');
  const capitalizedDate = `${capitalizeFirstLetter(weekDay)} ${day} ${capitalizeFirstLetter(month)}`;

  return (
    <div className="">
      <div className="flex items-center">
        <div className="h-3 w-3 bg-red-700 dark:bg-red-800 rounded-full"></div>
        <div className={`ml-2 font-medium text-gray-500 dark:text-gray-400 ${statut === 'A Confirmer' && "text-gray-400 dark:text-gray-500"}`}>{capitalizedDate} <span className={`opacity-100 text-gray-400 dark:text-gray-500 font-bold ${statut === 'A Confirmer' ? "inline" : "hidden"}`}>- {statut}</span></div>
      </div>
      <div className="flex">
        <div className="h-[110px] w-[2px] ml-[5px] bg-[#009de0] dark:bg-blue-900"></div>
        <div className={`ml-4 pb-6 text-slate-800 dark:text-gray-300 ${statut === 'A Confirmer' && "text-gray-400 dark:text-gray-500"}`}>
          <div className="font-bold text-2xl">{lieu}</div>
          <div className="font-semibold">{type_collecte}</div>
          <div className="font-semibold">{heure}</div>
        </div>
      </div>
    </div>
  )
}

export default function Collectes() {
  
  const mois = [...new Set(listCollectes.map(el => el.mois))];
  const today = new Date();

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
                {listCollectes.filter(collecte => collecte.mois === mois && new Date(`${collecte.date.split("/")[1]}/${collecte.date.split("/")[0]}/${collecte.date.split("/")[2]}`) > new Date(today.getTime() - 24 * 60 * 60 * 1000)).map((props, idx) => ( 
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
