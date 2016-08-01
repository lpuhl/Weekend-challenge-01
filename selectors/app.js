$(document).ready(function() {
  console.log('First?');

  // Class and ID
  $('#example').css('background-color', 'yellow');
  $('.inner-list').css('background-color', 'red');

  // Getter/Setter
  console.log('Original H1 Text: ', $('h1').text());
  // $('h1').text('Hello Cohort!');

  // Direct Descendants
  // $('div > h2').css('background-color', 'purple');

  // Multiple selections
  // $('.my-list li p, #example li p').css('background-color', 'pink');

  // Find
  // $('li').find('p').css('background-color', 'orange');
  // $('li').find('p').css('display', 'none');

  // Traversal: First and Last
  // $('ul').first().css('background-color', 'pink');
  // $('ul').last().css('background-color', 'peachpuff');

  // Traversal: Dynamic and Relative positions, .parent(), .sibling(), .children(), .next(), .closest()

  // Method Chaining
  // $('.inner-p').parent().parent().css('background-color', 'blue');
  // $('.my-list p').last().parent().css('background-color', 'peachpuff');

  // Pseudo Selectors
  // $('p:even').css('background-color', 'green');

  // Filtering
  // $('li').filter(':even').css( 'background-color', 'red' );



});

console.log('When does this happen?');
