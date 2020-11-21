/* global fetch window */

const fetchByUrl = async (url, params) => {
  const response = await fetch(url, params);
  const parsedResponse = await response.json();

  return parsedResponse;
};

const getProjects = async () => {
  const apiUrl = 'https://api.github.com';
  const getAllRepoUrl = `${apiUrl}/users/just-ankn-repo/repos`;
  const params = { headers: { Authorization: 'token a54883163cd6baae42e13acbb7671a4f79fb450f' } };
  const allRepo = await fetchByUrl(getAllRepoUrl, params);
  const allReadme = await Promise.all(allRepo.map(async (repo) => {
    const getFileFromRepoUrl = `${apiUrl}/repos/just-ankn-repo/${repo.name}/readme`;
    const fileFromRepo = await fetchByUrl(getFileFromRepoUrl, params);

    return fileFromRepo;
  }));
  const decodedContent = allReadme.map((response) => window.atob(response.content));
  const projectsArr = decodedContent.reduce((acc, project) => {
    const regex = new RegExp('.*Name: "(.*)".*\nDescription: "(.*)".*\nLang: "(.*)".*\nPreviewImage: "(.*)".*\nDemoLink: "(.*)".*\nSourceLink: "(.*)".*\nStatus: "(.*)"', 'g');
    const parsed = regex.exec(project);
    if (parsed && parsed[7] === 'portfolio') {
      acc.push({
        title: parsed[1],
        shortDescription: parsed[2],
        tag: parsed[3],
        image: parsed[4],
        demoLink: parsed[5],
        sourceLink: parsed[6],
      });
    }

    return acc;
  }, []);

  return projectsArr;
};

export default async () => {
  const localstorage = JSON.parse(window.localStorage.getItem('projects'));
  const nowDate = new Date().getTime();

  if (localstorage && localstorage.expireAt > nowDate) {
    return localstorage.value;
  }

  const projects = await getProjects();
  const expDate = nowDate + 86400000;

  window.localStorage.setItem('projects', JSON.stringify({ value: projects, expireAt: expDate }));

  return projects;
};
