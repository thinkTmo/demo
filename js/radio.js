var radio = {
    init: function () {
        var labels = document.getElementsByName("label"),
            inputs = document.getElementsByName("input"),
            
            random = Util.randomNum(),
            inputName = "";
        
        for (var i = 0; i < labels.length; i++) {
            random = Util.random().toString();
            
            labels[i].setAttribute("for", random);
            inputs[i].setAttribute("id", random);
            inputs[i].setAttribute("name", inputName);
        }

    }
}