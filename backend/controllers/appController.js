import { getGridData } from "../services/appService.js";

const appController = async (req, res, next) => {
  try {
    const gridData = await getGridData(req.query.username);
    res.json(gridData);
  } catch (error) {
    next({
      status: error.status || 500,
      message:
        "An error occurred while fetching the grid data. Make sure you have the correct username.",
    });
  }
};

export { appController };
