(function($) {
    'use strict';
    $(function(){

        var app = {
            config: {
                formConfig: {
                    isSubmit: false,
                    beforeSubmit: function() {
                        alert('Форма отправлена');
                    }
                }
            },
            init: function() {
                this.cacheElements();
                this.initPlugins();
                this.bindEvents();
            },
            cacheElements: function() {
                this.$checkBoxRadioInputs = $('.-chosen_input');
                this.$selectInputs = $('.-select');
                this.$fileInput = $('.-input-file');
                this.$checkBoxBtn = $('[data-checkbox]');
                this.$radioBtn = $('[data-radio]');

                this.$form = $('[data-validate="formNova"]');
                this.$resetBtn = $('#resetBtn');
            },
            initPlugins: function() {
                this.$checkBoxRadioInputs.checkRadio();
                this.$selectInputs.selectBox();
                this.$fileInput.fileInput();
                this.$checkBoxBtn.checkBtn();
                this.$radioBtn.radioBtn();
                this.$form.formNova();
                this.$form.formNova('config', this.config.formConfig);
            },
            bindEvents: function() {
                this.$resetBtn.on('click', $.proxy(this.resetForm, this));
            },

            // все события
            resetForm: function() {
                function handler() {
                    this.$selectInputs.selectBox('reset');
                    this.$fileInput.fileInput('reset');
                    this.$radioBtn.radioBtn('reset');
                    this.$checkBoxBtn.checkBtn('reset');
                    this.$form.formNova('clearErrorsMessage');
                }
                setTimeout($.proxy(handler, this), 0); // запускаем действие после событий браузера
            }
        };
        app.init();
    });
}(jQuery));
