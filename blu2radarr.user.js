// ==UserScript==
// @name         Blutopia To Radarr Mod
// @version      0.1
// @author       Mod by Prism16 - Main Script by DirtyCajunRice / CatSpinner
// @namespace    DirtyCajunRice
// @description  Send movies to radarr from blutopia
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAACTFBMVEUAAAD//////////////vu1t7j/zFCGiYz////+/v4xNjs7QEUpLjP////7+/smKzBHS09VWV1obG/////////////Z2tv/////////////////////yUdQVFg/Q0imqKp2enz19va2t7n///+XmZyTlZj/4JOOkJOEh4n/8tTY2trV1tf/9+L////r7Oz///////84PEEuMjdLT1RCRkv/zlmMj5FaXWGVl5plaGzq6+yYmpx0d3rU1dZ8f4L8/f3v7/C+wMG6u72bnaD/5qmgo6WsrrD/67mxs7XOz9H//PT///////////////////////////////////////////////82Oj//xDX/xj3/zE2JjI9SVlr/0mVdYWV4e3//1nLn5+jg4eKGiYttcHSAg4b/2XzMzc+wsrTGx8ijpqj/5KCdn6H/7cC9vsC6vL2+wMH////Q0dL/8c3k5eX/+evp6en19fXy8vL9/f3////l5ubz8/T///////////////////////////////////////////////////9YXGD/z1r/13b////c3d7HyMmqrK7s7O2Ii43/24X4+Pjy8/Opq63/7sT4+PjExcf9/f3R0tP/89bf4OHl5ubl5ebk5ebj4+Tt7u7/////////////////////////////////////////////////////wjAkKS4XHCEaHyT/wCkiJywYHiMfJSobICYhJiv/vyQeIygcIicVGh//wSz/vyctMTYSGB0KDxUSFx1vUO58AAAAsHRSTlMA5eTH5u77+uPx/fz+8uX++/r31Xkg9drSOhIJ/Pv79vb19fPz8/Pz8+vq6uno57yj/f38+/r5+fj49/f39vb19fT09PDw7+7u6+bOybimlHFgWCkeGAb+/v38+vn4+Pf39vb29vX19PTz8/Hw7e3t7Ovr6+jn5+bm5d3Y18G0sZuPi4J9ZF5EDwz5+fb19fX19PT08/Pv7ezs6+vq6ejo6Ojn3suvl5GHbFRQSjECARZmqHoAAAO5SURBVEjHjZXle9NQFMbblEFSN9Yic0UmbGMbc2FjbsBwd3d3d3d3t+ZG2yTrgH+MJPfmCQ8k3c6Hfjq/5n3Pvee9Fq0uDZw8Fg509XwabxlVDdhcqzObq2/W1h8OThy5/WKxq7HCSQHAMt7mjM7+wRH6J3Y3+HkqSsrF8KBso6voQsL+H8UZKRJDaiVSFbW7ihNZ6XfVSXJjlKV4llO+Qnlurwr1TTQVFM5kGfmPneltO/IcIKqwoKT6bvj8d2PgK+Gj5H7HbhzD8MJ8j0KTHChtdJ2YYAicTiYZMuqcilnlwrBpyzlescILa5OtH42snEgDJMnW4HI7RB6lANUK66lreBOc9B9gW6IArZjarCLurXZkxbGZsH35DxgnA1SS0jtlukpY8Zfp0IoALm8giueaAWMWR3I7cGTFz4uKFYqblYy9H28CjI3FFs/BkPskB7LizM4I9A8aA3SEpldOQcjBPDuAIy7bSHRfMAEikVhk/T70kf01UQreFt8GImgGRIZii7aMQUh7BRDU2xLNyzptDEBk5h6k61CLg+XUEWdnnTMCUMWHlk3B4UEeaHYqVhiQdnieKaBaye1AyFS/IH9EsFedMQOQrsmzNStJw/KhSJWdZgAqOnblAbSCt5dwJJ8SMAc0K/TK6ZBopUhuxlFzQLeycDaU5eOjw0dGAcTjufATbdRoAFo5EDQqUliQUJI+JwjsLWFLzU0j+bkdaKwKMPyzPJwIiNNXpyM1r/OeyZI4z+pec4Cmx2qL4U5y/NqMYfd/VeJzjQAkfo52yNtLeQHk425H+rWg2eWLRe7sQ2qep4s8Q0rZeM6s+p5BLTUkHVDFL3uKLsTBHHXnGOHJi0yiVwscWyarA8oqbEPira2pcKt/risgwuf1FX3oBRoQ/2vZdvsoUV02cQ1RcGa+RQcet8+QfrcpwOSh9dooX+V7KEZZZzGlseAdClkEbMIK81O3K43btMA4kDMMs09KbXIdg+06UD4Nxw65oQ74u8OrRdKahlDfv+l6vNKPWWGh0FvL81roWXvnWf6tD7UgG9f7C1eQMFbZpZuInm8Gcf+Z8EpbMQymt7tlBgpue0t914DFqOaH0iRq+c5Ct9W9f6ePFaD4ulWhs2avXF+WH/CC3bvUaxfg48P7kwtOQfFGNam7ygEYTuRFDr4JZU2uIjhKkxpvu+5jRfhSc2BBzr235/RRGtsoykpLFQBgAWVfdws/e9EyUl0KhjJuVK+oKW+q2nVSf6ESygoe7woEOotOTUjc9weXiUPgDnteIQAAAABJRU5ErkJggg==
// @match        https://blutopia.cc/torrents*
// @require      https://cdn.jsdelivr.net/gh/sizzlemctwizzle/GM_config@43fd0fe4de1166f343883511e53546e87840aeaf/gm_config.js
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @copyright    2019, dirtycajunrice (https://openuserjs.org/users/dirtycajunrice)
// @license      MIT
// @grant        GM.xmlHttpRequest
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.openInTab
// @grant        GM.notification
// @grant        GM.registerMenuCommand
// ==/UserScript==

/*=========================  Version History  ==================================

Changelog 0.1   - All credit to the original authors @ PTP DirtyCajunrice + CatSpinner + Prism16 
                  Blutopia support added by dantayy.

*/

/*jshint esversion: 6 */
var style = document.createElement('style');

if (window.location.href.includes('user.php?action=edit')) {
    window.addEventListener('DOMContentLoaded', (event) => {
        const userForm = document.querySelector('#userform');
        const newDiv = document.createElement('div');
        newDiv.textContent = 'Settings Menu';
        userForm.appendChild(newDiv);
    });
}

style.innerHTML = `
button, input[type="button"]:hover, input[type="reset"]:hover, input[type="submit"]:hover, button:focus, input[type="button"]:focus, input[type="reset"]:focus, input[type="submit"]:focus {
    background: #4281da;
    box-shadow: none;
    cursor: pointer;
    outline: 0;
}
`;
document.head.appendChild(style);

GM_config.init({
    "id": "BLUToRadarr",
    "title": "Blu To Radarr Settings",
    "css": `#BLUToRadarr {background: #333333; width: 100%; margin: 10px 0; padding: 0}
            #BLUToRadarr .field_label {color: #fff; width: 100%;}
            #BLUToRadarr .config_header {color: #fff; padding-bottom: 10px; font-weight: 100;}
            #BLUToRadarr .reset {color: #f00; text-align: left;}
            #BLUToRadarr .config_var {display: flex; flex-direction: row; text-align: left; justify-content: center; align-items: center; width: 75%; margin: 4px auto; padding: 4px 0; }
            #BLUToRadarr_buttons_holder {display: flex; flex-direction: column; text-align: left; justify-content: center; align-items: center; width: 75%; margin: 2px auto;}
            #BLUToRadarr_resetLink {position: absolute; bottom: 10px; left: 12%;}
            #BLUToRadarr .saveclose_buttons {background-color: #e7e7e7; color: black; text-decoration: none; border: none; border-radius: 6px; height: 20px;}
            #BLUToRadarr_radarr_syncbutton_var {height: 20px; padding: 0;}
            #BLUToRadarr_field_radarr_syncbutton {background-color:#e7e7e7; cursor: pointer;  color: black; text-decoration: none; border: none; border-radius: 6px; padding: 2px 12px;}
            #BLUToRadarr button {cursor: pointer; height: 20px; padding: 0;}
            #BLUToRadarr_closeBtn {position: absolute; bottom: 10px; right: 12%; margin: 0 !important;}
            `,
    "events": {
        "open": function (doc) {
            const enableAuth = GM_config.fields.enableAuth.node;
            toggleAuthFields(enableAuth.checked);
            enableAuth.addEventListener('change', function () {
                toggleAuthFields(enableAuth.checked);
            });
            let style = this.frame.style;
            style.width = "400px";
            style.height = "515px";
            style.inset = "";
            style.top = "6%";
            style.right = "6%";
            style.borderRadius = "25px";
            doc.getElementById("BLUToRadarr_buttons_holder").prepend(doc.getElementById("BLUToRadarr_radarr_syncbutton_var"));
        }
    },
    "fields": {
        "radarr_url": {
            "label": "Radarr URL",
            "type": "text",
            "default": "https://domain.tld/radarr"
        },
        "radarr_apikey": {
            "label": "Radarr API Key",
            "type": "text",
            "default": ""
        }, 'enableAuth': {
            'label': 'Enable Radarr Auth',
            'type': 'checkbox',
            'default': false,
        },
        'username': {
            'label': 'Username',
            'type': 'text',
            'default': '',
            'hidden': true
        },
        'password': {
            'label': 'Password',
            'type': 'text',
            'default': '',
            'hidden': true
        },
        "radarr_profileid": {
            "label": "Radarr Quality Profile ID",
            "type": "text",
            "default": "1"
        },
        "radarr_rootfolderpath": {
            "label": "Radarr Root Folder Path",
            "type": "text",
            "default": "/mnt/movies"
        },
        "radarr_minimumavailability":
        {
            "label": "Minimum Availability",
            "type": "select",
            "options": ["announced", "inCinemas", "released"],
            "default": "released"
        },
        "radarr_searchformovie": {
            "label": "Search for movie on request",
            "type": "checkbox",
            "default": false
        },
        "radarr_sync_interval":
        {
            "label": "AutoSync Interval (Minutes)",
            "type": "select",
            "options": ["15", "30", "60", "120", "360", "1440", "Never"],
            "default": "Never"
        },
        "radarr_syncbutton": {
            "label": "Sync Radarr Movies",
            "type": "button",
            "click": get_radarr_movies
        }
    },
});

function toggleAuthFields(isAuthEnabled) {
    const usernameField = GM_config.fields.username.wrapper;
    const passwordField = GM_config.fields.password.wrapper;

    if (isAuthEnabled) {
        usernameField.style.display = '';
        passwordField.style.display = '';
    } else {
        usernameField.style.display = 'none';
        passwordField.style.display = 'none';
    }
}

GM.registerMenuCommand("BLU To Radarr Settings", () => GM_config.open());
let url = window.location.href;
let radarr_url = GM_config.get("radarr_url").replace(/\/$/, "");
var current_page_type = "";

// So it is still "multi" on similar page.
if (document.querySelector("section.meta") && !document.querySelector(".torrent-search--list__overview")) {
    current_page_type = "singletorrent";
}
else {
    current_page_type = "multi";
}
if (current_page_type) {
    set_html(false);
}
let interval = GM_config.get("radarr_sync_interval");
if (interval != "Never") {
    let millisecondInterval = Number(interval) * 60000;
    window.setTimeout(() => autoSync(millisecondInterval));
    window.setInterval(() => autoSync(millisecondInterval), millisecondInterval);
}

function clickswap(imdbid, titleSlug) {
    let radarr_url = GM_config.get("radarr_url").replace(/\/$/, "");
    let button = document.getElementById("BLUToRadarr-" + imdbid)
    button.firstChild.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAACTFBMVEUAAAD//////////////vu1t7j/zFCGiYz////+/v4xNjs7QEUpLjP////7+/smKzBHS09VWV1obG/////////////Z2tv/////////////////////yUdQVFg/Q0imqKp2enz19va2t7n///+XmZyTlZj/4JOOkJOEh4n/8tTY2trV1tf/9+L////r7Oz///////84PEEuMjdLT1RCRkv/zlmMj5FaXWGVl5plaGzq6+yYmpx0d3rU1dZ8f4L8/f3v7/C+wMG6u72bnaD/5qmgo6WsrrD/67mxs7XOz9H//PT///////////////////////////////////////////////82Oj//xDX/xj3/zE2JjI9SVlr/0mVdYWV4e3//1nLn5+jg4eKGiYttcHSAg4b/2XzMzc+wsrTGx8ijpqj/5KCdn6H/7cC9vsC6vL2+wMH////Q0dL/8c3k5eX/+evp6en19fXy8vL9/f3////l5ubz8/T///////////////////////////////////////////////////9YXGD/z1r/13b////c3d7HyMmqrK7s7O2Ii43/24X4+Pjy8/Opq63/7sT4+PjExcf9/f3R0tP/89bf4OHl5ubl5ebk5ebj4+Tt7u7/////////////////////////////////////////////////////wjAkKS4XHCEaHyT/wCkiJywYHiMfJSobICYhJiv/vyQeIygcIicVGh//wSz/vyctMTYSGB0KDxUSFx1vUO58AAAAsHRSTlMA5eTH5u77+uPx/fz+8uX++/r31Xkg9drSOhIJ/Pv79vb19fPz8/Pz8+vq6uno57yj/f38+/r5+fj49/f39vb19fT09PDw7+7u6+bOybimlHFgWCkeGAb+/v38+vn4+Pf39vb29vX19PTz8/Hw7e3t7Ovr6+jn5+bm5d3Y18G0sZuPi4J9ZF5EDwz5+fb19fX19PT08/Pv7ezs6+vq6ejo6Ojn3suvl5GHbFRQSjECARZmqHoAAAO5SURBVEjHjZXle9NQFMbblEFSN9Yic0UmbGMbc2FjbsBwd3d3d3d3t+ZG2yTrgH+MJPfmCQ8k3c6Hfjq/5n3Pvee9Fq0uDZw8Fg509XwabxlVDdhcqzObq2/W1h8OThy5/WKxq7HCSQHAMt7mjM7+wRH6J3Y3+HkqSsrF8KBso6voQsL+H8UZKRJDaiVSFbW7ihNZ6XfVSXJjlKV4llO+Qnlurwr1TTQVFM5kGfmPneltO/IcIKqwoKT6bvj8d2PgK+Gj5H7HbhzD8MJ8j0KTHChtdJ2YYAicTiYZMuqcilnlwrBpyzlescILa5OtH42snEgDJMnW4HI7RB6lANUK66lreBOc9B9gW6IArZjarCLurXZkxbGZsH35DxgnA1SS0jtlukpY8Zfp0IoALm8giueaAWMWR3I7cGTFz4uKFYqblYy9H28CjI3FFs/BkPskB7LizM4I9A8aA3SEpldOQcjBPDuAIy7bSHRfMAEikVhk/T70kf01UQreFt8GImgGRIZii7aMQUh7BRDU2xLNyzptDEBk5h6k61CLg+XUEWdnnTMCUMWHlk3B4UEeaHYqVhiQdnieKaBaye1AyFS/IH9EsFedMQOQrsmzNStJw/KhSJWdZgAqOnblAbSCt5dwJJ8SMAc0K/TK6ZBopUhuxlFzQLeycDaU5eOjw0dGAcTjufATbdRoAFo5EDQqUliQUJI+JwjsLWFLzU0j+bkdaKwKMPyzPJwIiNNXpyM1r/OeyZI4z+pec4Cmx2qL4U5y/NqMYfd/VeJzjQAkfo52yNtLeQHk425H+rWg2eWLRe7sQ2qep4s8Q0rZeM6s+p5BLTUkHVDFL3uKLsTBHHXnGOHJi0yiVwscWyarA8oqbEPira2pcKt/risgwuf1FX3oBRoQ/2vZdvsoUV02cQ1RcGa+RQcet8+QfrcpwOSh9dooX+V7KEZZZzGlseAdClkEbMIK81O3K43btMA4kDMMs09KbXIdg+06UD4Nxw65oQ74u8OrRdKahlDfv+l6vNKPWWGh0FvL81roWXvnWf6tD7UgG9f7C1eQMFbZpZuInm8Gcf+Z8EpbMQymt7tlBgpue0t914DFqOaH0iRq+c5Ct9W9f6ePFaD4ulWhs2avXF+WH/CC3bvUaxfg48P7kwtOQfFGNam7ygEYTuRFDr4JZU2uIjhKkxpvu+5jRfhSc2BBzr235/RRGtsoykpLFQBgAWVfdws/e9EyUl0KhjJuVK+oKW+q2nVSf6ESygoe7woEOotOTUjc9weXiUPgDnteIQAAAABJRU5ErkJggg==";
    button.removeEventListener("click", new_movie_lookup, false);
    button.addEventListener("click", function () {
        GM.openInTab(radarr_url.concat("/movie/", titleSlug), "active");
    }, false);
}

function set_html(update) {
    // Select all the movies: category "1"
    let listViewMovies = document.querySelectorAll('tr[data-imdb-id][data-category-id="1"]');
    if (update) {
        let buttons = document.querySelectorAll("[id^=\"BLUToRadarr-tt\"]");
        if (buttons.length === 0) {
            return;
        }
        buttons.forEach((button) => {
            window.setTimeout(function () {
                button.parentNode.removeChild(button);
            });
        });
    }
    if (current_page_type == "singletorrent") {
        let a = document.querySelector("[href*=\"://www.imdb.com/title/tt\"]");
        let id = a.href.match(/tt\d+/)[0];
        let movie = document.querySelector(".torrent__tags");
        if (id) {
            buttonBuilder(movie, id, "single");
        }
    }
    else if (current_page_type == "multi") {
        listViewMovies.forEach((movie) => {
            window.setTimeout(() => {
                let id = movie.getAttribute('data-imdb-id');
                if (id) {
                    buttonBuilder(movie, id, "medium");
                }
            });
        });
    }
}

// Blu saves imdb in the attribute data-imdb-id but seem to trim the excess 0s from tt0000001
function padImdbId(imdbId) {
    imdbId = String(imdbId);
    let paddedImdbId
    if (imdbId.length < 7) {
        const zerosToAdd = 7 - imdbId.length;
        paddedImdbId = '0'.repeat(zerosToAdd) + imdbId;
    }
    else paddedImdbId = imdbId;
    return paddedImdbId;
}

async function buttonBuilder(movie, id, type) {
    let radarr_url = GM_config.get("radarr_url").replace(/\/$/, "");
    let imdbid = id.includes("tt") ? id : "tt" + padImdbId(id);
    let exists = await check_exists(imdbid);
    let button = document.createElement("button");
    button.id = "BLUToRadarr-" + imdbid;
    button.type = type;
    button.textContent = "Add To Radarr";
    button.style.fontSize = "10px";
    Object.assign(button.style, { border: "none", backgroundColor: "transparent" });
    if (type == "single") {
        Object.assign(button.style, { position: "absolute", top: "-30px", right: "0", transform: "translateX(0)", zIndex: 10, });
        button.style.animation = "none";
        button.style.fontSize = "20px"
        movie.style.position = "relative";
        movie.prepend(button);
    }
    else if (type == "medium") {
        let buttonDiv = movie.querySelector(".torrent-search--list__buttons")
        buttonDiv.append(button);
    }
    if (exists) {
        button.textContent = "View In Radarr";
        button.style.color = "#99EDC3";
        button.addEventListener("click", function () {
            GM.openInTab(radarr_url.concat("/movie/", exists[0].titleSlug), "active");
        }, false);
    }
    else {
        button.textContent = "Add To Radarr";
        button.style.color = "#FFE36E";
        $(button).click(function () {
            $(button).animate({ opacity: 0 }, 500, function () {
                button.textContent = "...";
                $(button).animate({ opacity: 1 }, 1000);
            });

            new_movie_lookup(imdbid).then(() => {
                button.textContent = "Added !!!";
            });
        });
    }
}

function errorNotificationHandler(error, expected, errormsg) {
    let prestring = "BLUToRadar::";
    if (expected) {
        console.log(prestring + "Error: " + errormsg + " Actual Error: " + error);
        GM.notification("Error: " + errormsg);
    }
    else {
        console.log(prestring + "Unexpected Error: Please report this error in the forum. Actual Error: " + error);
        GM.notification("Unexpected Error: Please report this error in the forum. Actual Error: " + error);
    }
}

// radarr variables used for api calls
let radarr_apikey = GM_config.get("radarr_apikey");
const enableAuth = GM_config.get("enableAuth");
const username = GM_config.get("username");
const password = GM_config.get("password");
let headers = {
    "X-Api-Key": radarr_apikey,
    "Accept": "application/json",
    "Content-Type": "application/json"
}
if (enableAuth) {
    headers["Authorization"] = "Basic " + btoa(username + ":" + password);
}

function fetchQualityProfiles() {
    if (!radarr_url || !radarr_apikey) {
        GM.notification({
            title: 'BLU to Radarr Mod',
            text: 'Please Check API Key & URL In Settings.',
            timeout: 4000
        });
        return;
    }

    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        if (enableAuth) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
        }
        xhr.open("GET", `${radarr_url}/api/v3/qualityprofile?apikey=${radarr_apikey}`, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let data = JSON.parse(xhr.responseText);
                let names = filterByName(data);
                let ids = filterById(data);
                let output = {};
                for (let i = 0; i < names.length; i++) {
                    let name = names[i];
                    let id = ids[i];
                    output[name.name] = id.id;
                }
                resolve(output);
            }
        }
        xhr.send();
    });
}

function filterByName(data) {
    let filtered = [];
    for (let i = 0; i < data.length; i++) {
        let element = data[i];
        if (element.hasOwnProperty("name")) {
            filtered.push(element);
        }
    }
    return filtered;
}

function filterById(data) {
    let filtered = [];
    for (let i = 0; i < data.length; i++) {
        let element = data[i];
        if (element.hasOwnProperty("id")) {
            filtered.push(element);
        }
    }
    return filtered;
}

function createModal(obj) {
    let modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.zIndex = "1";
    modal.style.left = "0";
    modal.style.top = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.overflow = "auto";
    modal.style.backgroundColor = "rgba(0,0,0,0.4)";

    let modalContent = document.createElement("div");
    modalContent.style.backgroundColor = "#000";
    modalContent.style.color = "#fff";
    modalContent.style.borderRadius = "5px";

    let closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.style.backgroundColor = "transparent";
    closeButton.style.color = "white";
    closeButton.style.cursor = "pointer";
    closeButton.onclick = function () {
        modal.style.display = "none";
    };
    modalContent.style.position = "relative";
    modalContent.appendChild(closeButton);

    let tree = createTree(obj);
    tree.style.textAlign = "left";

    modalContent.appendChild(tree);
    modal.appendChild(modalContent);

    document.body.appendChild(modal);
}

function createTree(obj) {
    let ul = document.createElement("ul");
    ul.style.listStyleType = "none";
    for (let key in obj) {
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.textContent = key;
        li.appendChild(span);
        if (typeof obj[key] == "object" && obj[key] !== null) {
            let child = createTree(obj[key]);
            li.appendChild(child);
            span.onclick = function () {
                child.hidden = !child.hidden;
            }
            if (Array.isArray(obj)) {
                span.textContent = "[" + span.textContent + "]";
            } else {
                span.textContent = "{" + span.textContent + "}";
            }
        } else {
            let text = document.createTextNode(": " + obj[key]);
            li.appendChild(text);
        }
        ul.appendChild(li);
    }
    return ul;
}

function get_radarr_movies() {
    let radarr_url = GM_config.get("radarr_url").replace(/\/$/, "");
    GM.xmlHttpRequest({
        method: "GET",
        url: radarr_url.concat("/api/v3/movie"),
        headers: headers,
        onload: function (response) {
            if (response.status == 200) {
                const responseJSON = JSON.parse(response.responseText);
                GM.setValue("existing_movies", JSON.stringify(responseJSON));
                let timestamp = + new Date()
                GM.setValue("last_sync_timestamp", timestamp)
                console.log("BLUToRadarr::Sync: Setting last sync timestamp to " + timestamp)
                GM.notification("Radarr Sync Complete!", "BLU To Radarr");
                set_html(true);
            } else if (response.status == 401) {
                GM.notification("Error: Invalid Radarr API Key.", "BLU To Radarr");
            } else {
                GM.notification("Error: Status " + response.status, "BLU To Radarr");
            }
        },
        onerror: function () {
            GM.notification("Request Error.\nCheck Radarr URL!", "BLU To Radarr");
        },
        onabort: function () {
            GM.notification("Request is aborted.", "BLU To Radarr");
        }
    });
}

async function check_exists(imdbid) {
    let movieliststr = await GM.getValue("existing_movies", "{}");
    let movie_list = JSON.parse(movieliststr);
    let filter = null
    try {
        filter = movie_list.filter(movie => movie.imdbId == imdbid);
    }
    catch (e) {
        if (e instanceof TypeError) {
            return false
        }
        else {
            errorNotificationHandler(e, false)
            return false
        }
    }
    if (!filter.length) {
        return false
    }
    else {
        return filter
    };
}

async function autoSync(interval) {
    let currentTimestamp = + new Date();
    let lastSyncTimestamp = await GM.getValue("last_sync_timestamp", 0);
    if (currentTimestamp - lastSyncTimestamp >= interval) {
        let notification = "It has been " + ((currentTimestamp - lastSyncTimestamp) / 60000).toFixed(1) +
            " minutes since your last sync which exceeds your threshold of " +
            (interval / 60000) + " minutes. AutoSyncing...";
        console.log(notification);
        GM.notification(notification);
        get_radarr_movies();
    }
}

// Credit to mcfloyd @ PTP
function new_movie_lookup(imdbid) {
    let radarr_url = GM_config.get("radarr_url").replace(/\/$/, "");
    let movie = "";
    GM.xmlHttpRequest({
        method: "GET",
        url: radarr_url.concat("/api/v3/movie/lookup/?term=imdb%3A", imdbid),
        headers: headers,
        onload: function (response) {
            let responseJSON = null;
            if (!response.responseJSON) {
                if (response.status == 401) {
                    GM.notification("Error: Invalid Radarr API Key.", "BLU To Radarr");
                    return;
                } else if (!response.responseText) {
                    GM.notification("No results found.", "BLU To Radarr");
                    return;
                }
                responseJSON = JSON.parse(response.responseText);
                if (responseJSON.length > 0) {
                    add_movie(responseJSON[0], imdbid);
                } else {
                    console.log('movie not found');
                    return;
                }
            }
        },
        onerror: function () {
            GM.notification("Request Error.\nCheck Radarr URL!", "BLU To Radarr");
        },
        onabort: function () {
            GM.notification("Request is aborted.", "BLU To Radarr");
        }
    });
}


function add_movie(movie, imdbid) {
    let radarr_url = GM_config.get("radarr_url").replace(/\/$/, "");
    movie.qualityProfileId = parseInt(GM_config.get("radarr_profileid"));
    movie.rootFolderPath = GM_config.get("radarr_rootfolderpath");
    movie.monitored = true;
    movie.minimumAvailability = GM_config.get("radarr_minimumavailability");
    if (GM_config.get("radarr_searchformovie")) {
        movie.addOptions = { searchForMovie: true };
    } else {
        movie.addOptions = { searchForMovie: false };
    }
    GM.xmlHttpRequest({
        method: "POST",
        url: radarr_url.concat("/api/v3/movie"),
        headers: headers,
        data: JSON.stringify(movie),
        onload: function (response) {
            const responseJSON = JSON.parse(response.responseText);
            let button = document.getElementById("BLUToRadarr-" + imdbid);
            if (response.status == 201) {
                clickswap(imdbid, responseJSON.titleSlug);
                GM.notification(responseJSON.title + " Successfully sent to Radarr", "BLU To Radarr");
                button.textContent = "View In Radarr";
                button.style.color = "#99EDC3";
            } else {
                button.textContent = "View In Radarr";
                button.style.color = "#99EDC3";
            }
        },
        onerror: function () {
            GM.notification("Request Error.\nCheck Radarr URL!", "BLU To Radarr");
        },
        onabort: function () {
            GM.notification("Request is aborted.", "BLU To Radarr");
        }
    });
}
