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
class User {
    constructor() {
        this.first_name = "";
        this.last_name = "";
        this.city = "";
        this.state = "";
        this.friends = [{ name: "" }];
        this.profilePic = "";
    }
    generate() {
        return __awaiter(this, void 0, void 0, function* () {
            this.friends.splice(0, 1);
            $.get("https://randomuser.me/api/?results=7").then(res => {
                let x = 2000;
                this.first_name = res.results[0].name.first;
                this.last_name = res.results[0].name.last;
                this.city = res.results[0].location.city;
                this.state = res.results[0].location.state;
                this.profilePic = res.results[0].picture.thumbnail;
                this.friends = new Array(6);
                for (let i = 1; i < 7; i++) {
                    let friend_first_name = res.results[i].name.first;
                    let friend_last_name = res.results[i].name.last;
                    let friend_full_name = friend_first_name + " " + friend_last_name;
                    this.friends[i - 1] = { name: friend_full_name };
                }
                console.log("End of generating a user: USER CLASS");
            });
        });
    }
}
class Pokemon {
    constructor() {
        this.name = "";
        this.pokemonPic = "";
    }
    generate() {
        return __awaiter(this, void 0, void 0, function* () {
            let randomNumber = Math.floor(Math.random() * 900);
            $.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`).then(res => {
                this.name = res.name;
                this.pokemonPic = res.sprites.front_default;
                console.log("END OF POKEMON");
            });
        });
    }
}
class Kanye {
    constructor() {
        this.quote = "";
    }
    generate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield $.get("https://api.kanye.rest").then(res => {
                this.quote = res.quote;
                console.log("END OF QUOTE");
            });
        });
    }
}
class Meat {
    constructor() {
        this.aboutMe = "";
    }
    generate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield $.get("https://baconipsum.com/api/?type=meat-and-filler").then(res => {
                this.aboutMe = res[0];
                console.log("END OF ABOUT ME");
            });
        });
    }
}
class Module {
    constructor() {
        this.user = new User();
        this.pokemon = new Pokemon();
        this.kanye = new Kanye();
        this.meat = new Meat();
    }
    generate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.user.generate();
            yield this.pokemon.generate();
            yield this.kanye.generate();
            yield this.meat.generate();
        });
    }
}
