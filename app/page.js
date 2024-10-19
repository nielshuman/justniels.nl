'use client';
import Link from "next/link";
import { useEffect } from "react";
// import styles from "./page.module.css";

export default function Home() {
  return <>
      <LoadingDing />
      <div id="onder"> <Link href="/keys/"> keys & andere dingen </Link> - <a href="https://stefan.justniels.nl:2001/">StefanCloud&#8482;</a> </div>
    </>
}

function LoadingDing() {

  useEffect(() => {
    const _ = document.getElementById.bind(document);
    const input = _('load-text'), laden = _('loading'), ppp = _('puntjepuntjepuntje')
    const fix_everything = () => {
      if (input.value.length == 0) {
        input.style.width = '1px';
        ppp.style.display = 'none';
      }
      else {
        input.style.width = (input.value.length * 12) + 'px';
        ppp.style.display = 'inline';
      }
    }
    input.oninput = fix_everything;
    fix_everything();
    return () => {
      input.oninput = null;
    }
  })

  return <div id="loading">
    <input id="load-text" type="text" defaultValue="Wachten todat hier iets leuks staat" style={{width: '432px'}}/>
    <span id="puntjepuntjepuntje" style={{display: 'inline'}}>... </span>
  </div>
}