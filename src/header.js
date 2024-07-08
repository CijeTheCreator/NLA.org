// import { footer_html } from "../Html_Templates/Footer_Html";
// import { header_html } from "../Html_Templates/Header_Html";
// import {
//   addEventListener,
//   insertInnerHtml,
//   removeAllHrefs,
//   selectElement,
//   selectElements,
// } from "../Utils/General_Utils";
// import { Routes, Selectors } from "../Utils/Selectors_And_PlaceHolders";

// const logoOnClickHandler = (e) => {
//   e.preventDefault();
//   window.location.href = Routes.Homepage;
// };

// const articlesOnClickHandler = (e) => {
//   e.preventDefault();
//   window.location.href = Routes.Articles;
// };

// const newsOnClickHandler = (e) => {
//   e.preventDefault();
//   window.location.href = Routes.News;
// };

// const searchOnClickHandler = (e) => {
//   e.preventDefault();
//   window.location.href = Routes.Articles;
// };

// const attachEventListeners = (e) => {
//   addEventListener(Selectors.Navbar.logo, logoOnClickHandler);
//   addEventListener(Selectors.Navbar.articles_button, articlesOnClickHandler);
//   addEventListener(Selectors.Navbar.news_button, newsOnClickHandler);
//   addEventListener(Selectors.Navbar.search_button, searchOnClickHandler);
// };

// //Insert Header
// insertInnerHtml("header", header_html);
// insertInnerHtml("footer", footer_html);

// removeAllHrefs();
// attachEventListeners();

// // selectElement(Selectors.Footer.Facebook).href =
// //   "https://web.facebook.com/nigerianlibrary/";

// // selectElement(Selectors.Footer.Twitter).href =
// //   "https://twitter.com/nla_ng?lang=en";
