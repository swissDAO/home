import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import GradientLine from '../components/gradient-line/gradient-line';
import { LogoMountain } from '../components/logo-mountain/logo-mountain';
import Section from '../components/section/section';
import styles from '../styles/module/home.module.scss';

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  const triggerRef = useRef(null);
  const flagRef = useRef(null);

  useEffect(() => {
    const scrollFx = gsap.fromTo(
      flagRef.current,
      {
        rotation: -180,
        opacity: 0,
        y: 200
      },
      {
        rotation: 0,
        opacity: 1,
        y: 0,
        ease: "slow",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true
        }
      }
    );

    return () => scrollFx?.scrollTrigger?.kill();
  }, []);

  return (
    <>
      <Section>
        <h1>The Swiss Web3 Builder</h1>
        <h1 className={styles.gradient}>Community.³</h1>

        <p className="lead">
          <span className={styles.gradient}>³</span> Our goal is to connect
          builders with projects and join forces to build the new internet.
        </p>
      </Section>

      <div className={styles.wrapper}>
        <Section>
          <div className={styles.gradientLine}>
            <GradientLine />
          </div>

          <div className={styles.section}>
            <Image
              className={styles.item}
              src="/images/illustration_find.svg"
              alt="Illustration Build"
              width={400}
              height={300}
            />
            <div className={styles.horizontalLine}>
              <GradientLine horizontal />
            </div>
            <h2 className={styles.item}>
              <span className={styles.accent}>³ Find</span> peers to share your
              learning and building experience.
            </h2>
          </div>
        </Section>

        <Section>
          <div className={styles.section}>
            <h2 className={styles.item}>
              <span className={styles.accent}>³ Learn</span> with our workshops to
              accelerate your web3 journey.
            </h2>
            <div className={styles.horizontalLine}>
              <GradientLine horizontal />
            </div>
            <Image
              className={styles.item}
              src="/images/illustration_learn.svg"
              alt="Illustration Build"
              width={300}
              height={300}
            />
          </div>
        </Section>

        <Section>
          <div className={styles.section}>
            <Image
              className={styles.item}
              src="/images/illustration_build.svg"
              alt="Illustration Build"
              width={300}
              height={300}
            />
            <div className={styles.horizontalLine}>
              <GradientLine horizontal />
            </div>
            <h2 className={styles.item}>
              <span className={styles.accent}>³ Build</span> with us a DAO that is
              going to be the home of web3 builders.
            </h2>
          </div>
        </Section>
      </div>

      <Section noPadding>
        <h2 ref={triggerRef}>
          <span className={styles.accent}>DAOtize</span> the world with us!
        </h2>

        <LogoMountain ref={flagRef} className={styles.flag} />
      </Section>
    </>
  );
}
