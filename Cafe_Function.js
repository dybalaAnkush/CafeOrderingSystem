var customerData=[];

function getDate(){
    document.getElementById("date").innerHTML = "It is currently: " + new Date;
}
    

function storeData(){
    customerData[0] = document.getElementById("fullname").value;
    customerData[1] = document.getElementById("telnum").value;
    customerData[2] = document.getElementById("pickuptime").value;

    document.getElementById("contactinfo").style.display = "none";
    document.getElementById("order").style.display = "block";
}

function checkbox(item, itemNum){
    switch(itemNum){
        case '1': 
        if(item.checked){
            document.getElementById("1").style.visibility = "visible";
        } else{
            document.getElementById("1").style.visibility = "hidden";
        }
        break;

        case '2': 
        if(item.checked){
            document.getElementById("2").style.visibility = "visible";
        } else{
            document.getElementById("2").style.visibility = "hidden";
        }
        break;

        case '3': 
        if(item.checked){
            document.getElementById("3").style.visibility = "visible";
        } else{
            document.getElementById("3").style.visibility = "hidden";
        }
        break;
        
        case '4': 
        if(item.checked){
            document.getElementById("4").style.visibility = "visible";
        } else{
            document.getElementById("4").style.visibility = "hidden";
        }
        break;
        
        case '5': 
        if(item.checked){
            document.getElementById("5").style.visibility = "visible";
        } else{
            document.getElementById("5").style.visibility = "hidden";
        }
        break;
        
        case '6': 
        if(item.checked){
            document.getElementById("6").style.visibility = "visible";
        } else{
            document.getElementById("6").style.visibility = "hidden";
        }
        break;
        
        case '7': 
        if(item.checked){
            document.getElementById("7").style.visibility = "visible";
        } else{
            document.getElementById("7").style.visibility = "hidden";
        }
        break;
        
        case '8': 
        if(item.checked){
            document.getElementById("8").style.visibility = "visible";
        } else{
            document.getElementById("8").style.visibility = "hidden";
        }
        break;
        
        case '9': 
        if(item.checked){
            document.getElementById("9").style.visibility = "visible";
        } else{
            document.getElementById("9").style.visibility = "hidden";
        }
        break;
    }
}

function checkout(){
    document.getElementById("receipt").style.display = "block";
    var orderString = "";
    var spacesAndPrice = "";
    var totalPrice = 0.0;
    for(let i = 1; i <= 9; i++){
        if(document.getElementById(i).value != 0){
            switch(i){
                case 1: orderString += document.getElementById(i).value + " " + document.getElementById(i).name + "          $12.00"; totalPrice += 12.00; break;
                case 2: orderString += document.getElementById(i).value + " " + document.getElementById(i).name + "   $12.50"; totalPrice += 12.50; break;
                case 3: orderString += document.getElementById(i).value + " " + document.getElementById(i).name + "         $13.00"; totalPrice += 13.00; break;
                case 4: orderString += document.getElementById(i).value + " " + document.getElementById(i).name + "           $8.50"; totalPrice += 8.50; break;
                case 5: orderString += document.getElementById(i).value + " " + document.getElementById(i).name + " 	       $9.50"; totalPrice += 9.50; break;
                case 6: orderString += document.getElementById(i).value + " " + document.getElementById(i).name + "   $10.00"; totalPrice += 10.00; break;
                case 7: orderString += document.getElementById(i).value + " " + document.getElementById(i).name + "              $4.00"; totalPrice += 4.00; break;
                case 8: orderString += document.getElementById(i).value + " " + document.getElementById(i).name + "               $2.50"; totalPrice += 2.50; break;
                case 9: orderString += document.getElementById(i).value + " " + document.getElementById(i).name + "          $1.75"; totalPrice += 1.75; break;
            }
            orderString += "<br>";
        }
    }
    var totalPriceString = "Total Cost:            $" + totalPrice;
    document.getElementById("order").style.display = "none";
    document.getElementById("receiptcontactinfo").innerHTML = customerData[0] + "<br>" + customerData[1] + "<br>Pickup: " + customerData[2];
    document.getElementById("receiptorderinfo").innerHTML = "<pre>" + orderString + "<br><br>" + totalPriceString + "</pre>";
}
