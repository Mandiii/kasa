import React from "react";
import { useParams } from "react-router-dom";
import Accordion from "../components/Accordion";
import '../styles/pages/_logement.scss'
import logementData from '../data.json'
import Slider from '../components/Slider'
import StarRating from '../components/StarRating'
import NoPage from "./NoPage";

function Logement() {
    const {id} = useParams()
    let currentLogement = logementData.find(item => item.id === id)
    if(!currentLogement) {
        return <NoPage />
    }
    
    let tagList = currentLogement.tags.map((tag, index) =>
        <span key={index}>{tag}</span>
    )

    let equippements = currentLogement.equipments.map((equippement, index) =>
        <span key={index}>{equippement}</span>
    )
    return (

        <main>
            <Slider 
                slides={currentLogement.pictures}
            />
            <div className="logement--infos">

                <div className="infos--overview">
                  <h1>{currentLogement.title}</h1>
                  <p className="location">{currentLogement.location}</p>
                  <div className="tags">
                    {tagList}
                  </div>
                </div>

                <div className="infos--host">
                    <div className="owner">
                        <p>{currentLogement.host.name}</p>
                        <img src={currentLogement.host.picture} alt={currentLogement.host.name} />
                    </div>
                    <StarRating 
                        rating={currentLogement.rating}
                    />
                </div>
            </div>

            <div className="logement--accordions">
                <Accordion 
                    title="Description"
                    text={currentLogement.description}
                />
                <Accordion 
                    title="Équipements"
                    text={equippements}
                />
            </div>
            

        </main>

    )
}

export default Logement;