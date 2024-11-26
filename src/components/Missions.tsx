import { MdOutlineWaterDrop } from "react-icons/md";
import { LuMenuSquare } from "react-icons/lu";
import { BsMegaphone } from "react-icons/bs";


type CardProps = {
  icon?: JSX.Element;
  title: string;
  description: JSX.Element;
};

const MissionList: CardProps[] = [
  {
    icon: <MdOutlineWaterDrop />,
    title: 'Participer aux collectes',
    description: (
      <>
        Contribuer aux collectes mobiles à <b>Lyon</b>, <b>Bron</b> et <b>Villeurbanne</b> en assurant l'accueil, l'orientation des donneurs et la gestion de la collation.
      </>
    ),
  },
  {
    icon: <LuMenuSquare />,
    title: 'Distribuer des flyers',
    description: (
      <>
        Assurer la distribution de tracts promotionnels avant d'importantes collectes événementielles dans le but d'inciter un maximum de personnes à donner leur sang.
      </>
    ),
  },
  {
    icon: <BsMegaphone />,
    title: 'Promouvoir le don du sang',
    description: (
      <>
        Participer à des événements promotionnels tels que la fête de la musique, les journées mondiales des donneurs de sang (JMDS), la foire de Lyon, etc., et sensibiliser son cercle social au don de sang.
      </>
    ),
  },
];


function Card({ icon, title, description }: CardProps){
  return (
    <div className="flex flex-col p-6 bg-white dark:bg-[#242526] rounded-2xl shadow-md">
      <div className="flex h-12 w-12 bg-red-600 dark:bg-red-900 items-center justify-center rounded-xl text-white dark:text-slate-300 text-2xl">
      {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-slate-200">
        {title}
      </h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default function Missions(): JSX.Element {
  return (
    <section className='bg-blue-100 dark:bg-[#1b1b1d] py-20 md:py-32'>
      <div className="container">
        <h2 className='text-3xl md:text-5xl text-center font-bold text-[#009de0] dark:text-slate-300 pb-8'> Nos Missions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">  
          {MissionList.map((props, idx) => (
            <Card key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
