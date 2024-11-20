import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageMissions from '@site/src/components/HomepageMissions';


function HomepageHeader() {
  return (
    <header className="flex flex-col bg-red-700 dark:bg-red-900 justify-center h-80 items-center">
      <p className="text-5xl font-medium text-white">Amicale du Don du Sang de Lyon</p>
      <p className='text-gray-50 text-xl'>Rejoingnez notre amicale et venez contribuer à une cause pleine de sens</p>
      <div className='flex items-center'>
        <a href="https://www.helloasso.com/associations/amicale-des-donneurs-de-sang-benevoles-de-lyon-adsbl" target='_blank' className="mx-3 py-2 px-6 bg-red-800 hover:bg-red-50 rounded-md text-white hover:text-slate-900 font-medium">Adhérer</a>
        <a href=" mailto:adsbl69@hotmail.com" className="mx-3 py-2 px-6 bg-red-800 hover:bg-red-50 rounded-md text-white hover:text-slate-900 font-medium border">Contact</a>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Le site de l'Amicale Don du Sang de Lyon">
      <HomepageHeader />
      <main>
        <HomepageMissions />
      </main>
    </Layout>
  );
}
