import { getUserData } from "../services/appService.js";

const appController = async (req, res, next) => {
  try {
    const userData = await getUserData(req.query.username);
    res.json(userData);
  } catch (error) {
    console.log(error);

    next({
      status: error.status || 500,
      message:
        "An error occurred while fetching the grid data. Make sure you have the correct username.",
    });
  }
};

export { appController };
