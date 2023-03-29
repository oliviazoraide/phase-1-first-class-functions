function catsAreBest() {
    console.log("Cats are the best!")
}

function receivesAFunction(catsAreBest) {
 catsAreBest();
};

function returnsANamedFunction() {
    const dogsAreGreat = () => "Dogs are great!";
    return dogsAreGreat;
}

function returnsAnAnonymousFunction() {
    return function () {
        "Cats are the best animals in the world!"
    };
}