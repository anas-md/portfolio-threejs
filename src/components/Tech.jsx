import React, { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';

import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const Tech = () => {
  // const isMobile = window.matchMedia('(max-width: 500px)').matches;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const Map = (isMobile, technologies) => {
    if (isMobile) {
      return technologies.slice(0, 4).map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p className="flex justify-center text-white font-bold">
            {technology.name}
          </p>
        </div>
      ));
    } else {
      return technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p className="flex justify-center text-white font-bold">
            {technology.name}
          </p>
        </div>
      ));
    }
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>MY TECH STACK</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Below are among the programming languages, frameworks and technologies
        that I am proficient in:
      </motion.p>
      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {Map(isMobile, technologies)}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
