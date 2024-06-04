document.addEventListener('DOMContentLoaded', function(){
    const mainScreen = document.getElementById("main-screen");
    const rating = document.querySelectorAll(".num");
    const submit = document.getElementById("submit-btn");
    const thankYouScreen = document.getElementById("thank-you-message");
    const selectedRating = document.getElementById("selected-rating");
    let val;

    

    function displayRating(event){
        //prevents form from submitting
        event.preventDefault();
        //show value of btn
        val = event.target.value;
        selectedRating.innerHTML = `You selected ${val} out of 5`;

        //resets button to defaul css
        rating.forEach(btn =>{
            btn.style.backgroundColor = "";
            btn.style.color = "hsl(0, 0%, 100%)";
        });

        //gives button a new style when clicked
        event.target.style.backgroundColor = "hsl(0, 0%, 100%)";
        event.target.style.color = "hsl(0, 0%, 0%)";
    }


    function displayThanks(event){
        event.preventDefault();
        const warning = document.getElementById("warning");

        if (val !== undefined) {
            mainScreen.style.display = "none";
            thankYouScreen.style.display = "flex";
            
            
        }else{
            warning.style.display = "block";
        }
    }



    //loops through rating btn
    rating.forEach(btn =>{
        btn.addEventListener('click', displayRating);
    });

    submit.addEventListener('click', displayThanks);

});