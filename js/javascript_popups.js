// ========== ALERT() FUNCTIONS ==========
function empty_alert() {
  init();
  alert();
}

function basic_alert() {
  init();
  alert(
    'This is a basic popup with multiple lines of ' +
    'text - created with alert(\'text goes here\');'
  );
}

function formatted_alert() {
  init();
  alert(
    '|\\' + '\t\t-\t|\\' + '\n' +
    '|_\\' + '\t\t-\t|_\\' + '\n' +
    '|__\\' + '\t\t-\t|__\\' + '\n' +
    '|__/' + '\t\t-\t|__/' + '\n' +
    '|_/' + '\t\t-\t|_/' + '\n' +
    '|/' + '\t\t-\t|/'
  );
}

function text_from_div_alert() {
  init();

  // Setting things up:
  var txt = 'Something very very super important happened the other day!';
  set_div_text('alert',txt);

  // Actually getting the text from the div to put into an alert:
  var alertText = getDivById('alert').innerHTML;
  alert(
    'Text from div:' + '\n' +
    alertText +
    ' Now more text to show how it is possible to insert html from page into div.'
  );
}

function create_alert_link_easy() {
  init();
  var div = getDivById('alert');
  var message = 'Click the link to create an alert popup:</br>';
  message += '<a onclick="alert(\'Boom! Done.\')">Click me!</a>';
  message += '</br>Do it. I know you want to.';
  div.innerHTML = message;
}

function create_alert_link_advanced() {
  init();
  var Adiv = getDivById('alert');
  var Odiv = getDivById('other');

  // Load info into this div
  Odiv.innerHTML = '<h3>Header1</h3>' +
    '<h6>Classified Info</h6>' +
    '<h3>Header2</h3>' +
    '<h6>Not important</h6>' +
    '<h3>Header3</h3>' +
    '<h6>Other Important Info</h6>';

  // Process Odiv to find important info
  var alertText = getHsByTag(Odiv, 'h3')[0].innerHTML + ' - ' +
    getHsByTag(Odiv,'h6')[0].innerHTML + '\\n' +
    getHsByTag(Odiv,'h3')[2].innerHTML + ' - ' +
    getHsByTag(Odiv,'h6')[2].innerHTML;

  var message = 'Click the link to create an alert popup:</br>' +
    '<a onclick="alert(\'' + alertText + '\')">Click me!</a>' +
    '</br>Do it. I know you want to.';

  Adiv.innerHTML = message;
}

// ========== CONFIRM() FUNCTIONS ==========

function empty_confirm() {
  init();
  var x = confirm();
}

function basic_confirm() {
  init();
  var x = confirm(
    'This is a basic popup with multiple lines of ' +
    'text - created with var x = confirm(\'text goes here\');'
  );
}

function formatted_confirm() {
  init();
  var x = confirm(
    '|\\' + '\t\t-\t|\\' + '\n' +
    '|_\\' + '\t\t-\t|_\\' + '\n' +
    '|__\\' + '\t\t-\t|__\\' + '\n' +
    '|__/' + '\t\t-\t|__/' + '\n' +
    '|_/' + '\t\t-\t|_/' + '\n' +
    '|/' + '\t\t-\t|/'
  );
}

// ========== PROMPT() FUNCTIONS ==========

function empty_prompt() {
  init();
  var p = prompt();
}

function basic_prompt() {
  init();
  var p = prompt(
    'This is a basic popup with multiple lines of ' +
    'text - var x = prompt(\'text goes here\',\'Default text here!\');',
    'Default text here!'
  );
}

function formatted_prompt() {
  init();
  var p = prompt(
    '|\\' + '\t\t-\t|\\' + '\n' +
    '|_\\' + '\t\t-\t|_\\' + '\n' +
    '|__\\' + '\t\t-\t|__\\' + '\n' +
    '|__/' + '\t\t-\t|__/' + '\n' +
    '|_/' + '\t\t-\t|_/' + '\n' +
    '|/' + '\t\t-\t|/',
    'a' + '\t' + 'b' + '\n' + 
    'c' + '\t' + 'd'
  );
}

// ========== OTHER FUNCTIONS USED ==========

/*
 * set_div_text(div,message) sets text inside a given div name.
 *
 * @params
 * div (string): name of div to insert message into
 * message (string): text to insert into specified div
 */
function set_div_text(div,message) {
  getDivById(div).innerHTML = message;
}

/*
 * init() replaces the side content divs with empty strings.
 * 
 * This ensures that no examples leave text that may interfere with
 * other examples.
 */
function init() {
  getDivById('alert').innerHTML = '';
  getDivById('confirm').innerHTML = '';
  getDivById('prompt').innerHTML = '';
  getDivById('other').innerHTML = '';
}

function getDivById(div) {
  return document.getElementById(div);
}

function getHsByTag(element, tag) {
  return element.getElementsByTagName(tag);
}