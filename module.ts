class User{
    first_name: string;
    last_name: string;
    city: string;
    state: string;
    friends: {name: string}[];
    profilePic: string;
  
    constructor(){
        this.first_name=""
        this.last_name=""
        this.city=""
        this.state=""
        this.friends=[{name:""}]
        this.profilePic=""
    }
    async generate(){
        this.friends.splice(0,1)
         $.get("https://randomuser.me/api/?results=7").then(res =>{
            let x : number = 2000;
            this.first_name = res.results[0].name.first;
            this.last_name = res.results[0].name.last;
            this.city= res.results[0].location.city
            this.state = res.results[0].location.state
            this.profilePic = res.results[0].picture.thumbnail
            this.friends = new Array<{name: string}>(6);
            for(let i =1;i<7;i++){
                let friend_first_name: string = res.results[i].name.first;
                let friend_last_name: string = res.results[i].name.last;
                let friend_full_name =friend_first_name+" "+ friend_last_name;
                this.friends[i-1]={name: friend_full_name}
                
            }
            console.log("End of generating a user: USER CLASS")
        })
    }

  }

  class Pokemon{
    name: string;
    pokemonPic: string;
    constructor(){
        this.name = ""
        this.pokemonPic="";
    }
    async generate(){
        let randomNumber: number = Math.floor(Math.random() * 900)
        $.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`).then(res=>{  
        this.name = res.name
        this.pokemonPic=res.sprites.front_default
        console.log("END OF POKEMON")
    })
    }
  }

  class Kanye{
    quote: string
    constructor(){
        this.quote=""
    }
    async generate(){
        await $.get("https://api.kanye.rest").then(res=>{
           this.quote = res.quote;
            console.log("END OF QUOTE")
        })
    }
  }

  class Meat{
    aboutMe: string
    constructor(){
        this.aboutMe=""
    }
    async generate(){
        await $.get("https://baconipsum.com/api/?type=meat-and-filler").then(res=>{
            this.aboutMe = res[0]
            console.log("END OF ABOUT ME")
        })
    }
  }

  
  class Manager{
    user: User;
    pokemon: Pokemon;
    kanye : Kanye;
    meat: Meat;
    constructor(){
        this.user=new User()
        this.pokemon=new Pokemon()
        this.kanye = new Kanye()
        this.meat = new Meat()
    }

    async generate(){
        await this.user.generate()
        await this.pokemon.generate()
        await this.kanye.generate()
        await this.meat.generate()
    }

    changeFields(obj: any){
        this.kanye=obj.kanye
        this.meat=obj.meat
        this.pokemon=obj.pokemon
        this.user=obj.user
    }
  }
  
  
