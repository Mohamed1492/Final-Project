var nb_clics = 0;
var mini1 = "";
var mini2 = "";
var case1 = "";
var case2 = "";
var img_ok = 0;
var nb_erreurs = 0;
var le_score = 0;
var depart = false;

function generation() {
  var nb_alea;
  var nb_img = "";
  var test = true;
  var chaine = "";
  for (var i = 0; i < 16; i++) {
    while (test == true) {
      nb_alea = Math.floor(Math.random() * 16) + 1;
      if (chaine.indexOf("-" + nb_alea + "-") > -1) {
        nb_alea = Math.floor(Math.random() * 16) + 1;
      } else {
        nb_img = Math.floor((nb_alea + 1) / 2);
        document.getElementById("case" + i).innerHTML =
          "<img width='110'; height='110'; style='cursor:pointer;' id='img" +
          i +
          "' src='images/image " +
          nb_img +
          ".jpg'  onClick='verify(\"img" +
          i +
          '","image ' +
          nb_img +
          "\")' alt='' />";
        chaine += "-" + nb_alea + "-";
        test = false;
      }
    }
    test = true;
  }
}

generation();

var temps_debut = new Date().getTime();

var attente = setTimeout(function () {
  for (var i = 0; i < 16; i++) {
    document.getElementById("img" + i).src = "images/miniz.png";
  }
  depart = true;
}, 5000);

function verify(limg, source) {
  if (depart == true) {
    nb_clics++;
    document.getElementById(limg).src = "images/" + source + ".jpg";
    if (nb_clics == 1) {
      mini1 = source;
      case1 = limg;
    } 
    else {
      mini2 = source;
      case2 = limg;

      if (case1 != case2) {
        depart = false;
        if (mini1 != mini2) {
          var check = setTimeout(function () {
            document.getElementById(case1).src = "images/miniz.png";
            document.getElementById(case2).src = "images/miniz.png";
            depart = true;
            nb_clics = 0;
            nb_erreurs++;
            if (nb_erreurs < 6) le_score = 5 - nb_erreurs;
            document.getElementById("score").innerHTML = "<strong>" + le_score + "</strong>/5";
            if(le_score ==0){document.getElementById("temps").innerHTML =
            "You are out of chances, try again !";
            depart = false;
            };
          }, 800);
        } 
        else {
          depart = true;
          nb_clics = 0;
          img_ok += 2;
          if (img_ok == 16) {
            var dif_temps = Math.floor(
              (new Date().getTime() - temps_debut) / 1000
            );
            document.getElementById("score").innerHTML =
              "<strong>" + le_score + "</strong>/5";

            document.getElementById("temps").innerHTML =
              "you finished the game in <strong>" +
              dif_temps +
              "</strong> seconds";
              document.getElementById("temps").style.color = "green";
          }
        }
      } else {
        if (nb_clics == 2) nb_clics = 1;
      }
    }
  }
  if (Math.floor((new Date().getTime() - temps_debut) / 1000)> 60)
  {document.getElementById("temps").innerHTML =
      "You are out of time, try again !";
    depart = false;
  }
}
