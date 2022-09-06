let module = new Module()
let renderer = new Renderer()

//localStorage.setItem('saved',JSON.stringify({}))
$("body").on("click", "#generateUser", async function() {
    await (module.generate()).then(function(){
        renderer.render(module)
        let a : number = 800;
    })
    
});


$("body").on("click", "#saveUser", async function() {
    localStorage.setItem('saved',JSON.stringify(module))


    
    let a: number = 30;
    
});

$("body").on("click", "#loadUser", async function() {
    let obj = JSON.parse(localStorage.saved)
    let newModule: Module = new Module()
    newModule.kanye=obj.kanye
    newModule.meat=obj.meat
    newModule.pokemon=obj.pokemon
    newModule.user=obj.user
    let b: number = 30;
    renderer.render(newModule)
});




