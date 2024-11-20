import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Participer aux collectes',
    description: (
      <>
        Contribuer aux collectes à Lyon, Bron et Villeurbanne en assurant l'accueil, l'orientation des donneurs et la gestion de la collation.
      </>
    ),
  },
  {
    title: 'Distribuer des flyers',
    description: (
      <>
        Assurer la distribution de tracts promotionnels avant d'importantes collectes événementielles dans le but d'inciter un maximum de personnes à donner leur sang.
      </>
    ),
  },
  {
    title: 'Promouvoir le don du sang',
    description: (
      <>
        Participer à des événements promotionnels tels que la fête de la musique, les journées mondiales des donneurs de sang (JMDS), la foire de Lyon, etc., et sensibiliser son cercle social au don de sang.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div>
      <div className="h-20 bg-blue-400">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageMissions(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
