import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Accordion from "../components/Accordion";
import '../styles/pages/_logement.scss'
import Slider from '../components/Slider'
import StarRating from '../components/StarRating'
import Tag from "../components/Tag";

function Logement() {
    const {id} = useParams()    
    const [currentLogement, setCurrentLogement] = React.useState()
    const navigate = useNavigate()

    React.useEffect(()=> {
        fetch('/data.json')
            .then(res=>res.json())
            .then((data) => {
                const logement = data.find(logement => logement.id === id)
                if(logement === undefined) {
                    navigate("./NoPage")
                }
                setCurrentLogement(logement)          
            })
    },[])
    function createTags() {
        return(currentLogement.tags.map((tag, index) =>
        <Tag text= {tag}/>
        ))
    }
    function createEquippements() {
        return(currentLogement.equipments.map((equippement, index) =>
        <span key={index}>{equippement}</span>
    ))
    }    
    if (currentLogement === undefined) {
        return null
        
    }
    
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
                    {createTags()}
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
                    text={createEquippements()}
                />
            </div>
            

        </main>

    )
}

export default Logement;