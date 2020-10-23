const observedPin  = require("./theObservedPIN")
it ("un pin vide donne un résultat vide",()=>{
    expect(observedPin.getPINs("")).toStrictEqual([]);
})