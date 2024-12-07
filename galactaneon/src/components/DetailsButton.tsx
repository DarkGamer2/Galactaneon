const DetailsButton=()=>{
return(
  <div className="relative group mx-2">
  <div className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group:hover:duration-200 animate-tilt"></div>
  <button className="relative px-3 py-2 bg-black rounded-lg leading-none flex items-center divide-x text-white font-Galacticagrid text-4xl">Details</button>
  </div>
)
}

export default DetailsButton;