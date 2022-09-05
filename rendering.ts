//const Handlebars = require("handlebars");
//import * as Handlebars from 'handlebars';

class Renderer{
    constructor(){

    }

    render(module: Module){
        let curr_user: User = module.user
        let curr_pokemon: Pokemon = module.pokemon
        let curr_kanye: Kanye = module.kanye
        let curr_meat: Meat = module.meat
        let hello: number = 5;
        let bye: number = 6;

        this.renderFriends()
    }

    renderFriends(){
        const source = $('#friends-template').html();
        //const template = Handlebars.compile(source);
        let num : number = 7;

    }
}