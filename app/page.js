'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import s from "./page.module.css";

export default function Home() {
  return <>
      <TitleWithAnimatedSubtitle title="JustNiels" subtitle="Websiteontwikkeling en beheer" />
      <div className={s.onder}><Link href="/portfolio/"> portfolio </Link> - <Link href="/contact/"> contact </Link></div>
    </>
}

function LoadingDing({defaultValue}) {
  let [text, setText] = useState(defaultValue);
  let inputstyle = text? {width: (text.length * 12) + 'px'} : {width: '1px'};
  let pppstyle = text? {display: 'inline'} : {display: 'none'};
  return <div className={s.loading}>
    <input className={s.input} type="text" style={inputstyle} 
      defaultValue={defaultValue} onInput={(e) => setText(e.target.value)} />
    <span className={s.ppp} style={pppstyle}> ... </span>
  </div>
}

function AnimationDing({text, delay=100}) {

  

}

function TitleWithAnimatedSubtitle({title, subtitle, delay=100}) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => counter + 1);
    }, delay);
    return () => clearInterval(interval);
  });

  return <>
    <h1 className={s.main_title}>{title}</h1>
    <div className={s.animated_text + (counter? '' : ' ' + s.max_height_0)}> {subtitle.slice(0, counter) || ' '} </div>
  </>
}