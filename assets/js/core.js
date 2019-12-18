document.addEventListener("DOMContentLoaded", function () {
    function a(a) {
        for (element = a.target, element.classList.toggle("is-visible"), lastParagraph = element.nextElementSibling, paragraphs = [], paragraphs.push(lastParagraph); lastParagraph.nextElementSibling && "P" == lastParagraph.nextElementSibling.tagName;) lastParagraph = lastParagraph.nextElementSibling, paragraphs.push(lastParagraph);
        for (var e = 0; e < paragraphs.length; ++e) paragraph = paragraphs[e], paragraph.classList.toggle("is-visible")
    }
    for (var e = document.querySelectorAll(".frequently-asked-questions h4"), t = 0; t < e.length; ++t) header = e[t], header.addEventListener("click", a)

});

var snippet;
var n = 0;

function beautify() {
    return new Promise(resolve => {
        n = snippet.search("<"); 
        while (n > 0) {
            for (let i = 0; i < n; i++) {
                snippet = snippet.replace("<", "&lt;");
            } 
            n = snippet.search("<"); 
        }

        n = snippet.search(">"); 
        while (n > 0) {
            for (let i = 0; i < n; i++) {
                snippet = snippet.replace(">", "&gt;");
            }   
            n = snippet.search(">"); 
        }

        resolve('resolved');
    });
}
  

async function showCode(data) {
    var s = data.getAttribute("data-spinner");
    snippet = data.getElementsByClassName(s)[0].innerHTML;

    await beautify();

    document.getElementById('content').innerHTML = snippet;
    hljs.initHighlightingOnLoad();


    setTimeout(() => {
        document.getElementById("openModal").click();
    }, 500);

    var modal = document.getElementById("myModal");
    var btn = document.getElementById("openModal");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    console.log(snippet);

}

