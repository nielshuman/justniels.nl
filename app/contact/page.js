import TerugLink from "@/components/TerugLink";

export default function Keys() {
    return <>
        <h1> Contact </h1>
        <div className="main">
            <p>
                JustNiels <br />
                <a href="mailto:info@justniels.nl"> info@jusniels.nl </a> <br />
                <a href="tel:+31623579871"> +31 6 23579871 </a> <br />
                <a href="https://api.whatsapp.com/send/?phone=31623579871"> WhatsApp </a>
            </p>
            <p>
                Petrus Campersingel 19 <br />
                9713 AC Groningen <br />
                KvK: 95998411 <br />
            </p>
        </div>
        <TerugLink/>
    </>
}