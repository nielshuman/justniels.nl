'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import s from "./page.module.css";

export default function Home() {
  return <>
      <AnimatedLoadingDing text={"ONDER CONSTRUCTIE"}/>
      <div className={s.onder}><Link href="https://justniels.nl"> JustNiels <br></br> websiteontwikkeling en beheer </Link></div>
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

function AnimatedLoadingDing({text}) { // add characters one by one
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index));
      index++;
      if (index > text.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [text]);
  return <div className={s.loading}>
    <span className={s.input}>{displayedText}</span>
    <span className={s.ppp}>...</span>
  </div>
}