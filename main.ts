let moduleData = new Manager()
let renderer = new Renderer()
let lsmanager = new localStorageManager();

$("body").on("click", "#generateUser", async function() {
    await (moduleData.generate()).then(function(){
        renderer.render(moduleData)
        let a : number = 800;
    })
    
});


$("body").on("click", "#saveUser", async function() {
    //localStorage.setItem('saved',JSON.stringify(moduleData))
    lsmanager.addManager(moduleData)

    
    let a: number = 30;
    
});




/*


$("body").on("click", "#loadUser", async function() {
    let obj = JSON.parse(localStorage.saved)
    let newModule: Manager = new Manager()
    newModule.changeFields(obj)
    let b: number = 30;
    renderer.render(newModule)
});

*/ 

//new function
$("body").on("click", "#loadUser", function() {
    let saved_people: any = lsmanager.getPeopleSaved()
    renderer.renderSavedPeople(saved_people)
});


$("body").on("click",".tool",function(){
    let nameToRender = $(this).text()
    let relevantManager: Manager = lsmanager.getManager(nameToRender)
    renderer.render(relevantManager)
})
