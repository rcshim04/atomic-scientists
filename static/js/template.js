let scientist, tab;

const info = [
    {
        "location": "England",
        "name": "John Dalton",
        "nickname": "The Father of Chemistry"
    },
    {
        "location": "Russia",
        "name": "Dmitri Mendeleev",
        "nickname": "The Father of the Periodic Table"
    },
    {
        "location": "England",
        "name": "J. J. Thomson",
        "nickname": "Sir Plum Pudding"
    },
    {
        "location": "New Zealand",
        "name": "Ernest Rutherford",
        "nickname": "The Father of Nuclear Physics"
    },
    {
        "location": "Denmark",
        "name": "Niels Bohr",
        "nickname": "Nicholas Baker"
    },
    {
        "location": "England",
        "name": "James Chadwick",
        "nickname": "Jimmy Neutron"
    },
    {
        "location": "Germany",
        "name": "Max Planck",
        "nickname": "The Founding Father of Quantum Theory"
    },
    {
        "location": "Germany → America",
        "name": "Albert Einstein",
        "nickname": "Der Depperte"
    },
    {
        "location": "France",
        "name": "Louis de Broglie",
        "nickname": "Jekyll and Hyde"
    },
    {
        "location": "Austria-Hungary",
        "name": "Erwin Schrödinger",
        "nickname": "Dead or Alive"
    },
    {
        "location": "Germany",
        "name": "Werner Heisenberg",
        "nickname": "Walter White"
    }
]
let data;

function setTemplate() {
    $(".menu").empty();
    if (tab != "cites") {
        for (let key in data[scientist][tab]) {
            let value = data[scientist][tab][key]
            if (typeof value === "string" || value instanceof String) {
                $(".menu").append(`<p>${key}:&ensp;<b>${value}</b></p>`);
            } else {
                $(".menu").append(`<p>${key}:</p>`);
                let list = "";
                for (let el of value) {
                    list += `<li>${el}</li>`;
                }
                $(".menu").append(`<ul><b>${list}</b></ul>`);
            }
        }
    } else {
        $(".menu").append(`<a href="/references/" style="color: rgb(102, 62, 31); text-decoration: none;">See references<span class="material-icons-outlined">chevron_right</span></a>`);
    }
    $(".location").html(`<span class="material-icons-outlined">place</span>${info[scientist].location}`);
    $(".name").text(info[scientist].name);
    $(".nickname").text(info[scientist].nickname);
    $(".portrait").attr("src", `/static/img/${scientist}.png`)
    document.title = info[scientist].name
}

$(document).ready(function() {
    let urlParams = new URLSearchParams(window.location.search);
    if(!urlParams.get("scientist")) {
        urlParams.set("scientist", 0);
        history.replaceState(null, null, "?"+urlParams.toString());
    }
    if(!urlParams.get("tab")) {
        urlParams.set("tab", "basic");
        history.replaceState(null, null, "?"+urlParams.toString());
    }
    scientist = urlParams.get("scientist");
    tab = urlParams.get("tab");
    $("#"+tab).addClass("active");

    $.getJSON(`${location.origin}/static/data.json`, function(json) {
        data = json.scientists;
        setTemplate();
    });

    $(".tab").on("click", function() {
        $(".tab").removeClass("active");
        $(this).addClass("active");
        urlParams.set("tab", $(this).attr("id"));
        history.replaceState(null, null, "?"+urlParams.toString());
        tab = urlParams.get("tab");
        setTemplate();
    });
    $(".prev").on("click", function() {
        scientist--;
        if (scientist < 0) {
            scientist += info.length;
        }
        urlParams.set("scientist", scientist);
        history.replaceState(null, null, "?"+urlParams.toString());
        setTemplate();
    });
    $(".next").on("click", function() {
        scientist++;
        scientist %= info.length;
        urlParams.set("scientist", scientist);
        history.replaceState(null, null, "?"+urlParams.toString());
        setTemplate();
    });
})