//const Handlebars = require("handlebars");
//import * as Handlebars from 'handlebars';

class Renderer{
    constructor(){

    }
    render(module: Module){
        this.emptyContainers()
        let curr_user: User = module.user
        let curr_pokemon: Pokemon = module.pokemon
        let curr_kanye: Kanye = module.kanye
        let curr_meat: Meat = module.meat
        let hello: number = 5;
        let bye: number = 6;

        this.renderUserInfo(curr_user)
        this.renderFriends(curr_user)
        this.renderKanye(curr_kanye)
        this.renderMeat(curr_meat)
        this.renderPokemon(curr_pokemon)
    }
    renderUserInfo(user: User){
        let fullname: string = user.first_name+" "+user.last_name
        const source = $('#user-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({profilePic:user.profilePic,name: fullname,city: user.city,state: user.state});
        $('.user-container').append(newHTML);
    }
    renderFriends(user: User){
        const source = $('#friends-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({friendsArr: user.friends});
        $('.friends-container').append(newHTML);
        let num : number = 7;
    }

    renderKanye(kanye: Kanye){
        const source = $('#quote-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({quote: kanye.quote});
        $('.quote-container').append(newHTML);
    }

    renderMeat(meat: Meat){
        const source = $('#meat-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({about: meat.aboutMe});
        $('.meat-container').append(newHTML);
    }

    renderPokemon(pokemon: Pokemon){
        const source = $('#pokemon-template').html();
        const template = Handlebars.compile(source);
        let fixedName: string = pokemon.name[0].toUpperCase() + pokemon.name.substring(1)
        let str: string = "Favorite Pokemon: "+fixedName;
        const newHTML = template({pokemonPic: pokemon.pokemonPic, name: str});
        $('.pokemon-container').append(newHTML);
    }

    emptyContainers(){
        $(".user-container").empty();
        $(".friends-container").empty();
        $(".quote-container").empty();
        $(".meat-container").empty();
        $(".pokemon-container").empty();
    }

}