import LastData from "../../mockData/LastData.js";
import { LastTemplate } from "../templates/LastTemplate.js";

const initLast = (LastNode) => {
  LastNode.insertAdjacentHTML(
    "beforeend",
    LastTemplate(LastData)
  );
};

export default initLast;