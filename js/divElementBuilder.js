var buildParagraph = function(text) {
	var html_text = "";
  html_text = html_text + "<p>" + text + "." +"</p>";
  return html_text;
};

var buildInfoTable = function(image_path, info_text) {
	var html_text = "";
  var split_info = info_text.split(".");
  html_text = html_text + "<table><tr><td><img src=\"" + image_path + "\" width=\"128\" height=\"200\"/>";
  html_text = html_text + "<td>";
  for (x of split_info) {
    if (x == "") continue;
  	html_text = html_text + buildParagraph(x);
  }
  html_text = html_text + "</td></tr></table>";
  return html_text;
};

var buildDiv = function(image_path, info_text) {
	var html_text = "";
  html_text = html_text + "<div class=\"item\">";
  html_text = html_text + buildInfoTable(image_path, info_text);
  html_text = html_text + "</div>";
  return html_text;
};