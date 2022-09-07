"use strict";
//const Handlebars = require("handlebars");
//import * as Handlebars from 'handlebars';
class Renderer {
    constructor() {
    }
    render(module) {
        this.emptyContainers();
        let curr_user = module.user;
        let curr_pokemon = module.pokemon;
        let curr_kanye = module.kanye;
        let curr_meat = module.meat;
        let hello = 5;
        let bye = 6;
        this.renderUserInfo(curr_user);
        this.renderFriends(curr_user);
        this.renderKanye(curr_kanye);
        this.renderMeat(curr_meat);
        this.renderPokemon(curr_pokemon);
    }
    renderUserInfo(user) {
        let fullname = user.first_name + " " + user.last_name;
        const source = $('#user-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ profilePic: user.profilePic, name: fullname, city: user.city, state: user.state });
        $('.user-container').append(newHTML);
    }
    renderFriends(user) {
        const source = $('#friends-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ friendsArr: user.friends });
        $('.friends-container').append(newHTML);
        let num = 7;
    }
    renderKanye(kanye) {
        const source = $('#quote-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ quote: kanye.quote });
        $('.quote-container').append(newHTML);
    }
    renderMeat(meat) {
        const source = $('#meat-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ about: meat.aboutMe });
        $('.meat-container').append(newHTML);
    }
    renderPokemon(pokemon) {
        const source = $('#pokemon-template').html();
        const template = Handlebars.compile(source);
        let fixedName = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
        let str = "Favorite Pokemon: " + fixedName;
        const newHTML = template({ pokemonPic: pokemon.pokemonPic, name: str });
        $('.pokemon-container').append(newHTML);
    }
    emptyContainers() {
        $(".user-container").empty();
        $(".friends-container").empty();
        $(".quote-container").empty();
        $(".meat-container").empty();
        $(".pokemon-container").empty();
    }
    renderSavedPeople(managers) {
        $('#dropup-content').empty();
        const source = $('#toolbar-template').html();
        const template = Handlebars.compile(source);
        let names = [];
        for (let i = 0; i < managers.length; i++) {
            let personName = JSON.parse(managers[i]).user.first_name;
            names.push({ name: personName });
        }
        const newHTML = template({ namesArr: names });
        $('#dropup-content').append(newHTML);
    }
}
