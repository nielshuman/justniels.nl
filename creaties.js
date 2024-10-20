import { Creatie } from "./app/creaties/page";

export function Creaties() {
    return <>
        <Creatie
            title="Pieuwpieuwgame"
            video="/pieuwpieuwgame.webm"
            url="https://pieuwpieuwgame.justniels.nl/"
            description={<p>
                Schietspelletje. Speel samen met vrienden!
                Druk op M voor geluid. Samen gemaakt met <a href="https://piterpasma.nl/">Piter Pasma</a>.
                </p>
            } />

        <Creatie
            title="BPM Beast"
            image="/bpmbeast.png"
            url="https://bpmbeast.justniels.nl/"
            description={<p>
                Muzikale metronoom op basis van je eigen spotifybibliotheek.
            </p>
            } />
        <Creatie
            title="Het Spel Spel"
            image="/hetspelspel.png"
            url="https://hetspelspel.netlify.app/"
            description={<p>
                Een spel waarbij je moet spellen. Dit heb ik ooit toen ik 12 was voor mijn broertje gemaakt zodat hij op een leuke manier zijn woordenlijsten kon oefenen.
            </p>}
        /> 
    </>
}