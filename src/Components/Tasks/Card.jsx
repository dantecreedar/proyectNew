import imgjs from "../../assets/th.jpg"

function Card() {
  return (
    <div>
        <div className="card w-72 bg-base-100 shadow-xl bg-white m-10">
            <figure><img src={imgjs} className="scale-125" alt="Shoes" /></figure>
            <div className="card-body bg-slate-50 rounded-b-xl">
                <h2 className="card-title">Bienvenidos al curso de JS!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="border-b-4 border-blue-500 p-3 hover:bg-blue-300 hover:text-white">Adquirir mi Curso!</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
