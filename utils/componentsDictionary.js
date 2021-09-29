import Footer from '../components/Footer';
import ImpactMetrics from '../components/ImpactMetrics';
import MainAllies from '../components/MainAllies';
import Navigation from '../components/Navigation';
import LastProjects from '../components/LastProjects';
import ContentSection from '../components/ContentSection';
import MembersGrid from '../components/MembersGrid';
import JoinUs from '../components/JoinUs';
import Hero from '../components/Hero';
import {
  PROJECTS_SECTION,
  METRICS_SECTION,
  NAVBAR,
  FOOTER,
  ALLIES_SECTION,
  JOINUS_SECTION,
  HERO_SECTION,
  MEMBERS_GRID,
  BIG_IMAGE_SECTION,
} from './constants';

const homeComponents = {
  [NAVBAR]: Navigation,
  [FOOTER]: Footer,
  [PROJECTS_SECTION]: LastProjects,
  [BIG_IMAGE_SECTION]: ContentSection,
  [METRICS_SECTION]: ImpactMetrics,
  [MEMBERS_GRID]: MembersGrid,
  [JOINUS_SECTION]: JoinUs,
  [ALLIES_SECTION]: MainAllies,
  [HERO_SECTION]: Hero,
};

export default homeComponents;
