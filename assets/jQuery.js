// EVENTS
$("#click-jQuery").on('click', function() {
  $('#2-jQuery').text('Button Clicked');
})
$("#dblclick-jQuery").on('dblclick', function() {
  $('#3-jQuery').text('jQuery Double-Clicked Btn');
})
$(this).on('keydown', function(e) {
  $('#4-jQuery').text(e.key.toUpperCase());
});
$('#box-jQuery').on('mousemove', function(e) {
  $("#5-jQuery").text(`Coordinates: (${e.clientX}, ${e.clientY})`);
})
$('#input-jQuery').on('click', function() {
  let value = $('[data-input-jQuery]').val().toUpperCase();
  $('#6-jQuery').text(`Text Entered: ${value}`);
})
$('#true-img-jQuery').on('load', function() {
  $('#7-jQuery').text('Img Loaded: true');
})
$('#false-img-jQuery').on('error', function() {
  $('#8-jQuery').text('Img Loaded: false');
})
$('[data-form-jQuery]').on('submit', function() {
  $('#9-jQuery').text(`$('[data-form-jQuery]').on('submit', () => alert('form Submitted');`);
})
$('#mySelect-jQuery').on('change', function() {
  const option = this.value;
  $('#10-jQuery').text(`Option Seleceted: ${option}`);
})
$('#hover-jQuery').on('mouseover', function() {
  $('#11-jQuery').text('Element Hoverd');
})
$('#hover-jQuery').on('mouseout', function() {
  $('#11-jQuery').text('');
})
$('#checkbox-jQuery').on('click', function() {
  let isChecked = this.checked;
  $('#12-jQuery').text(`Checkbox isChecked = ${isChecked}`);
})
$('[data-list-jQuery]').on('click', function(e) {
  $('#13-jQuery').text(e.target.textContent)
});
// FUNCTION & SELECTOR
$('#14-jQuery').on('click', function() {
  const p = $('<p></p>').text('Created with jQuery');
  $('#parent-jQuery').append(p);
})
$('#15-jQuery').on('click', function() {
  $('#remove-jQuery').remove();
})
$('#16-jQuery').on('click', function() {
  const node = $('<li></li>').text('Coffee');
  $('[data-appendParent-jQuery]').append(node);
})
$('#17-jQuery').on('click', function() {
  const node = $('<li></li>').text('Water');
  $('[data-prependChild-jQuery]').prepend(node);
})
$('#18-jQuery').on('click', function() {
  const node = $('<li></li>').text('Milk');
  $('[data-appendChild-jQuery]').append(node);
})
$('#19-jQuery').on('click', function() {
  const node = $('<li></li>').text('Water');
  $('[data-appendBefore-jQuery] li').last().before(node);
})
$('#20-jQuery').on('click', function() {
  $('#clone').clone().appendTo($('#append-clone-jQuery'));
})
$('#21-jQuery').on('click', function() {
  $('#header-21-jQuery').addClass('active');
})
$('#22-jQuery').on('click', function() {
  $('#header-22-jQuery').removeClass('active');
})
$('#23-jQuery').on('click', function() {
  $('#header-23-jQuery').toggleClass('active');
})
$('#24-jQuery').on('click', function() {
  $(this).attr('disabled',true);
})
$('#25-jQuery').on('click', function() {
  $('#btn-disabled-jQuery').attr('disabled',false);
})
$('#26-jQuery').on('click', function() {
  $('[data-add-src-jQuery]').attr('src', 'assets/black_lives_matter.svg');
})
$('#27-jQuery').on('click', function() {
  $('[data-remove-src-jQuery]').attr('src', '');
})
$('#28-jQuery').on('click', function() {
  $('#hide-jQuery').css('display', 'none');
})
$('#29-jQuery').on('click', function() {
  $('#show-jQuery').css('display','block');
})
$('#30-jQuery').on('click', function() {
  $('#fadeIn-jQuery').fadeOut();
})
$('#31-jQuery').on('click', function() {
  $('#fadeOut-jQuery').fadeIn('slow');
})
$('#32-jQuery').on('click', function() {
  $('.item-jQuery').each(function() {
    $(this).addClass('active');
  });
})
$('#33-jQuery').on('click', function() {
  $(this).parent().css('fontSize', '2rem');
})
$('#34-jQuery').on('click', function() {
  $('#change-children-class-jQuery').children()
  .css('fontWeight', '700');
})
$('#35-jQuery').on('click', function() {
  $('.important-jQuery').css('fontWeight', '700');
})
$('#36-jQuery').on('click', function() {
  $('#change-font-jQuery').css('fontWeight', '400');
})
$('#37-jQuery').on('click', function() {
  $('.change-jQuery').css('color', '#01bf71');
})
$('#select-jQuery').on('change', function() {
  const option = this.value;
  $('#38-jQuery').text(`Option Seleceted: ${option}`);
})
$('#39-jQuery').on('click', function() {
  $('link-jQuery').first().attr('href', '1-jQuery');
})
$('#40-jQuery').on('click', function() {
  const input = $('[data-alert-input-jQuery]').val();
  input && alert(input);
})
$('#41-jQuery').on('click', function() {
  const listContainer = $('[data-remove-all-jQuery]');
  listContainer.empty();
})
$('#42-jQuery').on('click', function() {
  $('#animate-jQuery').delay(2000)
  .animate({
    left: '0',
    left: '50%',
  },{
    duration: 5000,
  });
})