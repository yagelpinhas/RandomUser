let moduleData = new Manager()
let renderer = new Renderer()


$("body").on("click", "#generateUser", async function() {
    await (moduleData.generate()).then(function(){
        renderer.render(moduleData)
        let a : number = 800;
    })
    
});


$("body").on("click", "#saveUser", async function() {
    localStorage.setItem('saved',JSON.stringify(moduleData))


    
    let a: number = 30;
    
});

$("body").on("click", "#loadUser", async function() {
    let obj = JSON.parse(localStorage.saved)
    let newModule: Manager = new Manager()
    //newModule.kanye=obj.kanye
    //newModule.meat=obj.meat
    //newModule.pokemon=obj.pokemon
    //newModule.user=obj.user
    newModule.changeFields(obj)
    let b: number = 30;
    renderer.render(newModule)
});




