import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import golden from "./assets/images/golden.png"
import border from "./assets/images/border.png"
import labrador from "./assets/images/labrador.png"
import doberman from "./assets/images/doberman.png"
import husky from "./assets/images/husky.png"
import cane from "./assets/images/cane.png"
import rottwieler from "./assets/images/rottwieler.png"
import german from "./assets/images/german.png"


const root = ReactDOM.createRoot(document.getElementById("root"))

function Gallery(props)
{
  return(
    <div className="p-5 border-2 border-gray-500 rounded transition transform hover:scale-125 duration-700">
      <div>
        <img src={props.image} alt="dog" className=""/>
        <h2 className="text-center font-bold mt-2">{props.name}</h2>
      </div>
    </div>
  )
}

var pics = [
  {
    image: golden,
    name: "Golden Retriever"
  },
  {
    image: border,
    name: "Border Collie"
  },
  {
    image: labrador,
    name: "Labrador"
  },
  {
    image: doberman,
    name: "Dobermann"
  },
  {
    image: husky,
    name: "Husky"
  },
  {
    image: cane,
    name: "Cane Corso"
  },
  {
    image: rottwieler,
    name: "Rottweiler"
  },
  {
    image: german,
    name: "German Shepherd"
  }
]

root.render(
  <div id="container" className="grid md:grid-cols-4 grid-cols-2 mt-10 gap-20 p-10">
  {
    pics.map(function(item)
  {
    return <Gallery image = {item.image} name = {item.name}></Gallery>
  })
  }
  </div>
  
)
