'use client'

import Card from '@/components/Card';
import Hero from '../components/Hero';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import CSSPlugin from 'gsap/CSSPlugin';

export default function Home() {
  const container = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const engineeringRef = useRef<HTMLDivElement | null>(null);
  const devRef = useRef<HTMLDivElement | null>(null);
  const hobbiesRef = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(ScrollTrigger, CSSPlugin);

  useGSAP(() => {
    const cards = [
      aboutRef.current, 
      engineeringRef.current,
      devRef,
      hobbiesRef
    ];
    const totalScrollHeight = window.innerHeight * 3;
    const positions = [14, 38, 62, 86];
    const rotations = [-15, -7.5, 7.5, 15];

    // pin  cards
    ScrollTrigger.create({
      trigger: container.current?.querySelector(".content"),
      start: "top top",
      end: () => `+=${totalScrollHeight}`,
      pin: true,
      pinSpacing: true
    })

    // spread cards
    cards.forEach((card, index) => {
      gsap.to(card, {
        left: `${positions[index]}%`,
        rotation: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current?.querySelector(".content"),
          start: "top top",
          end: () => `+=${window.innerHeight}`,
          scrub: 0.5,
          id: `spread-${index}`
        }
      })
    })
  }, { scope: container });

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, []);

  return (
    <div className="container" ref={container}>
      <section className="hero">
        <h1>Hi, I'm Russell</h1>
      </section>
      <section className="content">
        <Card
          id = {'aboutCard'}
          media = "/Headshot-1200-800.jpg"
          mediaAlt='Card image'
          ref = {aboutRef}
        />
        <Card
          id = {'engineeringCard'}
          media = "/Headshot-1200-800.jpg"
          mediaAlt='Card image'
          ref = {engineeringRef}
        />
        <Card
          id = {'devCard'}
          media = "/Headshot-1200-800.jpg"
          mediaAlt='Card image'
          ref = {devRef}
        />
        <Card
          id = {'hobbiesCard'}
          media = "/Headshot-1200-800.jpg"
          mediaAlt='Card image'
          ref = {hobbiesRef}
        />
      </section>
    </div>
  );
}
