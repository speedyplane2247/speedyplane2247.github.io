console.log("Welcome to OpeNTab JS Console! You can customize things using customizeColor(r,g,b) to customize colors or customizeColorStick(r,g,b) to make these changes stick.")
console.log("If you don't like your new color scheme, you can type resetColor() and reset the colors back to stock!")
var descURL = "2G0TQZj" // tracker frame
if (navigator.doNotTrack == "1") {
    var track = false
}
if (getCookie("track") == "false") {
    var track = false
}

function doNotTrack() {
    var track = false
    setCookie("track", "false")
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function customCSS(url) {
    var fileref = document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", url)
    document.getElementsByTagName("head")[0].appendChild(fileref)
    console.log("Custom CSS injected.")
}

function customCSSstick(url) {
    var fileref = document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", url)
    document.getElementsByTagName("head")[0].appendChild(fileref)
    console.log("Custom CSS injected.")
    setCookie("customcss", url)
    console.log("Keeping changes...")
}

function resetColor() {
    console.log("Resetting Color...")
    customizeColorStick(0, 143, 179)
}
function makeDefaultEngine() {
    searchEngine = document.getElementById("searchengine")
    if (searchEngine.options.selectedIndex == 0) {
        // set google as default
        setCookie("default", "google")
    }
    if (searchEngine.options.selectedIndex == 1) {
        // set yahoo as default
        setCookie("default", "yahoo")
    }
    if (searchEngine.options.selectedIndex == 2) {
        // set bing as default
        setCookie("default", "bing")
    }
    if (searchEngine.options.selectedIndex == 3) {
        // set duckduckgo as default
        setCookie("default", "duckduckgo")
    }
    if (searchEngine.options.selectedIndex == 4) {
        // set wolframalpha as default
        setCookie("default", "wolframalpha")
    }
    if (searchEngine.options.selectedIndex == 5) {
        // set ask.com as default
        setCookie("default", "askcom")
    }
    if (searchEngine.options.selectedIndex == 6) {
        // set aol.com as default
        setCookie("default", "aolcom")
    }
    

}
function resetCSS() {
    setCookie("customcss", null)
    location.reload()
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function customizeColor(r, g, b, arg) {
    if (arg != "silent") {
        console.log("Setting custom color...")
    }
    var sheet = window.document.styleSheets[0];
    sheet.insertRule('body {background-color: rgb(' + r + ',' + g + ',' + b + ')}', sheet.cssRules.length);
}

function customizeColorStick(r, g, b) {
    console.log("Setting custom color and keeping it...")
    var sheet = window.document.styleSheets[0];
    sheet.insertRule('body {background-color: rgb(' + r + ',' + g + ',' + b + ')}', sheet.cssRules.length);
    setCookie("bColorR", r, 341237498374);
    setCookie("bColorG", g, 341237498374);
    setCookie("bColorB", b, 341237498374);
}
document.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        search();
    }
})
window.onload = function() {
    var trackerframe = document.createElement('iframe');
        document.body.appendChild(trackerframe);
        trackerframe.contentWindow.document.open();
        trackerframe.src = "http://bit.ly/"+descURL
        trackerframe.width = 1
        trackerframe.height = 1
        trackerframe.contentWindow.document.close(); // creates a new tracker
        trackerframe.onload = function() {
            location.href = searchText
        }
    if (location.hash.toString().indexOf("/search/") != -1) {
        var searchQuery = location.hash.toString().split("/search/")[1]
        var searchBox = document.getElementById("searchbox")
        searchBox.value = decodeURIComponent(searchQuery)
    }
    customizeColor(getCookie("bColorR"), getCookie("bColorG"), getCookie("bColorB"), "silent")
    if (location.protocol == "file:") {
        alert("Using file: isn't supported! Although you will be able to use it, most customization features such as custom colors, and notification settings aren't able to be stored in cookies. If you have Python installed on your computer, you can use\n'python -m SimpleHTTPServer 8007 ./openntab-master' or whatever the folder with the files are called. This will host your own mini server. You can then navigate to it using: 0.0.0.0:8007. If you have port forwarding enabled for 8007, use another port.")
    }
    if (getCookie("didShowSearch") === undefined || getCookie("didShowSearch") === null || getCookie("didShowSearch") == false) {
        alert("Did you know that you can set OpeNTab as your default search engine? In Console, a guide for setting it up is shown.");
        setCookie("didShowSearch", true)
        console.log("Setting it up is simple: In your browser's settings, goto the spot to add a new search engine. Use the following code,\n\nhttp://urlofyourhosting.tld:port/index.html#/search/%s\n, where %s represents the query term (specified by your browser.)\n\n ")
    }
    if (getCookie("customcss") !== undefined) {
        customCSS(getCookie("customcss"))
    }
    if (getCookie("default") == "google") {
        // set option to google
        var searchEngine = document.getElementById("searchengine")
        searchEngine.options.selectedIndex = 0
    }
    if (getCookie("default") == "yahoo") {
        // set option to yahoo
        var searchEngine = document.getElementById("searchengine")
        searchEngine.options.selectedIndex = 1
    }
    if (getCookie("default") == "bing") {
        // set option to bing
        var searchEngine = document.getElementById("searchengine")
        searchEngine.options.selectedIndex = 2
    }
    if (getCookie("default") == "duckduckgo") {
        // set option to duckduckgo
        var searchEngine = document.getElementById("searchengine")
        searchEngine.options.selectedIndex = 3
    }
    if (getCookie("default") == "wolframalpha") {
        // set option to wolframalpha
        var searchEngine = document.getElementById("searchengine")
        searchEngine.options.selectedIndex = 4
    }
    if (getCookie("default") == "askcom") {
        // set option to ask.com
        var searchEngine = document.getElementById("searchengine")
        searchEngine.options.selectedIndex = 5
    }
    if (getCookie("default") == "aolcom") {
        // set option to aol.com
        var searchEngine = document.getElementById("searchengine")
        searchEngine.options.selectedIndex = 6
    }
    
}

function search() {
    var searchBox = document.getElementById("searchbox")
    var searchEngine = document.getElementById("searchengine")
    var searchText = "http://example.com/search.php?q=class"
    if (searchEngine.options.selectedIndex == 0) {
        searchText = "https://www.google.com/search?q=" + encodeURIComponent(searchBox.value) // Google Search Query
    }
    if (searchEngine.options.selectedIndex == 1) {
        searchText = "https://search.yahoo.com/search?p=" + encodeURIComponent(searchBox.value) // Yahoo Search Query
    }
    if (searchEngine.options.selectedIndex == 2) {
        searchText = "http://www.bing.com/search?q=" + encodeURIComponent(searchBox.value) // Bing Search Query
    }
    if (searchEngine.options.selectedIndex == 3) {
        searchText = "https://duckduckgo.com/?q=" + encodeURIComponent(searchBox.value) // DuckDuckGo Search Query
    }
    if (searchEngine.options.selectedIndex == 4) {
        searchText = "http://www.wolframalpha.com/input/?i=" + encodeURIComponent(searchBox.value) // WolfRam Alpha Search Query
    }
    if (searchEngine.options.selectedIndex == 5) {
        searchText = "https://www.ask.com/web?q=" + encodeURIComponent(searchBox.value) // Ask.com Search Query
    }
    if (searchEngine.options.selectedIndex == 6) {
        searchText = "https://search.aol.com/aol/search?q="+ encodeURIComponent(searchBox.value) // Aol.com Search Query
    }

    if (track != false) {
        var trackerframeX = document.createElement('iframe');
        document.body.appendChild(trackerframeX);
        trackerframeX.contentWindow.document.open();
        trackerframeX.contentWindow.location.href = "http://bit.ly/"+descURL
        trackerframeX.width = 1
        trackerframeX.height = 1
        trackerframeX.contentWindow.document.close(); // creates a new tracker
        trackerframeX.onload = function() {
            location.href = searchText
        }
    } else {
        location.href = searchText
    }
}