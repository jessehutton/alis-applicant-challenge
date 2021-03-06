$( function() {
    var language = 'english';
    $("#when").datepicker();
    $("#contact-form").validate({
        rules: {
            salutation: "required",
            firstname: "required",
            lastname: "required",
            address: "required",
            city: "required",
            state: {
                required: true,
                stateUS: {
                    includeTerritories: true,
                    includeMilitary: true
                }
            },
            zip: {
                required: true,
                zipcodeUS: true
            },
            phone: {
                required: true,
                phoneUS: true
            },
            email: {
                required: true,
                email: true
            },
            who: "required",
            what: {
                required: true,
                maxlength: 2000
            },
            where_city: "required",
            where_state: {
                required: true,
                stateUS: {
                    includeTerritories: true,
                    includeMilitary: true
                }
            },
            when: "date"
        },
        submitHandler: function(form) {
            let data = JSON.stringify($(form).serializeArray());
            console.log(data);
            $('#form-data-output').text(data);
            $('#form-data-output').show();
        },
        invalidHandler: function(event, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                if(language == 'spanish'){
                    var message = errors == 1
                    ? 'Te perdiste 1 campo. Ha sido destacado'
                    : 'Te perdiste ' + errors + ' campos. Han sido destacados';
                } else {
                    var message = errors == 1
                    ? 'You missed 1 field. It has been highlighted'
                    : 'You missed ' + errors + ' fields. They have been highlighted';
                }
                $("div.error span").html(message);
                $("div.error").show();
            } else {
                $("div.error").hide();
            }
        }
    });
    $("#witness").change( function(){
        if($("#witness").is(":checked")){
            $("#witness-details").show();
            $("#contact-form").rules( "add", {
                witness_firstname: "required",
                witness_lastname: "required",
                witness_phone: {
                    required: true,
                    phoneUS: true
                }
            });
        } else {
            $("#witness-details").hide();
            $("#contact-form").rules( "remove", "witness_firstname witness_lastname witness_phone" );
        }
    });
    $("#attorney").change( function(){
        if($("#attorney").is(":checked")){
            $("#attorney-details").show();
            $("#contact-form").rules( "add", {
                attorney_name: "required",
                attorney_practicename: "required",
                attorney_website: {
                    required: true,
                    url: true
                }
            });
        } else {
            $("#attorney-details").hide();
            $("#contact-form").rules( "remove", "attorney_name attorney_practicename attorney_website" );
        }
    });
    $('#select-language').click( function(){
        if (language == "english"){
            language = "spanish";
            $('#select-language').text('English');
            $('#contact-title').text('Informaci??n del Contacto');
            $('label[for="firstname"]').text('Primer Nombre');
            $('#firstname').attr('placeholder', 'Primer Nombre');
            $('label[for="lastname"]').text('Apellido');
            $('#lastname').attr('placeholder', 'Apellido');
            $('label[for="address"]').text('Direcci??n');
            $('#address').attr('placeholder', 'Direcci??n');
            $('label[for="city"]').text('Ciudad');
            $('#city').attr('placeholder', 'Ciudad');
            $('label[for="state"]').text('Estatl');
            $('#state').attr('placeholder', 'Estatl');
            $('label[for="zip"]').text('C??digo Postal');
            $('#zip').attr('placeholder', 'C??digo Postal');
            $('label[for="phone"]').text('N??mero de Tel??fono');
            $('label[for="email"]').text('Correo electr??nico');
            $('#email').attr('placeholder', 'nombre@email.com');
            $('#questions-title').text('Preguntas');
            $('label[for="who"]').text('??Qui??n?');
            $('#who').attr('placeholder', 'H??ganos saber qui??n...');
            $('label[for="what"]').text('??Qu???');
            $('#what').attr('placeholder', 'H??ganos saber qu??...');
            $('#char-limit').text('*l??mite de 2000 caracteres');
            $('#where-text').text('??Donde?');
            $('label[for="where_city"]').text('Ciudad');
            $('#where_city').attr('placeholder', 'Ciudad');
            $('label[for="where_state"]').text('Estatl');
            $('#where_state').attr('placeholder', 'Estatl');
            $('label[for="when"]').text('??Cu??ndo?');
            $('#witness-text').text('??Tienes un testigo?');
            $('label[for="witness_firstname"]').text('Testigo Primer Nombre');
            $('#witness_firstname').attr('placeholder', 'Primer Nombre');
            $('label[for="witness_lastname"]').text('Testigo Apellido');
            $('#witness_lastname').attr('placeholder', 'Apellido');
            $('label[for="witness_phone"]').text('Testigo N??mero de Tel??fono');
            $('#attorney-text').text('??Tienes un abogado?');
            $('label[for="attorney_name"]').text('Nombre del Abogado');
            $('#attorney_name').attr('placeholder', 'Nombre del Abogado');
            $('label[for="attorney_practicename"]').text('Nombre de la pr??ctica del abogado');
            $('#attorney_practicename').attr('placeholder', 'Nombre de la pr??ctica del abogado');
            $('label[for="attorney_website"]').text('Sitio Web del Abogado');
            $('.text-yes').each(function(){
                $(this).text('Si');
            });
            $('#submit').text('Enviar');
        } else {
            language = "english"
            $('#select-language').text('Espa??ol');
            $('#contact-title').text('Contact Information');
            $('label[for="firstname"]').text('First Name');
            $('#firstname').attr('placeholder', 'First Name');
            $('label[for="lastname"]').text('Last Name');
            $('#lastname').attr('placeholder', 'Last Name');
            $('label[for="address"]').text('Address');
            $('#address').attr('placeholder', 'Address');
            $('label[for="city"]').text('City');
            $('#city').attr('placeholder', 'City');
            $('label[for="state"]').text('State');
            $('#state').attr('placeholder', 'State');
            $('label[for="zip"]').text('Zip');
            $('#zip').attr('placeholder', 'Zip');
            $('label[for="phone"]').text('Phone Number');
            $('label[for="email"]').text('Email');
            $('#email').attr('placeholder', 'someone@email.com');
            $('#questions-title').text('Questions');
            $('label[for="who"]').text('Who?');
            $('#who').attr('placeholder', 'Let us know who...');
            $('label[for="what"]').text('What?');
            $('#what').attr('placeholder', 'Let us know what...');
            $('#char-limit').text('*2000 Character Limit');
            $('#where-text').text('Where?');
            $('label[for="where_city"]').text('City');
            $('#where_city').attr('placeholder', 'City');
            $('label[for="where_state"]').text('State');
            $('#where_state').attr('placeholder', 'State');
            $('label[for="when"]').text('When?');
            $('#witness-text').text('Do you have a witness?');
            $('label[for="witness_firstname"]').text('Witness First Name');
            $('#firstname').attr('placeholder', 'First Name');
            $('label[for="witness_lastname"]').text('Witness Last Name');
            $('#witness_lastname').attr('placeholder', 'Last Name');
            $('label[for="witness_phone"]').text('Witness Phone Number');
            $('#attorney-text').text('Do you have an attorney?');
            $('label[for="attorney_name"]').text('Attorney Name');
            $('#attorney_name').attr('placeholder', 'Attorney Name');
            $('label[for="attorney_practicename"]').text('Attorney Practice Name');
            $('#attorney_practicename').attr('placeholder', 'Attorney Practice Name');
            $('label[for="attorney_website"]').text('Attorney Website');
            $('.text-yes').each(function(){
                $(this).text('Yes');
            });
            $('#submit').text('Submit');
        }
    });
});