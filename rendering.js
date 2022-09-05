"use strict";
//const Handlebars = require("handlebars");
//import * as Handlebars from 'handlebars';
class Renderer {
    constructor() {
    }
    render(module) {
        let curr_user = module.user;
        let curr_pokemon = module.pokemon;
        let curr_kanye = module.kanye;
        let curr_meat = module.meat;
        let hello = 5;
        let bye = 6;
        this.renderFriends();
    }
    renderFriends() {
        const source = $('#friends-template').html();
        const template = Handlebars.compile(source);
        let num = 7;
    }
}
