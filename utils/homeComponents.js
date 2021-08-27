import Footer from '../components/app/Footer';
import ImpactMetrics from '../components/home/ImpactMetrics';
import MainAllies from '../components/home/MainAllies';
import Navigation from '../components/app/Navigation';
import LastProjects from '../components/home/LastProjects';
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
