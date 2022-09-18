import reg1 from '../../images/register.svg';
import reg2 from '../../images/register2.svg';
import reg3 from '../../images/register3.svg';
import reg4 from '../../images/register4.svg';

const homeObjOne = {
  lightBg: false,
  lightText: true,
  lightTopLine: true,
  lightTextDesc: true,
  topLine: 'Sign up Today',
  headline: 'Join today to receive an exclusive offer',
  description:
    'Get access to our exclusive diamond king package. Limited quantity available.',
  buttonLabel: 'Sign Up',
  imgStart: '',
  img: reg1,
  alt: 'Credit Card'
};

const homeObjTwo = {
  lightBg: false,
  lightText: true,
  lightTopLine: true,
  lightTextDesc: true,
  topLine: '100% Secure',
  headline: 'Stay protected 24/7 anywhere anytime',
  description:
    'We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime',
  buttonLabel: 'Learn More',
  imgStart: '',
  img: reg2,
  alt: 'Vault'
};

const homeObjThree = {
  lightBg: true,
  lightText: false,
  lightTopLine: true,
  lightTextDesc: false,
  topLine: 'Easy Setup',
  headline: 'Super fast and simple onboarding process',
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: 'Start Now',
  imgStart: 'start',
  img: reg3,
  alt: 'Vault'
};

const homeObjFour = {
  lightBg: false,
  lightText: true,
  lightTopLine: true,
  lightTextDesc: true,
  topLine: 'Data Analytics',
  headline: 'Every transaction is stored on our secure cloud database',
  description:
    'Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.',
  buttonLabel: 'Sign Up Now',
  imgStart: 'start',
  img: reg4,
  alt: 'Vault'
};

export {homeObjOne, homeObjTwo, homeObjThree, homeObjFour}