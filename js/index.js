var Index = {
    setTarget: function () {
        var a = document.getElementsByTagName("a"),
            frame = document.getElementsByTagName("iframe")[0];
        for (var i = 0; i < a.length; i++) {
            var ele = a[i];
            a[i].setAttribute("target", frame.getAttribute("name"));
            a[i].setAttribute("title", a[i].innerHTML);
            a[i].addEventListener("click", function () {
                Index.bindClickToA(ele);
            })
        }
    },
    bindClickToA: function (obj) {
        
        $(obj).parent(".js_first_ul").find("a")
        
    }
}