'use client';
import Link from "next/link";
import { useEffect } from "react";
import s from "./page.module.css";

export default function Home() {
  return <>
      <LoadingDing />
      <div id="onder"> <Link href="/keys/"> keys & andere dingen </Link> - <Link href="/creaties/"> Creaties </Link> </div>
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
    <input className={s.input} id="load-text" type="text" style={{width: '432px'}} 
      defaultValue="Wachten todat hier iets leuks staat"/>
    <span className={s.spinding} id="puntjepuntjepuntje" style={{display: 'inline'}}>... </span>
  </div>
}