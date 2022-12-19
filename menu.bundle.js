/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function menu() {
    const menu = document.createElement('div');
    menu.classList.add("menu");
    menu.id = "menu";
    const margarita = new food("Margarita", "Tomato sauce, Mozzarella, Tomato")
    const meat_pizza = new food("Carne", "Tomato Sauce, Mozzarella, Tomato, Ham, Bacon");
    const Garbonara = new food("Garbonara", "Spaghetti, Garbonara Sauce, Shredded Peccorino");
    const Napolitana = new food("Napolitana", "Spaghetti, Napolitana Sauce, Shredded Parmezan");
    const Bologneze = new food("Bologneze", "Spaghetti, Bologneze, Shredded Pecorino");
    const Snizzel = new food("Snizzel", "Chicken fillet (comes with fries)");
    const Salad1 = new food("Iceberg Orange", "Iceberg, orange slices, orange dressing, cheese, nuts");
    const Salad2 = new food("Ceasar salad", "Iceberg, chicken, egg, anchovies, garlic, Parmesan");
    menu.appendChild(margarita.card);
    menu.appendChild(meat_pizza.card);
    menu.appendChild(Garbonara.card);
    menu.appendChild(Napolitana.card);
    menu.appendChild(Bologneze.card);
    menu.appendChild(Snizzel.card);
    menu.appendChild(Salad1.card);
    menu.appendChild(Salad2.card);
    return menu;
}

class food {
    constructor(name, ingredients) {
        const h3 = document.createElement('h3');
        h3.innerHTML = name;
        const desc = document.createElement('p');
        desc.innerHTML = ingredients;
        const card = document.createElement('div');
        card.appendChild(h3);
        card.appendChild(desc);
        card.classList.add('card');
        this.card = card;
    };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImZ1bmN0aW9uIG1lbnUoKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgbWVudS5pZCA9IFwibWVudVwiO1xuICAgIGNvbnN0IG1hcmdhcml0YSA9IG5ldyBmb29kKFwiTWFyZ2FyaXRhXCIsIFwiVG9tYXRvIHNhdWNlLCBNb3p6YXJlbGxhLCBUb21hdG9cIilcbiAgICBjb25zdCBtZWF0X3BpenphID0gbmV3IGZvb2QoXCJDYXJuZVwiLCBcIlRvbWF0byBTYXVjZSwgTW96emFyZWxsYSwgVG9tYXRvLCBIYW0sIEJhY29uXCIpO1xuICAgIGNvbnN0IEdhcmJvbmFyYSA9IG5ldyBmb29kKFwiR2FyYm9uYXJhXCIsIFwiU3BhZ2hldHRpLCBHYXJib25hcmEgU2F1Y2UsIFNocmVkZGVkIFBlY2Nvcmlub1wiKTtcbiAgICBjb25zdCBOYXBvbGl0YW5hID0gbmV3IGZvb2QoXCJOYXBvbGl0YW5hXCIsIFwiU3BhZ2hldHRpLCBOYXBvbGl0YW5hIFNhdWNlLCBTaHJlZGRlZCBQYXJtZXphblwiKTtcbiAgICBjb25zdCBCb2xvZ25lemUgPSBuZXcgZm9vZChcIkJvbG9nbmV6ZVwiLCBcIlNwYWdoZXR0aSwgQm9sb2duZXplLCBTaHJlZGRlZCBQZWNvcmlub1wiKTtcbiAgICBjb25zdCBTbml6emVsID0gbmV3IGZvb2QoXCJTbml6emVsXCIsIFwiQ2hpY2tlbiBmaWxsZXQgKGNvbWVzIHdpdGggZnJpZXMpXCIpO1xuICAgIGNvbnN0IFNhbGFkMSA9IG5ldyBmb29kKFwiSWNlYmVyZyBPcmFuZ2VcIiwgXCJJY2ViZXJnLCBvcmFuZ2Ugc2xpY2VzLCBvcmFuZ2UgZHJlc3NpbmcsIGNoZWVzZSwgbnV0c1wiKTtcbiAgICBjb25zdCBTYWxhZDIgPSBuZXcgZm9vZChcIkNlYXNhciBzYWxhZFwiLCBcIkljZWJlcmcsIGNoaWNrZW4sIGVnZywgYW5jaG92aWVzLCBnYXJsaWMsIFBhcm1lc2FuXCIpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWFyZ2FyaXRhLmNhcmQpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVhdF9waXp6YS5jYXJkKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKEdhcmJvbmFyYS5jYXJkKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKE5hcG9saXRhbmEuY2FyZCk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChCb2xvZ25lemUuY2FyZCk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChTbml6emVsLmNhcmQpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoU2FsYWQxLmNhcmQpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoU2FsYWQyLmNhcmQpO1xuICAgIHJldHVybiBtZW51O1xufVxuXG5jbGFzcyBmb29kIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBpbmdyZWRpZW50cykge1xuICAgICAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGgzLmlubmVySFRNTCA9IG5hbWU7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2MuaW5uZXJIVE1MID0gaW5ncmVkaWVudHM7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChoMyk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgICAgICB0aGlzLmNhcmQgPSBjYXJkO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9