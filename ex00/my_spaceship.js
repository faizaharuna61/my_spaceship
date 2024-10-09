function my_spaceship(flightPath){
    flightPathUpper = flightPath.toUpperCase();
    
    rotation = ["up", "down", "left", "up", "right", "down", "left"];
    index = 3;
    x = 0;
    y = 0;
    output = "";
    
	for(i = 0; i<flightPathUpper.length; i++){
        
	    while(flightPathUpper[i]!="R"&&flightPathUpper[i]!="L"&&flightPathUpper[i]!="A"){
	        console.log("invalid");
	    }
	    if(flightPathUpper[i] == "A" && index == 3){
	        y--;
	    }else if(flightPathUpper[i] == "R"){
	        rotation[index];
	        index++;
	    }else if(flightPathUpper[i] == "L"){
	        rotation[index];
	        index--;
	    }else if(flightPathUpper[i] == "A" && rotation[index] == "right"){
	        x++;
	    }else if(flightPathUpper[i] == "A" && rotation[index] == "down"){
	        y++;
	    }else if(flightPathUpper[i] == "A" && rotation[index] == "left"){
	        x--;
	    }else if(flightPathUpper[i] == "A" && rotation[index] == "up"){
	        y--;
	    }
	
	}
	output = `{x: ${x}, y: ${y}, direction: '${rotation[index]}'}`;
	return output;
}
