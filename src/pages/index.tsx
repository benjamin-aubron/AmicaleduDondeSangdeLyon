import { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { ToastContainer } from 'react-toastify';
import Missions from '@site/src/components/Missions';
import Collectes from '../components/Collectes';
import Association from '../components/Association';
import Partners from '../components/Partners';
import ContactForm from '../components/ContactForm';

function Modal() {
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center">
      {/* Fond semi-transparent */}
      <div className="absolute inset-0 bg-black/60"/>

      {/* Card */}
      <div className="relative z-10 bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-lg w-full mx-4 p-8">
        <h2 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-4">Association en sommeil</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          L'association est en sommeil. Nous ne serons pas en mesure de vous répondre.
        </p>
      </div>
    </div>
  );
}

function HomepageHeader() {
  return (
    <header className="flex flex-col bg-blue-300 dark:bg-red-900 justify-center h-[480px] items-center px-6">
      <h1 className="text-4xl lg:text-6xl text-center font-bold text-red-700 dark:text-gray-200">Amicale du Don de Sang de Lyon</h1>
      <p className='text-red-950 dark:text-gray-200 text-center font-medium text-xl'>Rejoingnez notre amicale et venez contribuer à une cause pleine de sens</p>
      <div className='flex items-center'>
        <a href="https://www.helloasso.com/associations/amicale-des-donneurs-de-sang-benevoles-de-lyon-adsbl" target='_blank' className="mx-3 py-2 px-6 bg-red-700 hover:bg-red-500 rounded-md text-white hover:text-slate-100 hover:no-underline font-medium">Adhérer</a>
        <div className="mx-3 py-2 px-6 bg-neutral-500 rounded-md text-white hover:text-slate-100 hover:no-underline font-medium cursor-not-allowed">Contact</div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Le site de l'Amicale du Don de Sang de Lyon">
      {modalOpen && <Modal />}
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
