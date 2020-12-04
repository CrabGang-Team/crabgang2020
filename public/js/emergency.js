let emergencyDiv = {}

emergencyDiv.ShowAnt = () => {
    $("#button_Ant").show();
    $("#button_AntNO").show();
    $("#button_Alf").hide();
    $("#button_AlfNO").hide();
     $("#button_Rob").hide();
    $("#button_RobNO").hide();
}

emergencyDiv.ShowAlf = () => {
    $("#button_Alf").show();
    $("#button_AlfNO").show();
    $("#button_Ant").hide();
    $("#button_AntNO").hide();
    $("#button_Rob").hide();
    $("#button_RobNO").hide();
}

emergencyDiv.ShowRob = () => {
    $("#button_Rob").show();
    $("#button_RobNO").show();
    $("#button_Alf").hide();
    $("#button_AlfNO").hide();
    $("#button_Ant").hide();
    $("#button_AntNO").hide();
}


emergencyDiv.StopAnt = () => {
    $("#button_Ant").hide();
    $("#button_AntNO").hide();

}
    
emergencyDiv.StopAlf = () => {
    $("#button_Alf").hide();
    $("#button_AlfNO").hide();
}
    
emergencyDiv.StopRob = () => {
    $("#button_Rob").hide();
    $("#button_RobNO").hide();
}

emergencyDiv.antoinedied = () => {
    setTimeout(function () { location.href = "/fr/amongUs/antoinedied" }, 1);
}

emergencyDiv.alfreddied = () => {
    setTimeout(function () { location.href = "/fr/amongUs/alfreddied" }, 1);
}

emergencyDiv.robindided = () => {
    setTimeout(function () { location.href = "/fr/amongUs/robindied" }, 1);
}