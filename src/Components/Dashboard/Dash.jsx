import f from "../../assets/facebook.png"
import i from "../../assets/instagram.png"
import t from "../../assets/twitter.png"
import w from "../../assets/whatsapp.png"

function Dash() {

  let mostrar = [
    {
      img: f
    },
    {
      img: i
    },
    {
      img: t
    },
    {
      img: w
    },
  ]

  return (
    <div>
            <h3>Dashboard</h3>

            <div className="flex p-5">
                {
                  mostrar.map( e => <img className="w-36 p-3" key={e.id} src={e.img}/>)
                }
            </div>
    </div>
  )
}

export default Dash
