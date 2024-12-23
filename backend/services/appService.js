import axiosInstance from "../interceptors/appRequestInterceptor.js";

const getTechStackData = async (url) => {
  const techData = await axiosInstance.get(url);

  return Object.keys(techData.data).map((key) => {
    return {
      name: key,
      usage: techData.data[key],
    };
  });
};

const getUserData = async (username) => {
  const userInfoData = await axiosInstance.get(
    process.env.GET_USER_INFO_API.replace("<username>", username)
  );
  const repositoryData = await axiosInstance.get(
    process.env.GET_USER_REPO_API.replace("<username>", username)
  );

  let gridData = await Promise.all(
    repositoryData.data.map(async (repo) => {
      return {
        updatedAt: new Date(repo?.updated_at).getFullYear(),
        techStackData: await getTechStackData(repo?.languages_url),
      };
    })
  );

  gridData = mergeTechStackData(gridData);
  gridData = calculateCumulativeTechStack(gridData);

  return {
    name: userInfoData?.data?.name,
    email: userInfoData?.data?.email,
    bio: userInfoData?.data?.bio,
    githubUrl: userInfoData?.data?.html_url,
    photoUrl: userInfoData?.data?.avatar_url,
    techData: gridData,
  };
};

const calculateCumulativeTechStack = (data) => {
  const cumulativeTechStack = {};
  let techDataList = [];
  let newData = [];
  let k = 0;

  let currentYear = data[0]?.updatedAt;
  while (k < data.length) {
    if (data[k]?.updatedAt === currentYear.toString()) {
      newData.push(data[k]);
      k++;
    } else {
      newData.push({
        updatedAt: currentYear.toString(),
        techStackData: [],
      });
    }
    currentYear++;
  }

  newData.forEach((yearData) => {
    yearData.techStackData.forEach((skill) => {
      const skillName = skill.name;
      const skillUsage = skill.usage;

      if (cumulativeTechStack[skillName]) {
        cumulativeTechStack[skillName] += skillUsage;
      } else {
        cumulativeTechStack[skillName] = skillUsage;
      }

      techDataList = techDataList.filter((item) => item.name !== skillName);

      techDataList.push({
        name: skillName,
        usage: cumulativeTechStack[skillName],
      });
    });
    yearData.techStackData = [...techDataList];
  });

  //sort by usage
  newData.forEach((yearData) => {
    yearData.techStackData.sort((a, b) => b.usage - a.usage);
  });

  return newData;
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

export { getUserData };
