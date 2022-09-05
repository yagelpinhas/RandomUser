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
        this.renderUserInfo(curr_user);
        this.renderFriends(curr_user);
    }
    renderUserInfo(user) {
        let fullname = user.first_name + " " + user.last_name;
        const source = $('#user-template').html();
        //const template = Handlebars.compile(source);
    }
    renderFriends(user) {
        const source = $('#friends-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ friendsArr: user.friends });
        $('.friends-container').append(newHTML);
        let num = 7;
    }
}
