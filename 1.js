$(document).ready(function() {
    $('.food-image').on('dragstart', dragStart);
    $('.animal-image').on('dragover', dragOver);
    $('.animal-image').on('drop', drop);
    $('#restart').on('click', reloadGame);

    function dragStart(event) {
      event.originalEvent.dataTransfer.setData('text/plain', event.target.id);
    }

    function dragOver(event) {
      event.preventDefault();
    }

    function drop(event) {
      event.preventDefault();
      var foodId = event.originalEvent.dataTransfer.getData('text/plain');
      var animalId = $(this).attr('data-animal');

      if (foodId === animalId) {
        $(this).html('');
        $('#' + foodId).remove();
        alert('Правильно');
    } else {
      alert('Оно не хочет');
      }
    }

 function reloadGame() {
     location.reload();
  }
});


