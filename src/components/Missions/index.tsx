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
        Contribuer aux collectes à Lyon, Bron et Villeurbanne en assurant l'accueil, l'orientation des donneurs et la gestion de la collation.
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
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-md">
      <div className="flex h-12 w-12 bg-red-600 items-center justify-center rounded-xl text-white text-2xl">
      {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900">
        {title}
      </h3>
      <p className="mt-2 text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default function Missions(): JSX.Element {
  return (
    <section className='bg-red-100 py-20'>
      <div className="container">
        <h2 className='text-4xl font-bold'> Nos Missions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">  
          {MissionList.map((props, idx) => (
            <Card key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
