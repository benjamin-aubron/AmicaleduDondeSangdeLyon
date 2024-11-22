import { FaRegCalendarAlt, FaUsers } from "react-icons/fa";


type AssoProps = {
  icon: JSX.Element;
  mesure: string;
  description: string;
}

const AssoEnBrefList : AssoProps[] = [
  {
    icon: <FaRegCalendarAlt />,
    mesure: "Nov 2023", 
    description:"Date de création",
  },
  {
    icon: <FaUsers />,
    mesure: "6", 
    description:"Adhérents",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="currentColor" fillRule="evenodd" d="m7 .464l.377-.27a.464.464 0 0 0-.754 0zm0 0l-.377-.27l-.002.002l-.005.006L6.6.226a16 16 0 0 0-.276.4a24 24 0 0 0-.652 1.027a12 12 0 0 0-.664 1.25c-.176.395-.33.831-.33 1.198c0 .631.24 1.24.673 1.691s1.027.71 1.649.71s1.215-.258 1.649-.71s.673-1.06.673-1.69c0-.368-.154-.804-.33-1.2a12 12 0 0 0-.664-1.25A23 23 0 0 0 7.4.227L7.384.202L7.379.196L7.378.195L7 .465ZM0 5.112v4.726a2 2 0 0 0 .586 1.414l2.191 2.191V14H6.11v-2.874a2.22 2.22 0 0 0-.65-1.57L4.022 8.118l-.004-.004a.8.8 0 0 0-1.076 1.182l.92.92a.5.5 0 1 1-.707.707l-.92-.92a1.8 1.8 0 0 1-.014-2.53V5.111a1.11 1.11 0 1 0-2.222 0Zm14 4.726V5.112a1.11 1.11 0 0 0-2.222 0v2.361a1.8 1.8 0 0 1-.014 2.532l-.92.919a.5.5 0 0 1-.707-.707l.92-.92A.8.8 0 0 0 9.98 8.115l-.004.004L8.54 9.555a2.22 2.22 0 0 0-.65 1.571V14h3.332v-.556l2.191-2.192A2 2 0 0 0 14 9.838" clipRule="evenodd"></path></svg>,
    mesure: "9", 
    description:"Participations aux collectes",
  }
]

function AssoEnBref({icon, mesure, description}: AssoProps) {
  return (
    <div className="flex items-center p-6 bg-white rounded-lg shadow-md">
      <div className="text-red-700 text-3xl w-16 h-16 bg-red-200 rounded-xl flex items-center justify-center">
        {icon}
      </div>
      <div className="ml-4">
        <div className="text-2xl font-bold text-red-700 dark:text-slate-200">
          {mesure}
        </div>
        <div className="text-gray-600 dark:text-gray-400">
          {description}
        </div>
      </div>
    </div>
  );
};

export default function Association() {
  return (
    <div className="py-20 bg-red-100">
      <div className="container">
        <h2 className='text-4xl font-bold text-slate-900 dark:text-slate-300 pb-6'>
          L'association en bref
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {AssoEnBrefList.map((props, idx) => (
            <AssoEnBref key={idx} {...props} />
          ))}
        </div>
      </div>
    </div>
  )
}
