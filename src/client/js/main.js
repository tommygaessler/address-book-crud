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

  $(document).on('click', '#add-contact', function() {
    $('#add-contact-form')[0].reset();
  });

  $(document).on('click', '.edit-contact', function() {
    var index = $('.edit-contact').index(this);
    $('.edit-contact-form')[index].reset();
  });

  $('#add-contact-form select').change(function() {
    const id = $(`select option:selected`).val();
    console.log(id);

    if (id === 'default') {
      $(`#line_1`).val('');
      $(`#line_2`).val('');
      $(`#city`).val('');
      $(`select#state`).val('default');
      $(`#zip`).val('');
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

        $(`#line_1`).val(line_1);
        $(`#line_2`).val(line_2);
        $(`#city`).val(city);
        $(`select#state`).val(state);
        $(`#zip`).val(zip);

      }).fail((error) => {
        console.log(error);
      });
    }
  });

  $('.edit-contact-form select').on('change', function() {
    const id = $('option:selected', this).val();
    console.log($('option:selected', this).val());

    if (id === 'default') {
      $(`.edit-contact-form #line_1`).val('');
      $(`.edit-contact-form #line_2`).val('');
      $(`.edit-contact-form #city`).val('');
      $(`.edit-contact-form select#state`).val('default');
      $(`.edit-contact-form #zip`).val('');
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

        $(`.edit-contact-form #line_1`).val(line_1);
        $(`.edit-contact-form #line_2`).val(line_2);
        $(`.edit-contact-form #city`).val(city);
        $(`.edit-contact-form select#state`).val(state);
        $(`.edit-contact-form #zip`).val(zip);

      }).fail((error) => {
        console.log(error);
      });
    }
  });

  $('form.edit-contact-form').on('submit', function(event) {
    event.preventDefault();

    const id = $(this).data('id');

    const first_name = $(`#first_name`, this).val();
    const last_name = $(`#last_name`, this).val();
    const phone_number = $(`#phone_number`, this).val();
    const email_address = $(`#email_address`, this).val();

    const line_1 = $(`#line_1`, this).val();
    const line_2 = $(`#line_2`, this).val();
    const city = $(`#city`, this).val();
    const state = $(`#state`, this).val();
    const zip = $(`#zip`, this).val();

    const editContactForm = {
      first_name,
      last_name,
      phone_number,
      email_address,
      line_1,
      line_2,
      city,
      state,
      zip
    };

    console.log(editContactForm);

    $.ajax({
      url: `/contacts/edit/${id}`,
      method: 'PUT',
      data: editContactForm
    }).done((data) => {
      location.reload();
    }).fail((error) => {
      console.log(error);
    });
  });
})();
