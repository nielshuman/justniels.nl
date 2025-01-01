import Creaties from "./creaties"
import s from "./page.module.css";
import TerugLink from "@/components/TerugLink";

export default function CreatiesPage() {
    return <>
        <h1> Portfolio </h1>
        <p className="subtitle">
            Enkele voorbeelden van eerder werk.
        </p>
        <div className={s.grid + ' main'}>
            <Creaties />
        </div>
        <TerugLink />
    </>
}
// takes image url or video url
export function Creatie({ title, image, video, url, description}) {
    return <div className={s.creatiecard}>
        <div className={s.cardHeader}>
            <a href={url}>
                {image && <img src={image} width={300} /> }
                {video && <video src={video} width={300} loop muted autoPlay/>}
            </a>
        </div>
        <div className={s.cardBody}>
            <h2 className={s.cardTitle}> {title} </h2>
            <div> {description} </div>
            <a href={url}> <button> Bekijk </button> </a>
        </div>
    </div>
}