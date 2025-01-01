import { Creatie } from "./page";

export default function Creaties() {
    return <>
        <Creatie
            title="HorsePowerRun"
            image={"/hpr.png"}
            url="https://horsepowerrun.nl/"
            description={<p>
                Een website voor stichting HorsePowerRun die jaarlijks een toerrriet organiseert voor motorfietsen tot en met bouwjaar 1920.
                </p>
            } />

        <Creatie
            title="BPM Beast"
            image="/bpmbeast.webp"
            url="https://bpmbeast.justniels.nl/"
            description={<p>
                Muzikale metronoom op basis van je eigen spotifybibliotheek.
            </p>
            } />
        <Creatie
            title="Het Spel Spel"
            image="/hetspelspel.webp"
            url="https://hetspelspel.netlify.app/"
            description={<p>
                Een spel waarbij je moet spellen. Dit heb ik ooit toen ik 12 was voor mijn broertje gemaakt zodat hij op een leuke manier zijn woordenlijsten kon oefenen.
            </p>}
        /> 
    </>
}