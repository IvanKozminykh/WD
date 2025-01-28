import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";
import initFutureHereNew from "./../components/initFutureHereNew.js";
import initEarlyAccess from "./../components/initEarlyAccess.js";
import initBlog from "./../components/initBlog.js"
import initLast from "./../components/initLast.js"

const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section future_here_new"></section>
    <section class="section early_access"></section>
    <section class="section Blog"></section>
    <section class="Last"></section>
  `;

  rootNode.insertAdjacentHTML("beforeend", template); 
};

const homePage = () => {
  // инициализация элементов страницы
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  // инициализация шапки страницы с мок датой
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  // инициализация хиро раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация хиро раздела
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация хиро раздела
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  // инициализация раздела "Превосходя все ожидания"
  const futureHereNewNode = rootNode.querySelector(".future_here_new");
  initFutureHereNew(futureHereNewNode);

  const earlyAccessNode = rootNode.querySelector(".early_access");
  initEarlyAccess(earlyAccessNode);  

  const BlogNode = rootNode.querySelector(".Blog");
  initBlog(BlogNode);

  const LastNode = rootNode.querySelector(".Last");
  initLast(LastNode);

  // инициализация бургера для адаптивного меню
  initBurger(headerNode);
};

export default homePage;
