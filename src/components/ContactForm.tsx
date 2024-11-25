export default function ContactForm() {
  return (
    <div className="py-32 bg-blue-100">
      <div className="container">
        <h2 className='text-5xl font-bold text-center text-[#009de0] dark:text-slate-300 pb-8'>
          Contactez-nous
        </h2>
        <form action="" className="flex flex-col items-center [&>*:not(:last-child)]:mb-3 max-w-[1000px] mx-auto">
          <div className="flex flex-col md:flex-row w-full">
              <input type="text" id="firstname" placeholder="Prénom" required autoComplete="off" className="w-full rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-red-300 shadow-md p-2 text-lg"/>
              <input type="text" id="name" placeholder="Nom" required autoComplete="off"className="w-full mt-3 md:mt-0 md:ml-4 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-red-300 shadow-md p-2 text-lg"/>
          </div>
          <input type="email" name="email" id="email" placeholder="Email" required autoComplete="off" className="w-full rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-red-300 shadow-md p-2 text-lg"/>
          <textarea 
            name="message" 
            id="message" 
            placeholder="Votre message" 
            required 
            autoComplete="off" 
            className="w-full h-52 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-red-300 shadow-md p-2 text-lg resize-none font-sans"
          />
          <button type="submit" className="mt-4 px-6 py-2 rounded-lg text-lg border-none bg-red-500 hover:bg-red-700 text-slate-100 hover:text-white shadow-md cursor-pointer">Envoyer</button> 
        </form>
      </div>
    </div>
  )
}
