import s from "./page.module.css";
export default function CreatiesPage() {
    return <>
        <h1> Creaties </h1>
        <Creaties />
    </>
}

function Creaties() {
    return <div className={s.grid}>
        <Creatie 
            title="Pieuwpieuwgame"
            video="/pieuwpieuwgame.webm"
            url="https://pieuwpieuwgame.justniels.nl/"
            description={<p>
                Dom schietspel maar wel heel schattig. <br/>
                Druk op M voor geluid. <br/>
                Speel met vrienden! <br/>
            </p>}
        />
        <Creatie 
            title="Pieuwpieuwgame"
            video="/pieuwpieuwgame.webm"
            url="https://pieuwpieuwgame.justniels.nl/"
            description={<p>
                Dom schietspel maar wel heel schattig. <br/>
                Druk op M voor geluid. <br/>
                Speel met vrienden! <br/>                Dom schietspel maar wel heel schattig. <br/>
                Druk op M voor geluid. <br/>
                Speel met vrienden! <br/>
            </p>}
        /><Creatie 
        title="Pieuwpieuwgame"
        video="/pieuwpieuwgame.webm"
        url="https://pieuwpieuwgame.justniels.nl/"
        description={<p>
            Dom schietspel maar wel heel schattig. <br/>
            Druk op M voor geluid. <br/>
            Speel met vrienden! <br/>
        </p>}
    /><Creatie 
    title="Pieuwpieuwgame"
    video="/pieuwpieuwgame.webm"
    url="https://pieuwpieuwgame.justniels.nl/"
    description={<p>
        Dom schietspel maar wel heel schattig. <br/>
        Druk op M voor geluid. <br/>
        Speel met vrienden! <br/>
    </p>}
/><Creatie 
            title="Pieuwpieuwgame"
            video="/pieuwpieuwgame.webm"
            url="https://pieuwpieuwgame.justniels.nl/"
            description={<p>
                Dom schietspel maar wel heel schattig. <br/>
                Druk op M voor geluid. <br/>
                Speel met vrienden! <br/>
            </p>}
        />
    </div>
}
// takes image url or video url
function Creatie({ title, image, video, url, description}) {
    return <div className={s.creatiecard}>
        {image && <Image src={image} width={100} /> }
        {video && <video src={video} width={300} loop muted autoPlay/>}
        <div className={s.cardBody}>
            <h2> {title} </h2>
            <div> {description} </div>
            <a href={url}> <button> Bekijk </button> </a>
        </div>
    </div>
}
