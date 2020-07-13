function rpsGen(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    console.log(humanChoice);
    botChoice = rpsToChoice(rpsToInt());
    console.log(botChoice);
    var results = decideWinner(humanChoice, botChoice);
    console.log(results);
    var message = finalMessage(results); //[0,1]=>'You Lost'//Becoz Scissors Cut Paper
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);



    function rpsToInt() {
        return Math.floor(Math.random() * 3);
    }

    function rpsToChoice(number) {
        return ['rock', 'paper', 'scissors'][number];
    }

    function decideWinner(yourChoice, computerChoice) {
        var rpsDatabase = {
            'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
            'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
            'scissors': { 'scissors': 0.5, 'rock': 0, 'paper': 1 },
        }

        var yourScore = rpsDatabase[yourChoice][computerChoice]; //[paper][scissors]=>[1][3]=>0;
        var computerScore = rpsDatabase[computerChoice][yourChoice]; //[scissors][paper]=>[2][3]=>1;

        console.log(yourScore);
        console.log(computerScore);
        return [yourScore, computerScore];
    }

    function finalMessage([yourScore, computerScore]) {
        console.log(yourScore);
        if (yourScore === 0) {
            return { 'message': 'You Lost', 'color': 'red' };
        } else if (yourScore === 0.5) {
            return { 'message': 'You Tied', 'color': 'yellow' };
        } else if (yourScore === 1) {
            return { 'message': 'You Won', 'color': 'blue' };
        }
    }

    function rpsFrontEnd(yourImage, botImage, message) {
        console.log("hiiiiiiiiiii" + message['message']);
        var rpsImage = {
            'rock': document.getElementById('rock').src,
            'paper': document.getElementById('paper').src,
            'scissors': document.getElementById('scissors').src,
        }
        console.log(rpsImage[yourImage]);
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissors').remove();

        var humanDiv = document.createElement('div');
        var botDiv = document.createElement('div');
        var messageDiv = document.createElement('div');
        humanDiv.innerHTML = "<img src='" + rpsImage[yourImage] + "'>"
        messageDiv.innerHTML = "<h1 style='color:" + message['color'] + ";font-size:60px;padding:30px;'>" + message['message'] + "</h1>"
        botDiv.innerHTML = "<img src='" + rpsImage[botImage] + "'>"
        document.getElementById("flex-box").appendChild(humanDiv);
        document.getElementById("flex-box").appendChild(messageDiv);
        document.getElementById("flex-box").appendChild(botDiv);


    }

}