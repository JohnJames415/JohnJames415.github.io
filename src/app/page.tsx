'use client';

import HomeNav from "./components/homenav";
import TextButton from "./components/textbutton";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  const router = useRouter();

  const exploreButtonHandler = () => {
    router.push('/main');
  };

  return (
    <div id="mainDiv">
      {/* Background video */}
      <video
        id="bgVid"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/BackgroundNebulaFade.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div id="overlay" />

      {/* Navigation */}
      <div id="topNav">
        <HomeNav/>
      </div>

      {/* Page content */}
      <div className="mainContainer">
        <h2 id="nameHeadingPrefix">Hi, I&apos;m</h2>
        <h1 id="nameHeading">John James</h1>
        <TextButton text="Explore" onClick={exploreButtonHandler} />
        <div id="copyrightDiv">
            <p id="copyrightText"><FontAwesomeIcon icon={faCopyright}/> John James</p>
        </div>
      </div>
    </div>
  );
}
