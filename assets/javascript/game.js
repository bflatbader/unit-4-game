var selectedChar = null;
var charHP = 0;
var defender = null;
var defHP = 0;

$('#jynCard').on("click", function() {
    if (selectedChar == null){
        selectedChar = "jyn";
        charHP = 120;
    } else {
        defender = "jyn";
        defHP = 120;
    }
});

$('#biggsCard').on("click", function() {
    if (selectedChar == null){
        selectedChar = "biggs";
        charHP = 100;
    } else {
        defender = "biggs";
        defHP = 100;
    }
});

$('#bobaCard').on("click", function() {
    if (selectedChar == null){
        selectedChar = "boba";
        charHP = 150;
    } else {
        defender = "boba";
        defHP = 150;
    }
});

$('#vaderCard').on("click", function() {
    if (selectedChar == null){
        selectedChar = "vader";
        charHP = 120;
    } else {
        defender = "vader";
        defHP = 120;
    }
});