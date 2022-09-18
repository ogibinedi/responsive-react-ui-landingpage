import section1 from '../../images/section1.svg';
import section2 from '../../images/section2.svg';
import section3 from '../../images/section.svg';

const homeObj = {
    lightBg: false,
    primary: true, 
    imgStart: '', 
    lightTopLine: true, 
    topLine: 'This is my topLine text test', 
    lightTextDesc: true, 
    buttonLabel: 'Get Started',
    lightText: true, 
    headline: 'This is my headline text test', 
    description: 'This is my description test', 
    img: section1,
    alt: 'hero',
    start: ''
}

const homeObjTwo = {
    lightBg: true,
    primary: false, 
    imgStart: 'start', 
    lightTopLine: false, 
    lightTextDesc: false, 
    lightText: false, 
    topLine: 'This is my topLine text test', 
    buttonLabel: 'Get Started',
    headline: 'This is my headline text test', 
    description: 'This is my description test', 
    img: section2,
    alt: 'hero',
    start: 'true'
}

const homeObjThree = {
    lightBg: false,
    primary: true, 
    imgStart: '', 
    lightTopLine: true, 
    topLine: 'This is my topLine text test', 
    lightTextDesc: true, 
    buttonLabel: 'Get Started',
    lightText: true, 
    headline: 'This is my headline text test', 
    description: 'This is my description test', 
    img: section3,
    alt: 'hero',
    start: ''
}

export { homeObj, homeObjTwo, homeObjThree};