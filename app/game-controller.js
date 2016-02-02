app.controller('GameController', function ($scope, $timeout, GameService) {
	
    //Create two card variables to keep track of the current selections DONE
    $scope.card1 = null;
    $scope.card2 = null;
    
    //Add to $scope a way to track number of guesses, and total matches DONE
    $scope.attempts = 0;
    $scope.totalMatches = 0;
    //This is a freebie we are using the GameService to help keep our controller clean. The GameServie will be in charge of creating and shuffling the deck.DONE
    $scope.deck = GameService.getDeck();
	
	
    //Write a function that accepts a card object on click. DONE
    $scope.selectCard = function (card) {
        if(card.show === true){
            return;
        }
        card.show = true;
        if ($scope.card1 === null) {
            $scope.card1 = card
            return;
        } else if ($scope.card2 === null) {
            $scope.card2 = card
            if ($scope.isMatch($scope.card1, $scope.card2) === true) {
                $scope.totalMatches++
                $scope.checkVictory($scope.card1, $scope.card2)
                $scope.resetCards()
            }
            $timeout(function () {
                if($scope.card1) $scope.card1.show = false;
                if($scope.card1) $scope.card2.show = false;
                $scope.resetCards()
            }, 500);
        };
    };
    //Before assingning card1 or card2 check to make sure both cards are falsey DONE
    //This function should set either card1 or card2 depending on the order of selection DONE
    //set card.show to true DONE
    //if this is card 1 then return to short circut the function DONE
    //if card1 and card2 isMatch of card 1 then resetCards() increase the totalMatches and checkVictory() DONE
    //otherwise this is where we will need to use $timeout with a delay of 1000 
    //set card1.show = false DONE
    //card2.show = false DONE
    //resetCards() DONE
	
	
    //write a function to resetCards DONE
    //it will empty the two card variables above and increase the number of attempts DONE
    $scope.resetCards = function () {
        $scope.card1 = null;
        $scope.card2 = null;
        $scope.attempts++;
    };
	
    //write a checkVictory function that will set $scope.victory = true if the totalMatches is half the length of the deck
    $scope.checkVictory = function () {
        if ($scope.totalMatches === 12) {
            $scope.victory = true;
        };
    };
    //write an isMatch function that accepts two cards and returns true or false if the card titles match. DONE
    $scope.isMatch = function (card1, card2) {
        if (card1.title === card2.title) {
            $scope.totalMathches++
            return true;
        } else {
            return false;
        };
    };
	
    //Bonus: Write a function that can reset the game
	
});