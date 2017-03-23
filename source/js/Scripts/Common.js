$.ActivateLeftAndTopMenuItems = function (leftMenuId, topMenuId) {
    if (leftMenuId === "" || topMenuId === "") {
        return;
    }
    var leftMenuA = $("#" + leftMenuId); //left menu item
    var topMenuCaption = $('[pageKeys*= "' + topMenuId + '"] a');
    //var itemDivPicture = $("#" + leftMenuId + ' div:first');
    //var topMenuCaption = $('[pageKeys*= "' + topMenuId + '"] div:first');
    //var topMenuLine = $('[pageKeys*= "' + topMenuId + '"] div:last');
    if (leftMenuA.length == 0 || topMenuCaption.length == 0) {
        return;
    }
    leftMenuA.removeClass('active')
    leftMenuA.addClass('active');
    // topMenuLi.removeClass();
    topMenuCaption.addClass('active');
};

///shows PopUp window PopUpWindowControl.ascx, that was filled from codebehind
function ShowPoPup(elementId) {
    var modalWindow = $("#"+elementId);
    if (modalWindow.length != 0) {
        modalWindow.modal({ backdrop: 'static', keyboard: false });
        modalWindow.modal("show");
    }
    else {
        alert('PopUpWindowControl was not found');
    }
}

//clears text value from textBox if val()==value
//$.ClearInput = function (textBox, value)
//{
//    if ($.trim($(textBox).val()) == value)
//    {
//        $(textBox).val("");
//    }
//};

//fills text value of textbox with input value
//$.SetInputText = function (textBox, value)
//{
//    if ($.trim($(textBox).val()) == "")
//    {
//        $(textBox).val(value);
//    }
//};

//shows the message if the validation Expression is failed
function ShowRegularExpressionMsg(expressionSpanMsg, isValid) {
    if (expressionSpanMsg.style.visibility === 'visible') {
        //it means that validation was failed and we have to show span
        expressionSpanMsg.style.display = "block";
        isValid.val = false;
    }
}

//shows the message if the Required validation is failed (if custom outofill == entered value)
function ShowRequiredExpressionMsg(divRequiredFieldValidator, inputValue, enteredValue, isValid) {
    if (inputValue === enteredValue || inputValue === "") {
        divRequiredFieldValidator.style.display = "block";
        isValid.val = false;
    }
}
$.toArray = function (list) {
    return Array.prototype.slice.call(list || [], 0);
}

function AmountOnly(e, decimalOnly) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
        (decimalOnly == undefined && e.keyCode == 190) || 
        // Allow: Ctrl+A, Command+A
        (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: home, end, left, right, down, up
        (e.keyCode >= 35 && e.keyCode <= 40)) {
        // let it happen, don't do anything
        return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
};

function decimals(input) {
    result = input.split(",").join("");
    result = new Intl.NumberFormat("en-AU").format(result);
    return (result == "NaN") ? "" : result;
}

/*
bindDropdownsMinWithMax binds minimal value dropdown list with maximal value dropdown list.
So selected value of max list cannot be lesser then value of min list.

minDdl - id of dropdown list with minial value (1st argument)
maxDdl - id of dropdown list with maximal value (2nd argument)
*/

function bindDropdownsMinWithMax(minDdl, maxDdl) {
    var minStr = $(minDdl + ' :selected').text();
    var maxStr = $(maxDdl + ' :selected').text();
    if (parseFloat(minStr) > parseFloat(maxStr)) {
        var val = $(maxDdl + ' :contains(' + minStr + ')').first().val();
        $(maxDdl).selectpicker('val', val);
    }
}

/*
bindDropdownsMaxWithMin binds maximal value dropdown list with minimal value dropdown list.
So selected value of min list cannot be greater then value of max list.

maxDdl - id of dropdown list with maximal value (1st argument)
minDdl - id of dropdown list with minial value (2nd argument)
*/

function bindDropdownsMaxWithMin(maxDdl, minDdl) {
    var minStr = $(minDdl + ' :selected').text();
    var maxStr = $(maxDdl + ' :selected').text();
    if (parseFloat(minStr) > parseFloat(maxStr)) {
        var val = $(minDdl + ' :contains(' + maxStr + ')').first().val();
        $(minDdl).selectpicker('val', val);
    }
}
