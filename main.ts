let module = new Module()
let renderer = new Renderer()

$("body").on("click", "#generateUser", async function() {
    await (module.generate()).then(function(){
        renderer.render(module)
        let a : number = 32;
    })
    
});

