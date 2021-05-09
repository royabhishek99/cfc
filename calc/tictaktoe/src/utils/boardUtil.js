let createBoard = function(){
    let board = [[-1,-1,-1],
                 [-1,-1,-1],
                 [-1,-1,-1]];  //ye ek naya board hai

    return board;
};

export {createBoard};  //exported an object which has a property, i.e. createBoard. So when it is imported in any other place, only this property will be imported, not the whole thing.(Object Destructure)