var Index = {
    setTarget: function () {
        var a = document.getElementsByTagName("a"),
            frame = document.getElementsByTagName("iframe")[0],
            fName = frame.getAttribute("name");
        for (var i = 0; i < a.length; i++) {
            var ele = a[i];
            $(ele).addClass("ovh");
            ele.setAttribute("target", fName);
            ele.setAttribute("title", ele.innerHTML);
            ele.addEventListener("click", function (ele) {
                return function () {
                    Index.bindClickToA(ele);
                }
            }(ele));
        }
    },
    bindClickToA: function (obj) {
        var title = document.getElementsByTagName("title")[0];
        title.innerHTML = obj.innerHTML;
        $(obj).addClass("ovh");
//        $(obj).parents(".js_first_ul").find("a").removeClass("selected");
//
//        $(obj).addClass("selected");


    }
}