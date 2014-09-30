(function($) 
{

    $.fn.calculator = function(options) 
    {
        var val = [];

        var element = {
            ac:           '.ac',
            calculator:   '.calculator',
            keyHolder:    '.key-holder',
            key:          '.key',
            outputWindow: 'input[type="text"]'
        };

        var calculator = 
        {

            init: function(element)
            {
                calculator.calculatorWidth(element.calculator);
                calculator.outputWindow(element.outputWindow, element.key);
                calculator.keyHolderWidth(element.keyHolder);
                calculator.keyWidth(element.key);
                calculator.ac(element.ac, element.outputWindow);
            },

            ac: function(element, output)
            {
                $(element).click(function() {
                    return $(output).val('').focus();
                });
            },

            calculatorWidth: function(element)
            {
                calculator.getCalculatorWidth(element);

                $(window).resize(function() {
                    calculator.getCalculatorWidth(element);
                });
            },

            getCalculatorWidth: function(element)
            {
                return $(element).css({
                    'width': calculator.setCalculatorWidth()
                });
            },

            setCalculatorWidth: function()
            {
                return $(window).width();
            },

            keyHolderWidth: function(element)
            {
                calculator.getKeyHolderWidth(element);

                $(window).resize(function() {
                    calculator.getKeyHolderWidth(element);
                });
            },

            getKeyHolderWidth: function(element)
            {
                return $(element).css({
                    'width': calculator.setKeyHolderWidth()
                });
            },

            setKeyHolderWidth: function()
            {
                return calculator.setCalculatorWidth();
            },

            keyWidth: function(element)
            {
                calculator.getKeyStyle(element);

                $(window).resize(function() {
                    calculator.getKeyStyle(element);
                });
            },

            getKeyStyle: function(element)
            {
                return $(element).css({
                    'font-size':      calculator.getKeyFontSize(),
                    'padding-top':    calculator.getKeyPaddingTop(), 
                    'padding-bottom': calculator.getKeyPaddingBottom(),
                    'width':          calculator.getKeyWidth()
                });
            },

            getKeyFontSize: function()
            {
                return calculator.setCalculatorWidth() / 20;
            },

            getKeyPaddingBottom: function()
            {
                return 20 / 1;
            },

            getKeyPaddingTop: function()
            {
                return 20 / 1;
            },

            getKeyWidth: function()
            {
                return calculator.setKeyHolderWidth() / 4;
            },

            outputWindow: function(element, key)
            {
                $(element).focus();

                calculator.outputWindowWidth(element);

                $(key).click(function() {
                    var value = $(this).text();

                    if(value != '=' && value != 'AC') {
                        val.push(value);
                        
                        $(element).val(val.toString().replace(/\,/g,""));
                    }
                    
                });
            },

            outputWindowStyle: function(element)
            {
                return $(element).css({
                    'width':     calculator.getOutputWindowWidth(),
                    'font-size': calculator.getOutputWindowFontSize(),
                    'padding':   calculator.getOutputWindowPadding()
                });
            },

            outputWindowWidth: function(element)
            {
                calculator.outputWindowStyle(element);

                $(window).resize(function() {
                    calculator.outputWindowStyle(element);
                });
            },

            getOutputWindowFontSize: function()
            {
                return calculator.setCalculatorWidth() / 15;
            },

            getOutputWindowPadding: function()
            {
                return 10 / 1;
            },

            getOutputWindowWidth: function()
            {
                return calculator.setCalculatorWidth() - 25;
            }

        }

        calculator.init(element);

    };

}(jQuery));