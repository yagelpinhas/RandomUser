"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let module = new Module();
let renderer = new Renderer();
//localStorage.setItem('saved',JSON.stringify({}))
$("body").on("click", "#generateUser", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield (module.generate()).then(function () {
            renderer.render(module);
            let a = 800;
        });
    });
});
$("body").on("click", "#saveUser", function () {
    return __awaiter(this, void 0, void 0, function* () {
        localStorage.setItem('saved', JSON.stringify(module));
        let a = 30;
    });
});
$("body").on("click", "#loadUser", function () {
    return __awaiter(this, void 0, void 0, function* () {
        let obj = JSON.parse(localStorage.saved);
        let newModule = new Module();
        newModule.kanye = obj.kanye;
        newModule.meat = obj.meat;
        newModule.pokemon = obj.pokemon;
        newModule.user = obj.user;
        let b = 30;
        renderer.render(newModule);
    });
});
