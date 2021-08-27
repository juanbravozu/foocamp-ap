import Footer from '../components/app/Footer';
import ImpactMetrics from '../components/home/ImpactMetrics';
import MainAllies from '../components/home/MainAllies';
import Navigation from '../components/app/Navigation';
import LastProjects from '../components/home/LastProjects';
import JoinUs from '../components/app/JoinUs';
import {
  PROJECTS_SECTION, METRICS_SECTION, NAVBAR, FOOTER, ALLIES_SECTION, JOINUS_SECTION,
} from '../constants/constants';

const homeComponents = {
  [NAVBAR]: Navigation,
  [FOOTER]: Footer,
  [PROJECTS_SECTION]: LastProjects,
  [METRICS_SECTION]: ImpactMetrics,
  [JOINUS_SECTION]: JoinUs,
  [ALLIES_SECTION]: MainAllies,
};

export default homeComponents;
