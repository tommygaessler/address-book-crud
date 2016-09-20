(function () {

  console.log('sanity check!');

  $('button#delete-contact').on('click', function() {
    const id = $(this).data('id');
    console.log(id);
    $.ajax({
      url: `/contacts/delete/${id}`,
      method: 'DELETE'
    }).done((data) => {
      location.reload();
    }).fail((error) => {
      console.log(error);
    });
  });

  $('select#addresses').change(function () {

    const id = $('select#addresses option:selected').val();

    if (id === 'default') {
      $('#line_1').val('');
      $('#line_2').val('');
      $('#city').val('');
      $('select#state').val('default');
      $('#zip').val('');
    } else {
      $.ajax({
        url: `/addresses/get/${id}`,
        method: 'GET'
      }).done((data) => {
        const address_id = data.id;
        const line_1 = data.line_1;
        const line_2 = data.line_2;
        const city = data.city;
        const state = data.state;
        const zip = data.zip;

        $('#line_1').val(line_1);
        $('#line_2').val(line_2);
        $('#city').val(city);
        $('select#state').val(state);
        $('#zip').val(zip);

      }).fail((error) => {
        console.log(error);
      });
    }
  });
})();
