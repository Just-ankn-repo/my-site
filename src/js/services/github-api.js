/* global fetch window */

export default async () => {
  const getAllPubRepo = await fetch('https://api.github.com/users/just-ankn-repo/repos', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'token 039bc979bf0f41ad54f394d192cb6696fbb1200a',
    },
  });

  const getInfoAboutRepo = await getAllPubRepo.json();

  const getAllReadmes = await Promise.all(getInfoAboutRepo.map((repo) => fetch(`https://api.github.com/repos/just-ankn-repo/${repo.name}/readme`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'token 039bc979bf0f41ad54f394d192cb6696fbb1200a',
    },
  })));

  const readmeResponse = await Promise.all(getAllReadmes.map((response) => response.json()));

  const decodedContent = await readmeResponse.map((response) => window.atob(response.content));

  const projects = decodedContent.reduce((acc, project) => {
    const regex = new RegExp('Name: "(.*)".*\nDescription: "(.*)".*\nLang: "(.*)".*\nPreviewImage: "(.*)".*\nDemoLink: "(.*)".*\nSourceLink: "(.*)".*\nStatus: "(.*)"', 'g');
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

  return projects;
}