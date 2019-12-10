(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|');

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    // planetsString.split(',');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */

    var breakPlanetsString = planetsArray.join("\n");
    console.log(breakPlanetsString);

     // * TODO BONUS:
     // * Create another string that would display your planets in an undordered
     // * list. You will need an opening AND closing <ul> tags around the entire
     // * string, and <li> tags around each planet.


    // planetsArray = planetsArray.join();
    // planetsArray = planetsArray.replace(",", "</li>");
    // var planetsArray1 = planetsArray.shift("<ul>", "<li>");
    // var planetsArray2 = planetsArray1.push("</li>", "</ul>");
    // planetsString = planetsArray2.join();
    // console.log(planetsArray1);

})();
