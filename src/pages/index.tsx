import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { ToastContainer } from 'react-toastify';
import Missions from '@site/src/components/Missions';
import Collectes from '../components/Collectes';
import Association from '../components/Association';
import Partners from '../components/Partners';
import ContactForm from '../components/ContactForm';


function HomepageHeader() {
  return (
    <header className="flex flex-col bg-blue-300 dark:bg-red-900 justify-center h-[480px] items-center px-6">
      <p className="text-4xl lg:text-6xl text-center font-bold text-red-500">Amicale du Don du Sang de Lyon</p>
      <p className='text-red-950 text-center font-medium text-xl'>Rejoingnez notre amicale et venez contribuer à une cause pleine de sens</p>
      <div className='flex items-center'>
        <a href="https://www.helloasso.com/associations/amicale-des-donneurs-de-sang-benevoles-de-lyon-adsbl" target='_blank' className="mx-3 py-2 px-6 bg-red-700 hover:bg-red-500 rounded-md text-white hover:text-slate-100 hover:no-underline font-medium">Adhérer</a>
        <a href=" mailto:adsbl69@hotmail.com" className="mx-3 py-2 px-6 bg-red-700 hover:bg-red-500 rounded-md text-white hover:text-slate-100 hover:no-underline font-medium">Contact</a>
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
      <ToastContainer
position="top-right"
autoClose={2500}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
      />
      <main>
        <Missions />
        <Collectes />
        <Association />
        <Partners />
        <ContactForm />
      </main>
    </Layout>
  );
}
