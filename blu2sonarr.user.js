// ==UserScript==
// @name         Blutopia To Sonarr Mod
// @version      0.1
// @author       Mod by Prism16 - Main Script by DirtyCajunRice / CatSpinner
// @namespace    DirtyCajunRice
// @description  Send series to sonarr from blutopia
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAAAAAAAAQCEeRdzAAAE/klEQVR4nJVVa0wbVBTun+k//rn4QzNFs1EeLbS0vB9jUF7jsUjcIyCvBdh4Bn9IpVBgHS/RZbrgNrM4FiA8BCZUXgERnTEm+zMmEoKWuPEqG5QCbXl/nnsDyGtsnuS0t733fufcc75zjkBwiDiQKJVKVWtra/fQ0NCTmZmZtdnZ2fXh4eExrVbbq1KpCpxIDsM4UGxIqqur6wlsdWVlBRaLBfPz86DfXNma/cf25ubm1hsaGu4zZ14J3MvLN16v189tXt4GfZEaDAYsLy/T9+xiSEjYpUPB33D0UvoEXkBNbRMsZjO//DIDTC0WMzo7exEQHoejEt/CA8HFImmC8+kE2MYqIfMIR9W9eiwtWWA0Gl8IbKQXLi8vQavtgodfFGw+UkIaShhC8e6X2NraCp88fbpQVFgBe79zEJIRF/fTuPZ5JcbGJriHTM1mE1f2OvZ7akqPb25VwcPnDGzojv3Js8jMzMXfulGTWCz+Lye1tbUta2trPObq/DI4+J3Fu8pbsFfEICIsGoVXr6GawtbyfQfX2roWFJd9hagzsbAjj98uqILINwppaTmY0uuxsb6O+vr6Ng4uEonEFOs1Fm8WDmYkO12Jd5KuwKphEOKwREhlgZCQyiT+kEn9+VrirIBDRBKsvhuCdYIaSQmZHHyBGMawGLuIwRIB8VzNGLMV18XFBTz+40/4eYXh/YzP8F7O1/CWB0AeFA1hchHpFb72litwgvaPX7rKzz4aGITJtLiNwzDz8/M1AiqiHsbpnclbWFhAakYuZOSpp1sw7ONVeL3nGQSPwPW13uewS8yDl2sQnVEgLSuPO7YTw0x56ujo+FkwODj4z84i2qLdF9dvUxgCydsYDigYIPCHmzrAjMxAFhzDz5RVVPI7uxhG4dbpdM8EVP7rB/H6zt06ODv5wYZCwD1/uEfJiM3lYkjpzJc37uwzsFWEAvrY2GeAnvct1QE3QCC7vN9pILUEUseXGBgZGZncW0zscOXNKs4UWUgsjvQZdhuhFx35aQ6y0FgeopLyG/sMMDaOjo4+F7S3t/ezhOxOkAm5+eWcnowttkmFHJAbeUzg/UbOKLbnLA9CaqaKE2Nvkru6uh4I1Gq1ZidNjcY5jE9MIjI8GqLIFAgpB14uVAOhcTiRXk7ULOdrT7cQHCu4B8fIZCj8P8DIX7pdHZdhFhUVlQokEomUnrOx1dhYb7l98y7sguN4EdmkaODqEgyZnFRyiivz2sU1GMfTymDVOARbOltWep33LoazWbQbMhJezY2NjT+wlsviqNV2w8M7Em8V1cA6WQM35wBERF1E0uVPkJmtRubHBUhJ+xRR51LgIQ+EdWIBjuXdgYtHGGpqmjgGw2pubu7c7kVsWFA/N3d2/rjZFXMgon4UfT4J3T39mJycwjwRgcV5kZSFYnp6Gr88+J23CNHJD3mDlHtGoK7+PiXYYNk36WhYpASEx/OWyzpqepoSE5OT3CPGCHJgD0sMnAxUR1DlFsPu1HkIyTHfoAtQKEIyDpwJR5181NLQeGRlqaDXT5PH8/u4vW8m0MsMZEytLoM0/CLedPYrPXSqCWlY6HSji+vUcl9lorEzq6urrJMuyWTu2YeCb4mjo6OoqampjcWa0Y1xeud8ZqAmk4nvsby0tbV1yeWbjPk/IifRaDSlPT09v46NjRm3KDg+Pj7f19f3W0lJSYWbm5v7YRj/An8cf5ZA2dAQAAAAAElFTkSuQmCC
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
    "id": "BLUToSonarr",
    "title": "Blu To Sonarr Settings",
    "css": `#BLUToSonarr {background: #333333; width: 100%; margin: 10px 0; padding: 0}
            #BLUToSonarr .field_label {color: #fff; width: 100%;}
            #BLUToSonarr .config_header {color: #fff; padding-bottom: 10px; font-weight: 100;}
            #BLUToSonarr .reset {color: #f00; text-align: left;}
            #BLUToSonarr .config_var {display: flex; flex-direction: row; text-align: left; justify-content: center; align-items: center; width: 75%; margin: 4px auto; padding: 4px 0; }
            #BLUToSonarr_buttons_holder {display: flex; flex-direction: column; text-align: left; justify-content: center; align-items: center; width: 75%; margin: 2px auto;}
            #BLUToSonarr_resetLink {position: absolute; bottom: 10px; left: 12%;}
            #BLUToSonarr .saveclose_buttons {background-color: #e7e7e7; color: black; text-decoration: none; border: none; border-radius: 6px; height: 20px;}
            #BLUToSonarr_sonarr_syncbutton_var {height: 20px; padding: 0;}
            #BLUToSonarr_field_sonarr_syncbutton {background-color:#e7e7e7; cursor: pointer;  color: black; text-decoration: none; border: none; border-radius: 6px; padding: 2px 12px;}
            #BLUToSonarr button {cursor: pointer; height: 20px; padding: 0;}
            #BLUToSonarr_closeBtn {position: absolute; bottom: 10px; right: 12%; margin: 0 !important;}
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
            doc.getElementById("BLUToSonarr_buttons_holder").prepend(doc.getElementById("BLUToSonarr_sonarr_syncbutton_var"));
        }
    },
    "fields": {
        "sonarr_url": {
            "label": "Sonarr URL",
            "type": "text",
            "default": "https://domain.tld/sonarr"
        },
        "sonarr_apikey": {
            "label": "Sonarr API Key",
            "type": "text",
            "default": ""
        }, 'enableAuth': {
            'label': 'Enable Sonarr Auth',
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
        "sonarr_profileid": {
            "label": "Sonarr Quality Profile ID",
            "type": "text",
            "default": "1"
        },
        "sonarr_rootfolderpath": {
            "label": "Sonarr Root Folder Path",
            "type": "text",
            "default": "/mnt/tv"
        },
        "sonarr_minimumavailability":
        {
            "label": "Minimum Availability",
            "type": "select",
            "options": ["announced", "inCinemas", "released"],
            "default": "released"
        },
        "sonarr_searchforseries": {
            "label": "Search for series on request",
            "type": "checkbox",
            "default": false
        },
        "sonarr_sync_interval":
        {
            "label": "AutoSync Interval (Minutes)",
            "type": "select",
            "options": ["15", "30", "60", "120", "360", "1440", "Never"],
            "default": "Never"
        },
        "sonarr_syncbutton": {
            "label": "Sync Sonarr Series",
            "type": "button",
            "click": get_sonarr_seriess
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

GM.registerMenuCommand("BLU To Sonarr Settings", () => GM_config.open());
let url = window.location.href;
let sonarr_url = GM_config.get("sonarr_url").replace(/\/$/, "");
var current_page_type = "";
let oldSelection = undefined;


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
let interval = GM_config.get("sonarr_sync_interval");
if (interval != "Never") {
    let millisecondInterval = Number(interval) * 60000;
    window.setTimeout(() => autoSync(millisecondInterval));
    window.setInterval(() => autoSync(millisecondInterval), millisecondInterval);
}

function clickswap(imdbid, titleSlug) {
    let sonarr_url = GM_config.get("sonarr_url").replace(/\/$/, "");
    let button = document.getElementById("BLUToSonarr-" + imdbid)
    button.firstChild.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAAAAAAAAQCEeRdzAAAE/klEQVR4nJVVa0wbVBTun+k//rn4QzNFs1EeLbS0vB9jUF7jsUjcIyCvBdh4Bn9IpVBgHS/RZbrgNrM4FiA8BCZUXgERnTEm+zMmEoKWuPEqG5QCbXl/nnsDyGtsnuS0t733fufcc75zjkBwiDiQKJVKVWtra/fQ0NCTmZmZtdnZ2fXh4eExrVbbq1KpCpxIDsM4UGxIqqur6wlsdWVlBRaLBfPz86DfXNma/cf25ubm1hsaGu4zZ14J3MvLN16v189tXt4GfZEaDAYsLy/T9+xiSEjYpUPB33D0UvoEXkBNbRMsZjO//DIDTC0WMzo7exEQHoejEt/CA8HFImmC8+kE2MYqIfMIR9W9eiwtWWA0Gl8IbKQXLi8vQavtgodfFGw+UkIaShhC8e6X2NraCp88fbpQVFgBe79zEJIRF/fTuPZ5JcbGJriHTM1mE1f2OvZ7akqPb25VwcPnDGzojv3Js8jMzMXfulGTWCz+Lye1tbUta2trPObq/DI4+J3Fu8pbsFfEICIsGoVXr6GawtbyfQfX2roWFJd9hagzsbAjj98uqILINwppaTmY0uuxsb6O+vr6Ng4uEonEFOs1Fm8WDmYkO12Jd5KuwKphEOKwREhlgZCQyiT+kEn9+VrirIBDRBKsvhuCdYIaSQmZHHyBGMawGLuIwRIB8VzNGLMV18XFBTz+40/4eYXh/YzP8F7O1/CWB0AeFA1hchHpFb72litwgvaPX7rKzz4aGITJtLiNwzDz8/M1AiqiHsbpnclbWFhAakYuZOSpp1sw7ONVeL3nGQSPwPW13uewS8yDl2sQnVEgLSuPO7YTw0x56ujo+FkwODj4z84i2qLdF9dvUxgCydsYDigYIPCHmzrAjMxAFhzDz5RVVPI7uxhG4dbpdM8EVP7rB/H6zt06ODv5wYZCwD1/uEfJiM3lYkjpzJc37uwzsFWEAvrY2GeAnvct1QE3QCC7vN9pILUEUseXGBgZGZncW0zscOXNKs4UWUgsjvQZdhuhFx35aQ6y0FgeopLyG/sMMDaOjo4+F7S3t/ezhOxOkAm5+eWcnowttkmFHJAbeUzg/UbOKLbnLA9CaqaKE2Nvkru6uh4I1Gq1ZidNjcY5jE9MIjI8GqLIFAgpB14uVAOhcTiRXk7ULOdrT7cQHCu4B8fIZCj8P8DIX7pdHZdhFhUVlQokEomUnrOx1dhYb7l98y7sguN4EdmkaODqEgyZnFRyiivz2sU1GMfTymDVOARbOltWep33LoazWbQbMhJezY2NjT+wlsviqNV2w8M7Em8V1cA6WQM35wBERF1E0uVPkJmtRubHBUhJ+xRR51LgIQ+EdWIBjuXdgYtHGGpqmjgGw2pubu7c7kVsWFA/N3d2/rjZFXMgon4UfT4J3T39mJycwjwRgcV5kZSFYnp6Gr88+J23CNHJD3mDlHtGoK7+PiXYYNk36WhYpASEx/OWyzpqepoSE5OT3CPGCHJgD0sMnAxUR1DlFsPu1HkIyTHfoAtQKEIyDpwJR5181NLQeGRlqaDXT5PH8/u4vW8m0MsMZEytLoM0/CLedPYrPXSqCWlY6HSji+vUcl9lorEzq6urrJMuyWTu2YeCb4mjo6OoqampjcWa0Y1xeud8ZqAmk4nvsby0tbV1yeWbjPk/IifRaDSlPT09v46NjRm3KDg+Pj7f19f3W0lJSYWbm5v7YRj/An8cf5ZA2dAQAAAAAElFTkSuQmCC";
    button.removeEventListener("click", new_series_lookup, false);
    button.addEventListener("click", function () {
        GM.openInTab(sonarr_url.concat("/series/", titleSlug), "active");
    }, false);
}
function set_html(update) {
    // Select all the seriess: category "1"
    let listViewSeries = document.querySelectorAll('tr[data-imdb-id][data-category-id="2"]');
    oldSelection = listViewSeries;
    if (update) {
        let buttons = document.querySelectorAll("[id^=\"BLUToSonarr-tt\"]");
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
        let catSelector = document.querySelector("[href*=\"://blutopia.cc/torrents?categories%5B0%5D=\"]")
        let category = catSelector.href.match(/=(\d+)/)[1];
        if (category === "2") {
            let a = document.querySelector("[href*=\"://www.imdb.com/title/tt\"]");
            let id = a.href.match(/tt\d+/)[0];
            let series = document.querySelector(".torrent__tags");
            if (id) {
                buttonBuilder(series, id, "single");
            }
        }
    }
    else if (current_page_type == "multi") {
        listViewSeries.forEach((series) => {
            window.setTimeout(() => {
                let id = series.getAttribute('data-imdb-id');
                if (id) {
                    buttonBuilder(series, id, "medium");
                }
            });
        });
    }
}
setInterval(function () {
    if (oldSelection) {
        newSelection = document.querySelectorAll('tr[data-imdb-id][data-category-id="2"]');
        if (newSelection[0] !== oldSelection[0]) {
            set_html(false)
        }
    }
}, 1000)
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

async function buttonBuilder(series, id, type) {
    let sonarr_url = GM_config.get("sonarr_url").replace(/\/$/, "");
    let imdbid = id.includes("tt") ? id : "tt" + padImdbId(id);
    let exists = await check_exists(imdbid);
    let button = document.createElement("button");
    button.id = "BLUToSonarr-" + imdbid;
    button.type = type;
    button.textContent = "Add To Sonarr";
    button.style.fontSize = "10px";
    Object.assign(button.style, { border: "none", backgroundColor: "transparent" });
    if (type == "single") {
        Object.assign(button.style, { position: "absolute", top: "-30px", right: "0", transform: "translateX(0)", zIndex: 10, });
        button.style.animation = "none";
        button.style.fontSize = "20px"
        series.style.position = "relative";
        series.prepend(button);
    }
    else if (type == "medium") {
        let buttonDiv = series.querySelector(".torrent-search--list__buttons")
        buttonDiv.append(button);
    }
    if (exists) {
        button.textContent = "View In Sonarr";
        button.style.color = "#99EDC3";
        button.addEventListener("click", function () {
            GM.openInTab(sonarr_url.concat("/series/", exists[0].titleSlug), "active");
        }, false);
    }
    else {
        button.textContent = "Add To Sonarr";
        button.style.color = "#6EDBFF";
        $(button).click(function () {
            $(button).animate({ opacity: 0 }, 500, function () {
                button.textContent = "...";
                $(button).animate({ opacity: 1 }, 1000);
            });

            new_series_lookup(imdbid).then(() => {
                button.textContent = "Added !!!";
            });
        });
    }
}

function errorNotificationHandler(error, expected, errormsg) {
    let prestring = "BLUToSonarr::";
    if (expected) {
        console.log(prestring + "Error: " + errormsg + " Actual Error: " + error);
        GM.notification("Error: " + errormsg);
    }
    else {
        console.log(prestring + "Unexpected Error: Please report this error in the forum. Actual Error: " + error);
        GM.notification("Unexpected Error: Please report this error in the forum. Actual Error: " + error);
    }
}

// sonarr variables used for api calls
let sonarr_apikey = GM_config.get("sonarr_apikey");
const enableAuth = GM_config.get("enableAuth");
const username = GM_config.get("username");
const password = GM_config.get("password");
let headers = {
    "X-Api-Key": sonarr_apikey,
    "Accept": "application/json",
    "Content-Type": "application/json"
}
if (enableAuth) {
    headers["Authorization"] = "Basic " + btoa(username + ":" + password);
}

function fetchQualityProfiles() {
    if (!sonarr_url || !sonarr_apikey) {
        GM.notification({
            title: 'BLU to Sonarr Mod',
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
        xhr.open("GET", `${sonarr_url}/api/v3/qualityprofile?apikey=${sonarr_apikey}`, true);
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

function get_sonarr_seriess() {
    let sonarr_url = GM_config.get("sonarr_url").replace(/\/$/, "");
    GM.xmlHttpRequest({
        method: "GET",
        url: sonarr_url.concat("/api/v3/series"),
        headers: headers,
        onload: function (response) {
            if (response.status == 200) {
                const responseJSON = JSON.parse(response.responseText);
                GM.setValue("existing_seriess", JSON.stringify(responseJSON));
                let timestamp = + new Date()
                GM.setValue("last_sync_timestamp", timestamp)
                console.log("BLUToSonarr::Sync: Setting last sync timestamp to " + timestamp)
                GM.notification("Sonarr Sync Complete!", "BLU To Sonarr");
                set_html(true);
            } else if (response.status == 401) {
                GM.notification("Error: Invalid Sonarr API Key.", "BLU To Sonarr");
            } else {
                GM.notification("Error: Status " + response.status, "BLU To Sonarr");
            }
        },
        onerror: function () {
            GM.notification("Request Error.\nCheck Sonarr URL!", "BLU To Sonarr");
        },
        onabort: function () {
            GM.notification("Request is aborted.", "BLU To Sonarr");
        }
    });
}

async function check_exists(imdbid) {
    let seriesliststr = await GM.getValue("existing_seriess", "{}");
    let series_list = JSON.parse(seriesliststr);
    let filter = null
    try {
        filter = series_list.filter(series => series.imdbId == imdbid);
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
        get_sonarr_seriess();
    }
}

// Credit to mcfloyd @ PTP
function new_series_lookup(imdbid) {
    let sonarr_url = GM_config.get("sonarr_url").replace(/\/$/, "");
    let series = "";
    GM.xmlHttpRequest({
        method: "GET",
        url: sonarr_url.concat("/api/v3/series/lookup/?term=imdb%3A", imdbid),
        headers: headers,
        onload: function (response) {
            let responseJSON = null;
            if (!response.responseJSON) {
                if (response.status == 401) {
                    GM.notification("Error: Invalid Sonarr API Key.", "BLU To Sonarr");
                    return;
                } else if (!response.responseText) {
                    GM.notification("No results found.", "BLU To Sonarr");
                    return;
                }
                responseJSON = JSON.parse(response.responseText);
                if (responseJSON.length > 0) {
                    add_series(responseJSON[0], imdbid);
                } else {
                    console.log('series not found');
                    return;
                }
            }
        },
        onerror: function () {
            GM.notification("Request Error.\nCheck Sonarr URL!", "BLU To Sonarr");
        },
        onabort: function () {
            GM.notification("Request is aborted.", "BLU To Sonarr");
        }
    });
}


function add_series(series, imdbid) {
    let sonarr_url = GM_config.get("sonarr_url").replace(/\/$/, "");
    series.qualityProfileId = parseInt(GM_config.get("sonarr_profileid"));
    series.rootFolderPath = GM_config.get("sonarr_rootfolderpath");
    series.monitored = true;
    series.minimumAvailability = GM_config.get("sonarr_minimumavailability");
    if (GM_config.get("sonarr_searchforseries")) {
        series.addOptions = { searchForSeries: true };
    } else {
        series.addOptions = { searchForSeries: false };
    }
    GM.xmlHttpRequest({
        method: "POST",
        url: sonarr_url.concat("/api/v3/series"),
        headers: headers,
        data: JSON.stringify(series),
        onload: function (response) {
            const responseJSON = JSON.parse(response.responseText);
            let button = document.getElementById("BLUToSonarr-" + imdbid);
            if (response.status == 201) {
                clickswap(imdbid, responseJSON.titleSlug);
                GM.notification(responseJSON.title + " Successfully sent to Sonarr", "BLU To Sonarr");
                button.textContent = "View In Sonarr";
                button.style.color = "#99EDC3";
            } else {
                button.textContent = "View In Sonarr";
                button.style.color = "#99EDC3";
            }
        },
        onerror: function () {
            GM.notification("Request Error.\nCheck Sonarr URL!", "BLU To Sonarr");
        },
        onabort: function () {
            GM.notification("Request is aborted.", "BLU To Sonarr");
        }
    });
}
