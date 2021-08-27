"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/API.ts":
/*!********************!*\
  !*** ./api/API.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API\": () => (/* binding */ API)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst API = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: \"http://localhost:8000\",\n  timeout: 2000\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvQVBJLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sTUFBTUMsR0FBRyxHQUFHRCxtREFBQSxDQUFhO0FBQzlCRyxFQUFBQSxPQUFPLEVBQUUsdUJBRHFCO0FBRTlCQyxFQUFBQSxPQUFPLEVBQUU7QUFGcUIsQ0FBYixDQUFaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY292aWQtMTkvLi9hcGkvQVBJLnRzP2ZkNGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgY29uc3QgQVBJID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogXCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIixcbiAgdGltZW91dDogMjAwMCxcbn0pO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiQVBJIiwiY3JlYXRlIiwiYmFzZVVSTCIsInRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/API.ts\n");

/***/ }),

/***/ "./api/Korea/Get/index.ts":
/*!********************************!*\
  !*** ./api/Korea/Get/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getKorea\": () => (/* binding */ getKorea)\n/* harmony export */ });\n/* harmony import */ var api_API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/API */ \"./api/API.ts\");\n\nconst getKorea = async () => {\n  return await api_API__WEBPACK_IMPORTED_MODULE_0__.API.get(\"/api/korea\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvS29yZWEvR2V0L2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFTyxNQUFNQyxRQUFRLEdBQUcsWUFBWTtBQUNsQyxTQUFPLE1BQU1ELDRDQUFBLENBQVEsWUFBUixDQUFiO0FBQ0QsQ0FGTSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvdmlkLTE5Ly4vYXBpL0tvcmVhL0dldC9pbmRleC50cz9iOTg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSSB9IGZyb20gXCJhcGkvQVBJXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRLb3JlYSA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIGF3YWl0IEFQSS5nZXQoXCIvYXBpL2tvcmVhXCIpO1xufTtcbiJdLCJuYW1lcyI6WyJBUEkiLCJnZXRLb3JlYSIsImdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/Korea/Get/index.ts\n");

/***/ }),

/***/ "./api/World/Get/index.ts":
/*!********************************!*\
  !*** ./api/World/Get/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWorld\": () => (/* binding */ getWorld)\n/* harmony export */ });\n/* harmony import */ var api_API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/API */ \"./api/API.ts\");\n\nconst getWorld = async () => {\n  return await api_API__WEBPACK_IMPORTED_MODULE_0__.API.get(\"/api/world\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvV29ybGQvR2V0L2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFTyxNQUFNQyxRQUFRLEdBQUcsWUFBWTtBQUNsQyxTQUFPLE1BQU1ELDRDQUFBLENBQVEsWUFBUixDQUFiO0FBQ0QsQ0FGTSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvdmlkLTE5Ly4vYXBpL1dvcmxkL0dldC9pbmRleC50cz8xNmVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSSB9IGZyb20gXCJhcGkvQVBJXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRXb3JsZCA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIGF3YWl0IEFQSS5nZXQoXCIvYXBpL3dvcmxkXCIpO1xufTtcbiJdLCJuYW1lcyI6WyJBUEkiLCJnZXRXb3JsZCIsImdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/World/Get/index.ts\n");

/***/ }),

/***/ "./containers/Main/index.tsx":
/*!***********************************!*\
  !*** ./containers/Main/index.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var api_Korea_Get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! api/Korea/Get */ \"./api/Korea/Get/index.ts\");\n/* harmony import */ var api_World_Get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! api/World/Get */ \"./api/World/Get/index.ts\");\n\n\n //api\n\n\n\n\nconst Main = () => {\n  console.log((0,api_Korea_Get__WEBPACK_IMPORTED_MODULE_2__.getKorea)());\n  console.log((0,api_World_Get__WEBPACK_IMPORTED_MODULE_3__.getWorld)());\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250YWluZXJzL01haW4vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBO0FBQ0E7O0FBRUEsTUFBTUcsSUFBSSxHQUFHLE1BQU07QUFDakJDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSix1REFBUSxFQUFwQjtBQUNBRyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsdURBQVEsRUFBcEI7QUFDQSxzQkFBTyw2SUFBUDtBQUNELENBSkQ7O0FBTUEsaUVBQWVDLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3ZpZC0xOS8uL2NvbnRhaW5lcnMvTWFpbi9pbmRleC50c3g/NzM3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8vYXBpXG5pbXBvcnQgeyBnZXRLb3JlYSB9IGZyb20gXCJhcGkvS29yZWEvR2V0XCI7XG5pbXBvcnQgeyBnZXRXb3JsZCB9IGZyb20gXCJhcGkvV29ybGQvR2V0XCI7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGdldEtvcmVhKCkpO1xuICBjb25zb2xlLmxvZyhnZXRXb3JsZCgpKTtcbiAgcmV0dXJuIDw+PC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImdldEtvcmVhIiwiZ2V0V29ybGQiLCJNYWluIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./containers/Main/index.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var containers_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! containers/Main */ \"./containers/Main/index.tsx\");\n\nvar _jsxFileName = \"/Users/tkendi/Github/covid-19/front-end/pages/index.tsx\";\n// import type { NextPage } from 'next'\n// import Head from 'next/head'\n// import Image from 'next/image'\n// import styles from '../styles/Home.module.css'\n// const Home: NextPage = () => {\n//   return (\n//     <div className={styles.container}>\n//       <Head>\n//         <title>Create Next App</title>\n//         <meta name=\"description\" content=\"Generated by create next app\" />\n//         <link rel=\"icon\" href=\"/favicon.ico\" />\n//       </Head>\n//       <main className={styles.main}>\n//         <h1 className={styles.title}>\n//           Welcome to <a href=\"https://nextjs.org\">Next.js!</a>\n//         </h1>\n//         <p className={styles.description}>\n//           Get started by editing{' '}\n//           <code className={styles.code}>pages/index.js</code>\n//         </p>\n//         <div className={styles.grid}>\n//           <a href=\"https://nextjs.org/docs\" className={styles.card}>\n//             <h2>Documentation &rarr;</h2>\n//             <p>Find in-depth information about Next.js features and API.</p>\n//           </a>\n//           <a href=\"https://nextjs.org/learn\" className={styles.card}>\n//             <h2>Learn &rarr;</h2>\n//             <p>Learn about Next.js in an interactive course with quizzes!</p>\n//           </a>\n//           <a\n//             href=\"https://github.com/vercel/next.js/tree/master/examples\"\n//             className={styles.card}\n//           >\n//             <h2>Examples &rarr;</h2>\n//             <p>Discover and deploy boilerplate example Next.js projects.</p>\n//           </a>\n//           <a\n//             href=\"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\"\n//             className={styles.card}\n//           >\n//             <h2>Deploy &rarr;</h2>\n//             <p>\n//               Instantly deploy your Next.js site to a public URL with Vercel.\n//             </p>\n//           </a>\n//         </div>\n//       </main>\n//       <footer className={styles.footer}>\n//         <a\n//           href=\"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\"\n//           target=\"_blank\"\n//           rel=\"noopener noreferrer\"\n//         >\n//           Powered by{' '}\n//           <span className={styles.logo}>\n//             <Image src=\"/vercel.svg\" alt=\"Vercel Logo\" width={72} height={16} />\n//           </span>\n//         </a>\n//       </footer>\n//     </div>\n//   )\n// }\n// export default Home\n\n\n\nconst MainPage = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(containers_Main__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 10\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBLE1BQU1FLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLHNCQUFPLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBRkQ7O0FBR0EsaUVBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3ZpZC0xOS8uL3BhZ2VzL2luZGV4LnRzeD9kYjc2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuLy8gaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuLy8gaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbi8vIGNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbi8vICAgICAgIDxIZWFkPlxuLy8gICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbi8vICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuLy8gICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4vLyAgICAgICA8L0hlYWQ+XG5cbi8vICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuLy8gICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuLy8gICAgICAgICAgIFdlbGNvbWUgdG8gPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZ1wiPk5leHQuanMhPC9hPlxuLy8gICAgICAgICA8L2gxPlxuXG4vLyAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbi8vICAgICAgICAgICBHZXQgc3RhcnRlZCBieSBlZGl0aW5neycgJ31cbi8vICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9e3N0eWxlcy5jb2RlfT5wYWdlcy9pbmRleC5qczwvY29kZT5cbi8vICAgICAgICAgPC9wPlxuXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG4vLyAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4vLyAgICAgICAgICAgICA8aDI+RG9jdW1lbnRhdGlvbiAmcmFycjs8L2gyPlxuLy8gICAgICAgICAgICAgPHA+RmluZCBpbi1kZXB0aCBpbmZvcm1hdGlvbiBhYm91dCBOZXh0LmpzIGZlYXR1cmVzIGFuZCBBUEkuPC9wPlxuLy8gICAgICAgICAgIDwvYT5cblxuLy8gICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvbGVhcm5cIiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbi8vICAgICAgICAgICAgIDxoMj5MZWFybiAmcmFycjs8L2gyPlxuLy8gICAgICAgICAgICAgPHA+TGVhcm4gYWJvdXQgTmV4dC5qcyBpbiBhbiBpbnRlcmFjdGl2ZSBjb3Vyc2Ugd2l0aCBxdWl6emVzITwvcD5cbi8vICAgICAgICAgICA8L2E+XG5cbi8vICAgICAgICAgICA8YVxuLy8gICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy90cmVlL21hc3Rlci9leGFtcGxlc1wiXG4vLyAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuLy8gICAgICAgICAgID5cbi8vICAgICAgICAgICAgIDxoMj5FeGFtcGxlcyAmcmFycjs8L2gyPlxuLy8gICAgICAgICAgICAgPHA+RGlzY292ZXIgYW5kIGRlcGxveSBib2lsZXJwbGF0ZSBleGFtcGxlIE5leHQuanMgcHJvamVjdHMuPC9wPlxuLy8gICAgICAgICAgIDwvYT5cblxuLy8gICAgICAgICAgIDxhXG4vLyAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tL25ldz91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4vLyAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuLy8gICAgICAgICAgID5cbi8vICAgICAgICAgICAgIDxoMj5EZXBsb3kgJnJhcnI7PC9oMj5cbi8vICAgICAgICAgICAgIDxwPlxuLy8gICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFZlcmNlbC5cbi8vICAgICAgICAgICAgIDwvcD5cbi8vICAgICAgICAgICA8L2E+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgPC9tYWluPlxuXG4vLyAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4vLyAgICAgICAgIDxhXG4vLyAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4vLyAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbi8vICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbi8vICAgICAgICAgPlxuLy8gICAgICAgICAgIFBvd2VyZWQgYnl7JyAnfVxuLy8gICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxuLy8gICAgICAgICAgICAgPEltYWdlIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiB3aWR0aD17NzJ9IGhlaWdodD17MTZ9IC8+XG4vLyAgICAgICAgICAgPC9zcGFuPlxuLy8gICAgICAgICA8L2E+XG4vLyAgICAgICA8L2Zvb3Rlcj5cbi8vICAgICA8L2Rpdj5cbi8vICAgKVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBIb21lXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gXCJjb250YWluZXJzL01haW5cIjtcblxuY29uc3QgTWFpblBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiA8TWFpbkNvbnRhaW5lciAvPjtcbn07XG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk1haW5Db250YWluZXIiLCJNYWluUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();