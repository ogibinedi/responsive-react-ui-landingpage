import React from 'react';
import {InfoSection, Pricing} from '../../components';
import { homeObj, homeObjThree, homeObjTwo } from './Data';

const Home = () => {
  return (
    <>
        <InfoSection {...homeObj} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
        <Pricing />
    </>
  )
}

export default Home