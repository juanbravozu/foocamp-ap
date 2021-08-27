import Footer from '../components/Footer';
import ImpactMetrics from '../components/ImpactMetrics';
import MainAllies from '../components/MainAllies';
import Navigation from '../components/Navigation';
import LastProjects from '../components/sections/LastProjects';
import {
  PROJECTS_SECTION, METRICS_SECTION, NAVBAR, FOOTER, ALLIES_SECTION,
} from '../constants/constants';

const homeComponents = {
  [METRICS_SECTION]: ImpactMetrics,
  [PROJECTS_SECTION]: LastProjects,
  [NAVBAR]: Navigation,
  [FOOTER]: Footer,
  [ALLIES_SECTION]: MainAllies,
};

export default homeComponents;
