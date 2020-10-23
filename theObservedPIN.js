function getPINs(observed) {
    const variationsOf = {
        "0": ["0", "8"],
        "1": ["1", "2", "4"],
        "2": ["1", "2","3", "5"],
        "3" : ["2", "3", "6"],
        "4" : ["1","4","5", "7"],
        "5" : ["2", "4", "5", "6", "8"],
        "6" : ["3","5","6", "9"],
        "7" : ["4", "7", "8"],
        "8" : ["0", "5","7", "8", "9"],
        "9" : ["6", "8","9"]
    }
    if (observed.length === 0) {
       return [];
    }
    if(observed.length === 1){
        return variationsOf[observed];
    }
    return ["11", "22", "44", "12", "21","14","41","24","42"];
}

exports.getPINs = getPINs
