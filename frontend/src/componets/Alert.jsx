

function Alert( {alert}) {
  console.log('Alert received: ', alert); // Agrega esto para verificar
  if (!alert?.msg) return null;

  return (
    <div className= {`${alert.error ? 'from-red-400 to-red-600' : 'from-indigo-400 to-indigo-600'} bg-gradient-to-r text-center p-3 rounded-xl uppercase text-white font-bold text-sm mb-10`}>
      {alert.msg}
    </div>
  )
}

export default Alert
