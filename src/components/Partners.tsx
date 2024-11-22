import { useState } from "react";


type PartnersProps = {
  image: string;
  dark_image: string;
  title: string;
}

const PartnersList : PartnersProps[] = [
  {
    image: "/img/logo_creditmutuel.png",
    dark_image:"/img/logo_creditmutuel_sature.png",
    title:"Crédit Mutuel de Oullins",
  },
  {
    image: "/img/logo_efs.png",
    dark_image:"/img/logo_efs_sature.png",
    title:"Établissement Français du Sang",
  },
  {
    image: "/img/logo_fede.png",
    dark_image:"/img/logo_fede_sature.png",
    title:"Fédération Française du Don du Sang Bénévole",
  },
]

function Partner({image, dark_image, title}: PartnersProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section>
      <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="flex flex-col items-center p-6 rounded-lg shadow-md h-full">
        <img src={isHovered ? image : dark_image} alt={title} className="w-auto h-16" />
        <div className="pt-4 text-lg text-center">{title}</div>
      </div>
    </section>
  );
};

export default function Partners() {
  return (
    <div className="py-20">
      <div className="container">
        <h2 className='text-4xl font-bold text-slate-900 dark:text-slate-300'>
          Nos partenaires et nos sponsors
        </h2>
        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PartnersList.map((props, idx) => (
            <Partner key={idx} {...props} />
          ))}
        </div>
      </div>
    </div>
  )
}
