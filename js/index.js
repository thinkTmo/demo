var Index = {
    setTarget: function () {
        var a = document.getElementsByTagName("a"),
            frame = document.getElementsByTagName("iframe")[0],
            fName = frame.getAttribute("name");
        for (var i = 0; i < a.length; i++) {
            var ele = a[i];
            a[i].setAttribute("target", fName);
            a[i].setAttribute("title", a[i].innerHTML);
            a[i].addEventListener("click", function () {
                Index.bindClickToA(ele);
            })
        }
    },
    bindClickToA: function (obj) {
        var title = document.getElementsByTagName("title")[0];
        title.innerHTML = obj.innerHTML;
        $(obj).parentsUntil(".js_first_ul").find("a").removeClass("selected");

        //        $(obj).addClass("selected");


    }
}