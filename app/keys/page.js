import TerugLink from "@/components/TerugLink";

export default function Keys() {
    return <>
        <h1> Keys </h1>
        <div className="main">
            <a href="https://github.com/nielshuman.keys"> SSH public keys </a> <br/>
            <a href="https://github.com/nielshuman.gpg"> GPG public key </a>
        </div>
        <TerugLink/>
    </>
}