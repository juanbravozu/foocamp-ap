import ImpactMetrics from '../components/ImpactMetrics';
import LastProjects from '../components/sections/LastProjects';
import { PROJECTS_SECTION, METRICS_SECTION } from '../constants/constants';

const homeComponents = {
  [METRICS_SECTION]: ImpactMetrics,
  [PROJECTS_SECTION]: LastProjects,
};

export default homeComponents;
