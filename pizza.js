$(document).ready(function (){
    $("#tabs a").on("click", showTab);

    $("form#contents").on("submit", placeOrder);

    $("form#whereabouts").on("submit", placeOrder);

    $("form#recap").on("submit", placeOrder);
});

function placeOrder(event)
{
    event.preventDefault();

    //get pizza size
    let checkedSize = $("input[name=size]:checked");


    //declare variable to hold all of the subtotal
    let subtotal = 0;

    //variable for the crust size
    let pizzaSize = "";

    checkedSize.each(function (){
        subtotal += $(this).data("price");

        pizzaSize += $(this).val();
    });


    //get pizza crust
    let checkedCrust = $("input[name=crust]:checked");

    //variable to hold crust selected
    let pizzaCrust = "";

    checkedCrust.each(function (){
        pizzaCrust += $(this).val();
    });


    //get vegetables that are checked
    let checkedVeggies = $("input[name=veggies]:checked");

    //variable to hold vegetables selected
    let pizzaVegetables = "";

    checkedVeggies.each(function (){
        pizzaVegetables += $(this).val();
    });

    //get checked meat
    let checkedMeat = $("input[name=meat]:checked");

    //variable for meat selected
    let pizzaMeat = "";

    checkedMeat.each(function (){
        pizzaMeat += $(this).val();
    });

    //get the name
    let clientFirstName = $("input#fName").val();

    //get the last name
    let clientLastName = $("input#lName").val();

    //get the phone #
    let clientPhoneNumber = $("input#pNumber").val();


    //get the street address
    let clientStreetAddress = $("input#sAddress").val();

    // get the apt or suite
    let clientApartmentOrSuite = $("input#apartment").val();

    // get the city
    let clientCity = $("input#city").val();

    // get the client state
    let clientState = $("input#state").val();

    // get the client zip code
    let clientZipCode = $("input#zCode").val();

    //display the clients name
    $("#nameOutput").text(`${clientFirstName} ${clientLastName}`);

    //display the Clients address
    $("#addressOutput").text(`${clientStreetAddress}`);

    //display the apartment
    $("#apartmentOutput").text(`${clientApartmentOrSuite}`)

    //display the city
    $("#cityOutput").text(`${clientCity}`)

    //display the state
    $("#stateOutput").text(`${clientState.toUpperCase()}`)

    //display the zip code
    $("#zipCodeOutput").text(`${clientZipCode}`)

    //display their phone number
    $("#phoneNumber").text(clientPhoneNumber);

    //display the pizza size
    $("#sizeOutput").text(pizzaSize);

    //display the crust
    $("#crustOutput").text(pizzaCrust);

    //display the toppings
    $("#veggieOutput").text(pizzaVegetables);

    $("#meatOutput").text(pizzaMeat);

    //display the subtotal
    $("#subtotalOutput").text(subtotal.toFixed(2));

    //display the tax
    let tax = 0.051 * subtotal
    $("#taxOutput").text(tax.toFixed(2));

    //display the fee for the pizza
    let fee = 2.00
    $("#deliveryFeeOutput").text(fee.toFixed(2));

    //display the grand total
    let orderTotal = subtotal + tax + fee;
    $("#grandTotalOutput").text(orderTotal.toFixed(2));

    //code trying to make the button go through different tabs that's making me
    //want to throw my computer out a window
    $('#goToNew').click(function(){
        $('a[href="#location"]').click();
    });

    $('#goToCheckOut').click(function (){
        $('a[href="#summary"]').click();
    });
}


function showTab(event) {
    event.preventDefault();
    $(this).tab("show");
}