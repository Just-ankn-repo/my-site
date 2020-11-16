import '../css/index.css';
import githubApi from './services/github-api';
import components from './components/index';

const projectsGalleryInit = async () => {
  const projects = await githubApi();
  components.projectsGallery('main', projects);
};

components.background('body');
projectsGalleryInit();
