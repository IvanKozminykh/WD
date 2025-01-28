import futureHereNewData from "../../mockData/futureHereNewData.js";
import { futureHereNewTemplate } from "../templates/futureHereNewTemplate.js";

const initFutureHereNew = (futureHereNewNode) => {
  futureHereNewNode.insertAdjacentHTML(
    "beforeend",
    futureHereNewTemplate(futureHereNewData)
  );
};

export default initFutureHereNew;