$(document).ready(function(){
	var testNumLength = function(number) {

        if (operator==="sqrt" || operator ==="/"){
            
            if (number.length > 9) {
                    totaldiv.text(number.substr(0,9));
                }

        }

        else {
             if (number.length > 9) {
                totaldiv.text(number.substr(number.length-9,9));
                if (number.length > 15) {
                    number = "";
                    totaldiv.text("Err");
                }
            } 
        }

    };
	var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");
    var numOfDecs = 0;
    
    $("#decimal").click(function(){
        var x;
        
        for( x in number ){
            
            if(number[x] === "."){
                numOfDecs++;
                }
   
            } 
        
        if(numOfDecs === 0){
        
        number += $(this).text();
		totaldiv.text(number);
		testNumLength(number); 
            
            }
    
        
    });
    
    $("#numbers a").not("#clear,#clearall").click(function(){
		

        number += $(this).text();
		totaldiv.text(number);
		testNumLength(number);
    });
    $("#operators a, #side a").not("#equals,#decimal").click(function(){
		
        if ($(this).attr("id") === "sqrt"){
		    operator = "sqrt";
		    $("#equals").click();
		    
		    return;
		    }
        else if ($(this).attr("id") === "times"){
            operator = "x";
 
            }
        else if ($(this).attr("id") === "divide"){
            operator = "/";
 
            }
        else {

        operator = $(this).text();
        
            }
       
        if(operator === "-" && number ===""){
           totaldiv.text(operator);
           return number = "-";

        }
		
		newnumber = number;
		number = "";
		totaldiv.text(operator);
    });
    $("#clear,#clearall").click(function(){
		number = "";
		totaldiv.text("0");
		if ($(this).attr("id") === "clearall") {
			newnumber = "";
		}
    });
    //Add your last .click() here!
    $("#equals").click(function(){
    	if (operator === "+"){
            //console.log("im in plus"+ "number =" +number+ "newnumber=" + newnumber);

    		number = (parseFloat(number, 10) + parseFloat(newnumber,10)).toString(10);

            //console.log("after adding"+number);
    	} else if (operator === "-"){
    		number = (parseFloat(newnumber, 10) - parseFloat(number,10)).toString(10);
    	} else if (operator === "/"){
    		number = (parseFloat(newnumber, 10) / parseFloat(number,10)).toString(10);
    	} else if (operator === "x"){
    		number = (parseFloat(newnumber, 10) * parseFloat(number,10)).toString(10);
    	} else if (operator === "sqrt"){
    		number = ( Math.sqrt(parseFloat(number,10))).toString(10); 
       }  else if (operator === "^"){
    		number = (Math.pow(parseFloat(newnumber, 10),parseFloat(number,10))).toString(10);
    	}
    	
    	totaldiv.text(number);
    	testNumLength(number);

    });
});