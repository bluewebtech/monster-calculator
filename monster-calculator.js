/**
 * Plugin: Monster Calculator
 * Author: Peter Morrison
 * Created: 2014-09-30
 * Updated: 2014-10-01
 * Version: 0.1.0
*/

(function($) 
{

    // Define the calculator object.
    $.fn.calculator = function() 
    {
        // Input equation collection.
        var val = [];

        // Element names.
        var element = {
            ac:           '.ac',
            calculator:   '.calculator',
            equal:        '.equal',
            keyHolder:    '.key-holder',
            key:          '.key',
            outputWindow: 'input[type="text"]'
        };

        // Calculator object.
        var calculator = 
        {

            /**
             * Calculator initializer.
             * 
             * @param string element
             * 
             * @return void
            */
            init: function(element)
            {
                calculator.calculatorWidth(element.calculator);
                calculator.outputWindow(element.outputWindow, element.key);
                calculator.keyHolderWidth(element.keyHolder);
                calculator.keyWidth(element.key);
                calculator.ac(element.ac, element.outputWindow);
                calculator.equal(element.equal, element.outputWindow);
            },

            /**
             * Clear the output window contents and equation collection.
             * 
             * @param string element
             * @param string output
             * 
             * @return string
            */
            ac: function(element, output)
            {
                $(element).click(function() {
                    val = [];
                    return $(output).val('').focus();
                });
            },

            /**
             * Apply the calculator default and resize width.
             * 
             * @param string element
             * 
             * @return void
            */
            calculatorWidth: function(element)
            {
                calculator.getCalculatorWidth(element);

                $(window).resize(function() {
                    calculator.getCalculatorWidth(element);
                });
            },

            /**
             * Define the calculator width styling attributes.
             * 
             * @param string element
             * 
             * @return string
            */
            getCalculatorWidth: function(element)
            {
                return $(element).css({
                    'width': calculator.setCalculatorWidth()
                });
            },

            /**
             * Set the calculator window width.
             * 
             * @return int
            */
            setCalculatorWidth: function()
            {
                return $(window).width();
            },

            /**
             * Apply the key holder default and resize width.
             * 
             * @param string element
             * 
             * @return void
            */
            keyHolderWidth: function(element)
            {
                calculator.getKeyHolderWidth(element);

                $(window).resize(function() {
                    calculator.getKeyHolderWidth(element);
                });
            },

            /**
             * Define the key holder width styling attributes.
             * 
             * @param string element
             * 
             * @return string
            */
            getKeyHolderWidth: function(element)
            {
                return $(element).css({
                    'width': calculator.setKeyHolderWidth()
                });
            },

            /**
             * Set the key holder width.
             * 
             * @return int
            */
            setKeyHolderWidth: function()
            {
                return calculator.setCalculatorWidth();
            },

            /**
             * Apply the default and resize width of all keys.
             * 
             * @param string element
             * 
             * @return void
            */
            keyWidth: function(element)
            {
                calculator.getKeyStyle(element);

                $(window).resize(function() {
                    calculator.getKeyStyle(element);
                });
            },

            /**
             * Define width styling attributes for all keys.
             * 
             * @param string element
             * 
             * @return string
            */
            getKeyStyle: function(element)
            {
                return $(element).css({
                    'font-size':      calculator.getKeyFontSize(),
                    'padding-top':    calculator.getKeyPaddingTop(), 
                    'padding-bottom': calculator.getKeyPaddingBottom(),
                    'width':          calculator.getKeyWidth()
                });
            },

            /**
             * Define the font size for all keys.
             * 
             * @return int
            */
            getKeyFontSize: function()
            {
                return calculator.setCalculatorWidth() / 20;
            },

            /**
             * Define the bottom padding for all keys.
             * 
             * @return int
            */
            getKeyPaddingBottom: function()
            {
                return 20 / 1;
            },

            /**
             * Define the top padding for all keys.
             * 
             * @return int
            */
            getKeyPaddingTop: function()
            {
                return 20 / 1;
            },

            /**
             * Define the width for all keys.
             * 
             * @return int
            */
            getKeyWidth: function()
            {
                return calculator.setKeyHolderWidth() / 4;
            },

            /**
             * Handle the default focus of the output window. The population of all equation data
             * and the clearing of the current output window.
             * 
             * @param string element
             * @param string key
             * 
             * @return void
            */
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

            /**
             * Define the output window styling attributes.
             * 
             * @param string element
             * 
             * @return string
            */
            outputWindowStyle: function(element)
            {
                return $(element).css({
                    'width':     calculator.getOutputWindowWidth(),
                    'font-size': calculator.getOutputWindowFontSize(),
                    'padding':   calculator.getOutputWindowPadding()
                });
            },

            /**
             * Apply the default and resize width of the output window.
             * 
             * @param string element
             * 
             * @return void
            */
            outputWindowWidth: function(element)
            {
                calculator.outputWindowStyle(element);

                $(window).resize(function() {
                    calculator.outputWindowStyle(element);
                });
            },

            /**
             * Define the font size for the output window.
             * 
             * @return int
            */
            getOutputWindowFontSize: function()
            {
                return calculator.setCalculatorWidth() / 15;
            },

            /**
             * Define the padding for the output window.
             * 
             * @return int
            */
            getOutputWindowPadding: function()
            {
                return 10 / 1;
            },

            /**
             * Define the width for the output window.
             * 
             * @return int
            */
            getOutputWindowWidth: function()
            {
                return calculator.setCalculatorWidth() - 25;
            },

            /**
             * Handle the processing of the current equation within the output window.
             * 
             * @param string element
             * @param string output
             * 
             * @return void
            */
            equal: function(element, output)
            {
                $(element).click(function() {
                    try {
                        var equation = $(output).val()
                            .replace(String.fromCharCode(120), '*')
                            .replace(String.fromCharCode(247), '/');

                        $(output).val(math.eval(equation));
                    } catch(e) {
                        console.log(e.message);
                    }
                });
            }

        }

        // Initialize the calculator
        calculator.init(element);
    };

}(jQuery));