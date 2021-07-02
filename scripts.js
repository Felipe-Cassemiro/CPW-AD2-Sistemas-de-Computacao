var cormasc = new Array (2);

cormasc [0] = ["Modelo Preta", "MascaraPreta"]
cormasc [1] = ["Modelo Branca", "MascaraBranca"]


function MostraCor (Cor) {
    var jan = open("", cormasc[Cor][0],
    "location=no,status=no," +
    "width=300,height=400");

    with (jan.document) {
        write("<!DOCTYPE html>");
        write("<html><head><title>Tempo de Mascaras</title>");
        write("<link rel='stylesheet' type='text/css' href='estilo.css'>");
        write("</head><body>");
        write("<div class='janInfo'>");
        write("<h2>", cormasc[Cor][0], "</h2></div>");
        write("<div class='imgMasc'>");
        write("<p><img src='Imagens/", cormasc[Cor][1], ".png' /></p></div>");

        write("<input type='button' value='Fechar' ");
        write("onClick='window.close();'/>");
        write("</form>");
        write("</body></html>");
        close();
        }
}