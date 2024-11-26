import { useState } from "react";


type PartnersProps = {
  image: string;
  title: string;
}

const PartnersList : PartnersProps[] = [
  {
    image: "/img/logo_creditmutuel.png",
    title:"Crédit Mutuel de Oullins",
  },
  {
    image: "/img/logo_efs.png",
    title:"Établissement Français du Sang",
  },
  {
    image: "/img/logo_fede.png",
    title:"Fédération Française du Don du Sang Bénévole",
  },
]

function Partner({image, title}: PartnersProps) {


  return (
    <section>
      <div className="flex flex-col items-center p-6 rounded-lg h-full">
        <img src={image} alt={title} className="w-auto h-16" />
        <div className="pt-4 text-lg text-center">{title}</div>
      </div>
    </section>
  );
};

export default function Partners() {
  return (
    <div className="py-20 md:py-32">
      <div className="container">
        <h2 className='text-3xl md:text-5xl text-center font-bold text-[#009de0] dark:text-slate-300 pb-4'>
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
