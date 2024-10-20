'use client';
import Link from "next/link";
import { useState } from "react";
import s from "./page.module.css";

export default function Home() {
  return <>
      <LoadingDing defaultValue={"Wachten todat hier iets leuks staat"}/>
      <div className={s.onder}><Link href="/creaties/"> creaties </Link> - <Link href="/keys/"> keys & andere dingen </Link></div>
    </>
}

function LoadingDing({defaultValue}) {
  const [text, setText] = useState(defaultValue);
  let inputstyle = text? {width: (text.length * 12) + 'px'} : {width: '1px'};
  let pppstyle = text? {display: 'inline'} : {display: 'none'};
  return <div className={s.loading}>
    <input className={s.input} type="text" style={inputstyle} 
      defaultValue={defaultValue} onInput={(e) => setText(e.target.value)} />
    <span className={s.ppp} style={pppstyle}>...</span>
  </div>
}