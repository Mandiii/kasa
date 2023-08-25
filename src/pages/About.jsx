import React from "react";
import Accordion from "../components/Accordion";
import Banner from "../components/Banner";
import bannerImg from "../assets/about-banner.jpg"

function About() {
    return (
        <main>
            <Banner
                bgImage={bannerImg}
            />
            <section className="about--accordions">
                <Accordion 
                    title="Fiabilité"
                    text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
                    régulièrement vérifiées par nos équipes."
                />
                <Accordion 
                    title="Respect"
                    text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                    perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
                <Accordion 
                    title="Service"
                    text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                    perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
                <Accordion 
                    title="Sécurité"
                    text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                    correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                    locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                    également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </section>
        </main>
        
    )
}

export default About;