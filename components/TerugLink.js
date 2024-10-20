import Link from 'next/link'
import s from './TerugLink.module.css'

export default function TerugLink() {
    return <Link href="/" className={s.terug}>terug</Link>
}