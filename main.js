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
let moduleData = new Manager();
let renderer = new Renderer();
$("body").on("click", "#generateUser", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield (moduleData.generate()).then(function () {
            renderer.render(moduleData);
            let a = 800;
        });
    });
});
$("body").on("click", "#saveUser", function () {
    return __awaiter(this, void 0, void 0, function* () {
        localStorage.setItem('saved', JSON.stringify(moduleData));
        let a = 30;
    });
});
$("body").on("click", "#loadUser", function () {
    return __awaiter(this, void 0, void 0, function* () {
        let obj = JSON.parse(localStorage.saved);
        let newModule = new Manager();
        //newModule.kanye=obj.kanye
        //newModule.meat=obj.meat
        //newModule.pokemon=obj.pokemon
        //newModule.user=obj.user
        newModule.changeFields(obj);
        let b = 30;
        renderer.render(newModule);
    });
});
