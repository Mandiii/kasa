import React from "react";
import '../styles/pages/_home.scss'
import {Link} from "react-router-dom";
import Card from '../components/Card';
import Banner from "../components/Banner";
import bannerImg from '../assets/home-banner.jpg'
import logementData from '../data.json'

function Home() {

// React.useEffect(() => {
//     fetch("data.json")
//     .then(response => response.json())
//     .then(data => console.log(data))
// }, [])

const logements = logementData.map(logement => {
    return (
        <Link key={logement.id} to={`/logement/${logement.id}`}>
            <Card
                title={logement.title}
                coverImg={logement.cover}
                onClick={selectLogement}
            />
        </Link>        
    )
})
function selectLogement() {
    setSelectedLogement()
}
const [selectedLogement, setSelectedLogement] = React.useState({})
    return (
        <main>
            <Banner
                title='Chez vous, partout et ailleurs'
                bgImage={bannerImg}
            />
        <div className="cards-container">
            {logements}
        </div>
        </main>
  )
}

export default Home;