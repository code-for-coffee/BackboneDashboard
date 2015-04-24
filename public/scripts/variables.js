$(document).ready(function() {
  // some data object
  var data = { title: "using templates with jQuery", subheader: "working it", message: "don't forget to escape characters with double percents", value_for_button: "some button goes here", img_src: "http://www.vetprofessionals.com/catprofessional/images/home-cat.jpg", alt_text: "students linked this"}
  // make my template
  var template = _.template($('#stuff').html());
  // write template to body's html
  $('body').html(template(data));
});
