import { Creatie } from "./page";

export default function Creaties() {
    return <>
        <Creatie
            title="HorsePowerRun"
            image={"/hpr.png"}
            url="https://horsepowerrun.nl/"
            description={<p>
                Een website voor stichting HorsePowerRun die jaarlijks een toerrit organiseert voor motorfietsen tot en met bouwjaar 1920.
                </p>
            } />
    </>
}