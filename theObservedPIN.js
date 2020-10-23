function getPINs(observed) {
    const variationsOf = {
        "0": ["0", "8"],
        "1": ["1", "2", "4"],
        "5": ["2", "4", "5", "6", "8"]

    }
    if (observed.length === 0) {
       return [];
    }
    return variationsOf[observed] 
    
    

}

exports.getPINs = getPINs
