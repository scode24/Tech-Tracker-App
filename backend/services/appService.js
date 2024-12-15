import axios from "axios";

const getTechStackData = async (url) => {
  const techData = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
  });

  return Object.keys(techData.data).map((key) => {
    return {
      name: key,
      usage: techData.data[key],
    };
  });
};

const getGridData = async (username) => {
  const repositoryData = await axios.get(
    process.env.GET_USER_REPO_API.replace("<username>", username),
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    }
  );
  const gridData = await Promise.all(
    repositoryData.data.map(async (repo) => {
      return {
        updatedAt: new Date(repo.updated_at).getFullYear(),
        techStackData: await getTechStackData(repo.languages_url),
      };
    })
  );

  return mergeTechStackData(gridData);
};

const mergeTechStackData = (data) => {
  const result = {};

  data.forEach(({ updatedAt, techStackData }) => {
    if (!result[updatedAt]) {
      result[updatedAt] = [];
    }

    techStackData.forEach(({ name, usage }) => {
      const existingTech = result[updatedAt].find((item) => item.name === name);
      if (existingTech) {
        existingTech.usage += usage;
      } else {
        result[updatedAt].push({ name, usage });
      }
    });
  });

  return Object.keys(result).map((updatedAt) => ({
    updatedAt,
    techStackData: result[updatedAt],
  }));
};

export { getGridData };
