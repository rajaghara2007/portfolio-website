import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ScrollCameraController() {
  const { camera } = useThree();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Dynamic camera timeline pinned to page scroll progress
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#root',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.4,
        },
      });

      // 1. Hero -> About: Camera swoops to left flank, dives down
      tl.to(camera.position, {
        x: 2.8,
        y: -1.2,
        z: 6.2,
        ease: 'power1.inOut',
      }, 0.15)
      // 2. About -> Skills: Top-down tactical combat angle
      .to(camera.position, {
        x: -2.6,
        y: 1.5,
        z: 5.8,
        ease: 'power1.inOut',
      }, 0.35)
      // 3. Skills -> Projects: Surveillance angle shifted right
      .to(camera.position, {
        x: 2.4,
        y: -0.6,
        z: 6.5,
        ease: 'power1.inOut',
      }, 0.55)
      // 4. Projects -> Innovation / Hackathons: Overhead radar scan
      .to(camera.position, {
        x: -1.8,
        y: 0.8,
        z: 6.0,
        ease: 'power1.inOut',
      }, 0.75)
      // 5. Resume -> Contact: Gotham low-angle hero vigilante vantage looking up
      .to(camera.position, {
        x: 0,
        y: -1.8,
        z: 5.2,
        ease: 'power1.inOut',
      }, 1.0);
    });

    return () => ctx.revert();
  }, [camera]);

  return null;
}
