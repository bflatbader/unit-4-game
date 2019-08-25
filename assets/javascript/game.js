var selectedChar = null;
var charHP = 0;
var defender = null;
var defHP = 0;
var cards = ["#jynCard", "#biggsCard", "#bobaCard", "#vaderCard"];

$('#jynCard').on("click", function() {
    if (selectedChar == null){
        selectedChar = "#jynCard";
        charHP = 120;

        for(i = 0; i < cards.length; i++){ 
            if ( cards[i] === selectedChar) {
                $(this).removeClass("bg-secondary");
                $(this).addClass("bg-light border border-success");
                $('#charText').text("Your Character");
            } else {
                defender = "#def" + [i];
                $(defender).append($(cards[i]));
                $(cards[i]).removeClass("bg-secondary");
                $(cards[i]).addClass("bg-dark");
                $(cards[i]).addClass("text-white");
            }
         }
    } else {
        defender = "jyn";
        defHP = 120;
        $(this).addClass("border border-danger");
    }
});

$('#biggsCard').on("click", function() {
    if (selectedChar == null){
        selectedChar = "biggs";
        charHP = 100;
    } else {
        defender = "biggs";
        defHP = 100;
        $(this).addClass("border border-danger");
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