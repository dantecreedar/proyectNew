import Card from "../Tasks/Card";

export default function Home() {
  return (
    <div className="text-center shadow-md p-5 m-auto">
        <h2 className="p-5">Estamos en la Home!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis animi quaerat.</p>

        <div className="flex flex-wrap justify-center m-5">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}
