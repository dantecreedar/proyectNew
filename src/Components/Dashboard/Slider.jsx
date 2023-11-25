
function Slider() {
    let element = [
        {
            panel: "Facebook",
            acceder: "Access"
        },
        {
            panel: "Instagram",
            acceder: "Access"
        },
        {
            panel: "Twitter",
            acceder: "Access"
        },
        {
            panel: "Telegram",
            acceder: "Access"
        },
    ]
  return (
    <div>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="drawer-button">Click</label>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu w-80 min-h-full bg-base-200 text-base-content bg-white">
                        <div>
                            <h1 className="text-2xl p-3 text-black font-extrabold">Titulo</h1>
                        </div>
                        <ul>
                            {
                                element.map( e => <li className="p-1 font-extrabold hover:text-blue-600 cursor-pointer" key={e.id}> {e.panel} </li>)
                            }
                            <div className="card-body bg-slate-300 shadow-md bottom-0 fixed w-full">
                                <h4>Caja de articculos</h4>
                            </div>
                        </ul>
                    
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default Slider
