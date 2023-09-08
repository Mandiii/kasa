import {useState, useEffect} from "react";
import '../styles/pages/_home.scss'
import { Link } from "react-router-dom";
import Card from '../components/Card';
import Banner from "../components/Banner";
import bannerImg from '../assets/home-banner.jpg'

function Home() {

    const [appartments, setAppartments] = useState([])

    useEffect(()=> {
        fetch('/data.json')
            .then(res=>res.json())
            .then(data => setAppartments(data))
    },[])



    const logements = appartments.map(logement => {
        return (
            <Link key={logement.id} to={`/logement/${logement.id}`}>
                <Card
                    title={logement.title}
                    coverImg={logement.cover}
                />
            </Link>
        )
    })
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