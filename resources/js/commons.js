/**
 * @description :[sort portfolio on the basis of category]
 * @param {string} target :[name of target class]
 */
function portfolioSort(target){
    $(".portfolio-cat").hide();
    $("#portfolio-section h3").text(getHeaderName(target));
    $("."+target).show();
}

/**
 * 
 * @param {string} target :[target class name] 
 * @returns {string} :[Header name for specified class]
 */
function getHeaderName(target){
    if(target==="all"){
        return "ALL APPLICATIONS & MODELS";
    }
    else if(target==="ml"){
        return "ML MODELS";
    }
    else if(target==="web"){
        return "WEB APPLICATIONS";
    }
    else
        return "APPLICATIONS";
}

/**
 * @description :[reload page]
 */
function reset(){
    document.location.reload();
}