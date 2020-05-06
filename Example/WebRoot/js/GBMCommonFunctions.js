// List of functions

//1. Trim                                   - fnTrim(a_strString)
//2. Check null                             - fnIsNull(a_strString)
//3. Compare 2 Strings                      - fnCompareStrings(a_strString1, a_strString2)
//4. Check for Special characters           - fnContainsSpecialChars(a_strString)
//5. Validate Password                      - fnIsValidPassword(a_strString)
//6. Check for valid name                   - fnIsValidName(a_strString)
//7. Is Valid email                         - fnIsEmail(a_strString)
//8. Is Valid date                          - 	(a_strDate)
//9. Compare dates                          - fnCompareDates( a_strDate1, a_strDate2)
//10. IsValidUrl                            - fnIsValidUrl(a_strString)
//11. IsPositiveNumber                      - fnIsPositiveNumber(a_strString))
//12. Check for valid description           - fnIsValidDesc(a_strString)
//13. Check for embeded space character     - fnContainsSpace(a_strString)
//14. Check for Valid Amount                - fnIsValidAmount(sAmount)
//15. Redirect to page if cancel clicked    - fnRedirect(sPage)
//16. Round off the given number to the     - fnRound(number,X)
//17. Replace single quotes                 - fnReplaceSingleQuotes(objControlId)
//18. Validate phone num                    - fnIsValidPhoneNum(a_strString)
//    specified no of decimals
//19. validates if the input is a valid percentage - fnIsValidPercentage(sAmount)
//20. SetID <sol-id><ID-PREFIX><srl-num> format -fnSetId(objControl,sSolId,sIdPrefix, iLenOfSrlNum)
//21. SetTranId <ID-PREFIX> format - fnSetTranId(objControl,sIdPrefix)
// BFX:SDM:20-SEP-2002:BEGIN
// The following set of functions help to dynamically populate a Selection List
//22. Stores options of a Selection List into arrays     - fnStoreOptionsIntoArray
//23. Populates a Selection List with values from arrays - fnFillOptions
//24. Removes all the options of a Selection List        - fnEmptyOptions
//25. Removes all the options of a Selection List        - fnDisplayError
//26. Checks whether String contains specified charcters - fnContainsCharacter
//27. Checks for entries in Mandatory fields		 - fnMandatoryCheck

// BFX:SDM:20-SEP-2002:END
//---------------------------------------------------------------------------------------------------

var NULL_FIELD = "Field cannot be blank"
var SPECIAL_CHARS = "Field cannot contain special characters"
var INVALID_PASSWORD = "Password cannot contain ' ? & \\ characters"
var INVALID_NAME = "Field cannot contain special characters"
var INVALID_DATE = "Invalid date"
//Added by S.Selvi on 29/11/2007
var INVALID_DATE_NEW1 = "Enter the From Date"
var INVALID_DATE_NEW2="Enter the To Date"
var INVALID_URL = "Field contains an invalid URL"
var NOT_POSITIVE_NUM = "Field should contain a positive number"
var INVALID_DESC = "Field cannot contain special characters"
var INVALID_CONFIRM_PASSWORD = "Confirm Password is different from the new password"
var VALID_URL="www.primelearning.com"
var VALID_PHONE_FAX="(508) 616 7000"
var VALID_EMAIL="support@primelearning.com"
var INVALID_DESC_SPECIAL_CHARACTER="\n % ^ & + ? < > = \\ \""
var INVALID_PHONE_FAX_SPECIAL_CHARACTER="\n % ^ & + ? < > = , _ \\ \" "
var c_strDate2;
// Trims the input string of leading and trailing spaces and returns the new string

function fnTrim(a_strString)
{
    var cnt;
    var len = a_strString.length ;
    str = a_strString;
    begin = -1;
    for(cnt=0;cnt<len;cnt++)
    {
        if (str.charAt(cnt) == " ")
        {
            begin = cnt;
        }
        else
        break;
    }
    str = str.slice(begin+1,len);
    len = str.length;
    end = len;
    for(cnt=len-1;cnt>=0;cnt--)
    {
        if (str.charAt(cnt) == " ")
        {
            end = cnt;
        }
        else
        break;
    }
    str = str.slice(0,end);
return str;
}


//---------------------------------------------------------------------------------------------------

// Checks if the input string is null or blanks


function fnIsNull(a_strString)
{
       if (fnTrim(a_strString) == null || fnTrim(a_strString) == "" )
       {
        return true;
       }

    return false;

}


//---------------------------------------------------------------------------------------------------

// Compares the 2 passed strings. Returns true if they are equal. Ignores the leading and trailing spaces.

function fnCompareStrings(a_strString1, a_strString2)
{
       if (fnTrim(a_strString1) != fnTrim(a_strString2))
           return false;
     return true;
}


//---------------------------------------------------------------------------------------------------

// Checks for special characters. Can be used for Login Id check

function fnContainsSpecialChars(a_strString)
{
    a_strString = fnTrim(a_strString);
    if(a_strString.indexOf("`") != -1)
      return true;
    if(a_strString.indexOf("~") != -1)
      return true;
    if(a_strString.indexOf("!") != -1)
       return true;
    if(a_strString.indexOf("@") != -1)
       return true;
    if(a_strString.indexOf("#") != -1)
       return true;
    if(a_strString.indexOf("$") != -1)
       return true;
    if(a_strString.indexOf("%") != -1)
      return true;
    if(a_strString.indexOf("^") != -1)
       return true;
    if(a_strString.indexOf("&") != -1)
       return true;
    if(a_strString.indexOf("*") != -1)
       return true;
    if(a_strString.indexOf("-") != -1)
       return true;
//    if(a_strString.indexOf("_") != -1)
//       return true;
    if(a_strString.indexOf("+") != -1)
       return true;
    if(a_strString.indexOf("=") != -1)
       return true;
    if(a_strString.indexOf("|") != -1)
       return true;
    //if(a_strString.indexOf("\\") != -1)
      // return true;
    if(a_strString.indexOf("}") != -1)
       return true;
    if(a_strString.indexOf("]") != -1)
       return true;
    if(a_strString.indexOf("{") != -1)
       return true;
    if(a_strString.indexOf("[") != -1)
       return true;
    //if(a_strString.indexOf("\"") != -1)
      // return true;
    if(a_strString.indexOf(":") != -1)
       return true;
    if(a_strString.indexOf(";") != -1)
       return true;
    if(a_strString.indexOf("?") != -1)
       return true;
    if(a_strString.indexOf(">") != -1)
       return true;
    if(a_strString.indexOf("<") != -1)
       return true;
    if(a_strString.indexOf("(") != -1)
       return true;
    if(a_strString.indexOf(")") != -1)
       return true;
    if(a_strString.indexOf(",") != -1)
       return true;
    if(a_strString.indexOf("'") != -1)
       return true;
    if(a_strString.indexOf(".") != -1)
       return true;
   // if(a_strString.indexOf("/") != -1)
     //  return true;

    return false;
}


//---------------------------------------------------------------------------------------------------

// Validates the Password string

function fnIsValidPassword(a_strString)
{
  a_strString = fnTrim(a_strString);
 if(a_strString.indexOf(" ") != -1)
     return false;
  if(a_strString.indexOf("'") != -1)
     return false;
  if(a_strString.indexOf("\"") != -1)
     return false;
  if(a_strString.indexOf("?") != -1)
       return false;
  if(a_strString.indexOf("&") != -1)
       return false;

  return true;

}

//---------------------------------------------------------------------------------------------------

// Validates if the string is a valid name. Will be used for validation of Company, Curriculum and course names

function fnIsValidName(a_strString)
{
    var a_strString = fnTrim(a_strString );
    if(a_strString.indexOf("0") != -1)
      return false;
    if(a_strString.indexOf("1") != -1)
      return false;
    if(a_strString.indexOf("2") != -1)
      return false;
    if(a_strString.indexOf("3") != -1)
      return false;
    if(a_strString.indexOf("4") != -1)
      return false;
    if(a_strString.indexOf("5") != -1)
      return false;
    if(a_strString.indexOf("6") != -1)
      return false;
    if(a_strString.indexOf("7") != -1)
      return false;
    if(a_strString.indexOf("8") != -1)
      return false;
    if(a_strString.indexOf("9") != -1)
      return false;
    if(a_strString.indexOf("`") != -1)
      return false;
    if(a_strString.indexOf("~") != -1)
      return false;
    if(a_strString.indexOf("!") != -1)
       return false;
    if(a_strString.indexOf("@") != -1)
       return false;
    if(a_strString.indexOf("#") != -1)
       return false;
    if(a_strString.indexOf("$") != -1)
       return false;
    if(a_strString.indexOf("%") != -1)
      return false;
    if(a_strString.indexOf("^") != -1)
       return false;
    if(a_strString.indexOf("&") != -1)
       return false;
    if(a_strString.indexOf("*") != -1)
       return false;
    if(a_strString.indexOf("(") != -1)
       return false;
    if(a_strString.indexOf(")") != -1)
       return false;
    if(a_strString.indexOf("+") != -1)
       return false;
    if(a_strString.indexOf("=") != -1)
       return false;
    if(a_strString.indexOf("|") != -1)
       return false;
    if(a_strString.indexOf("\\") != -1)
       return false;
    if(a_strString.indexOf("}") != -1)
       return false;
    if(a_strString.indexOf("]") != -1)
       return false;
    if(a_strString.indexOf("{") != -1)
       return false;
    if(a_strString.indexOf("[") != -1)
       return false;
    if(a_strString.indexOf("\"") != -1)
       return false;
    if(a_strString.indexOf(":") != -1)
       return false;
    if(a_strString.indexOf(";") != -1)
       return false;
    if(a_strString.indexOf("/") != -1)
       return false;
    if(a_strString.indexOf("?") != -1)
       return false;
    if(a_strString.indexOf(">") != -1)
       return false;
    if(a_strString.indexOf("<") != -1)
       return false;
    if(a_strString.indexOf("'") != -1)
       return false;
    if(isNaN(a_strString))
        return true;
    else
        return false;

    return true;
}

//---------------------------------------------------------------------------------------------------

// Validates if the passed string is a valid email id

function fnIsEmail(a_strString)
{
    if (a_strString.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)
    {
       return true;
    }

    return false;
}


//---------------------------------------------------------------------------------------------------

// Checks if the passed date is a valid date. Expects date in dd/mm/yyyy format


function fnIsValidDate(a_strDate){

    /*if(a_strDate=="")
        return true;
    */
    if(fnIsNull(a_strDate) || (a_strDate==""))
        return false;

    if(a_strDate.indexOf("/") != -1)
        var a_strDate = a_strDate.split("/");
    else
    if(a_strDate.indexOf("-") != -1)
        var a_strDate = a_strDate.split("-");
    else
    if(a_strDate.indexOf(".") != -1)
        var a_strDate = a_strDate.split(".");


    a_strDay = a_strDate[0];
    a_strMonth = a_strDate[1];
    a_strYear = a_strDate[2];
    if ( ( isNaN( a_strYear ) ) || ( isNaN( a_strMonth ) ) || ( isNaN( a_strDay ) ) )   {
        return false;
    }
    else {
        if (  ( a_strYear < 1900 ) || ( a_strYear > 2099 ) || ( a_strMonth > 12 ) || ( a_strMonth<1 ) || ( a_strDay < 1 ) || ( a_strDay > 31 ) || ( ( ( a_strMonth == 4 ) || ( a_strMonth == 6 ) || ( a_strMonth == 9 ) || (  a_strMonth == 11 ) ) && ( a_strDay > 30 ) ) )
            return false;
        else {
            if ( ( a_strYear % 4 == 0 ) && ( ( a_strYear % 100 != 0 ) || ( a_strYear % 400 == 0 ) ) )   {
                if ( ( a_strMonth == 2 ) && ( ( a_strDay > 29 ) || ( a_strDay < 1 ) ) ) {
                    return false;
                }
            }
            else {
                if ( ( a_strMonth == 2 ) && ( ( a_strDay > 28 ) || ( a_strDay < 1 ) ) ) {
                    return false;
                }
            }
        } // end of else
    }//end of else
    return true;
}



//---------------------------------------------------------------------------------------------------

// Checks if the passed date1 is greater than date2. Expects the dates in the dd/mm/yyyy format
// Checks if FROM Date is lesser than TO Date or not
// FROM Date  -- a_strDate1
// TO Date    -- a_strDate1
function fnCompareDate(a_strDate1, a_strDate2) {
    var a_strMonth1;
    var a_strDay1;
    var a_strYear1;
    var a_strMonth2;
    var a_strDay2;
    var a_strYear2;
    var arrDate1;
    var arrDate2

    var blFlag = true;

            /*  Code modified by Nalini on 18-12-2001 to
                incorporate check for symbols - and . in date field */

            if(a_strDate1.indexOf("/") != -1)
                arrDate1 = a_strDate1.split("/");
            else
            if(a_strDate1.indexOf("-") != -1)
                arrDate1 = a_strDate1.split("-");
            else
            if(a_strDate1.indexOf(".") != -1)
                arrDate1 = a_strDate1.split(".");


            if(a_strDate2.indexOf("/") != -1)
                arrDate2 = a_strDate2.split("/");
            else
                if(a_strDate2.indexOf("-") != -1)
                    arrDate2 = a_strDate2.split("-");
            else
                if(a_strDate2.indexOf(".") != -1)
                    arrDate2 = a_strDate2.split(".");

            //var arrDate1 = a_strDate1.split("/");
            //var arrDate2 = a_strDate2.split("/");

            /*  Code modified by Nalini on 18-12-2001 ends here */


            a_strDay1 = arrDate1[0];
            a_strMonth1 = arrDate1[1];
            a_strYear1 = arrDate1[2];
            a_strDay2 = arrDate2[0];
            a_strMonth2 = arrDate2[1];
            a_strYear2 = arrDate2[2];


    if (parseInt(a_strYear1, 10) > parseInt(a_strYear2, 10))
        return false;
    else
        if ((parseInt(a_strMonth1, 10) > parseInt(a_strMonth2, 10)) && (parseInt(a_strYear1, 10) == parseInt(a_strYear2, 10)))
            return false;
        else
            if ((parseInt(a_strDay1, 10) > parseInt(a_strDay2, 10))
                && (parseInt(a_strYear1, 10) == parseInt(a_strYear2, 10))
                && (parseInt(a_strMonth1, 10) == parseInt(a_strMonth2, 10)))
                return false;

    return true;
}

//---------------------------------------------------------------------------------------------------
// Added By Senthil Rajan
function fnCheckCreationDate(a_strDate1, c_strDate2) {
    var c_strMonth1;
    var c_strDay1;
    var c_strYear1;
    var c_strMonth2;
    var c_strDay2;
    var c_strYear2;
    var c_arrDate1;
    var c_arrDate2

    var c_blFlag = true;


            if(a_strDate1.indexOf("/") != -1)
                c_arrDate1 = a_strDate1.split("/");
            else
            if(a_strDate1.indexOf("-") != -1)
                c_arrDate1 = a_strDate1.split("-");
            else
            if(a_strDate1.indexOf(".") != -1)
                c_arrDate1 = a_strDate1.split(".");


            if(c_strDate2.indexOf("/") != -1)
                c_arrDate2 = c_strDate2.split("/");
            else
                if(c_strDate2.indexOf("-") != -1)
                    c_arrDate2 = c_strDate2.split("-");
            else
                if(c_strDate2.indexOf(".") != -1)
                    c_arrDate2 = c_strDate2.split(".");


            c_strDay1 = c_arrDate1[0];
            c_strMonth1 = c_arrDate1[1];
            c_strYear1 = c_arrDate1[2];
            c_strDay2 = c_arrDate2[0];
            c_strMonth2 = c_arrDate2[1];
            c_strYear2 = c_arrDate2[2];


    if (parseInt(c_strYear1, 10) < parseInt(c_strYear2, 10))
        return false;
    else
        if ((parseInt(c_strMonth1, 10) < parseInt(c_strMonth2, 10)) && (parseInt(c_strYear1, 10) == parseInt(c_strYear2, 10)))
            return false;
        else
            if ((parseInt(c_strDay1, 10) < parseInt(c_strDay2, 10))
                && (parseInt(c_strYear1, 10) == parseInt(c_strYear2, 10))
                && (parseInt(c_strMonth1, 10) == parseInt(c_strMonth2, 10)))
                return false;

    return true;
}


//-------------------------------------------------------------------------------------
// Checks if the passed string is a valid URL


function fnIsValidUrl(a_strString)
{

   var a_strString = fnTrim(a_strString);
    if(a_strString.indexOf(" ") != -1)
      return false;
    if(a_strString.indexOf("`") != -1)
      return false;
    if(a_strString.indexOf("~") != -1)
      return false;
    if(a_strString.indexOf("!") != -1)
       return false;
    if(a_strString.indexOf("@") != -1)
       return false;
    if(a_strString.indexOf("#") != -1)
       return false;
    if(a_strString.indexOf("$") != -1)
       return false;
    if(a_strString.indexOf("%") != -1)
      return false;
    if(a_strString.indexOf("^") != -1)
       return false;
    if(a_strString.indexOf("&") != -1)
       return false;
    if(a_strString.indexOf("+") != -1)
       return false;
    if(a_strString.indexOf("=") != -1)
       return false;
    if(a_strString.indexOf("|") != -1)
       return false;
    if(a_strString.indexOf("\\") != -1)
       return false;
    if(a_strString.indexOf("}") != -1)
       return false;
    if(a_strString.indexOf("]") != -1)
       return false;
    if(a_strString.indexOf("{") != -1)
       return false;
    if(a_strString.indexOf("[") != -1)
       return false;
    if(a_strString.indexOf("\"") != -1)
       return false;
    if(a_strString.indexOf(":") != -1)
       return false;
    if(a_strString.indexOf(";") != -1)
       return false;
    if(a_strString.indexOf("?") != -1)
       return false;
    if(a_strString.indexOf(">") != -1)
       return false;
    if(a_strString.indexOf("<") != -1)
       return false;
    if(a_strString.indexOf("(") != -1)
       return false;
    if(a_strString.indexOf(")") != -1)
       return false;
    if(a_strString.indexOf("'") != -1)
       return false;

    return true;
}


//---------------------------------------------------------------------------------------------------

// Checks if the passed string is a positive number


function fnIsPositiveNumber(a_strString) {

    if(( fnIsNull(a_strString) ) || ( isNaN(a_strString) ) || ( a_strString.indexOf( " " ) != -1 ) || ( a_strString.indexOf(".") != -1 ))
        return false;
    // Number should be > 0
    else if (a_strString < 1 )
        return false;
    else
        return true;
}

// Checks if the passed string is a No >= 0.

function CheckPositiveNumber(a_strString) {

    if(( fnIsNull(a_strString) ) || ( isNaN(a_strString) ) || ( a_strString.indexOf( " " ) != -1 ) || ( a_strString.indexOf(".") != -1 ) || ( a_strString.indexOf("e") != -1 )|| ( a_strString.indexOf("E") != -1 ))
        return false;
    // Number should be > 0
    else if (a_strString < 0 )
        return false;
    else
        return true;
}


//---------------------------------------------------------------------------------------------------

// Validates if the string is a valid description. Will be used for validation of descriptive fields

function fnIsValidDesc(a_strString)
{
    var a_strString = fnTrim(a_strString );
    if(a_strString.indexOf("%") != -1)
      return false;
    if(a_strString.indexOf("^") != -1)
       return false;
    if(a_strString.indexOf("&") != -1)
       return false;
    if(a_strString.indexOf("+") != -1)
       return false;
    if(a_strString.indexOf("=") != -1)
       return false;
    if(a_strString.indexOf("\\") != -1)
       return false;
    if(a_strString.indexOf("\"") != -1)
       return false;
    if(a_strString.indexOf("?") != -1)
       return false;
    if(a_strString.indexOf(">") != -1)
       return false;
    if(a_strString.indexOf("<") != -1)
       return false;

    return true;
}


//---------------------------------------------------------------------------------------------------

// This function checks whether the string contains any embeded space character
function fnContainsSpace(a_strString)
{
    var a_strString = fnTrim(a_strString );

    // Space character
    if(a_strString.indexOf(" ") != -1)
      return true;


    return false;
}

function fnContainsCharAt(a_strString)
{
    var a_strString = fnTrim(a_strString );
    if(a_strString.indexOf("^") != -1)
       return true;

    return false;
}

//---------------------------------------------------------------------------------------------------
//Validates the Amount

function fnIsValidAmount(sAmount)
{
    if (parseFloat(sAmount) == 0) {
        return false;
    }
    fMaxAmount = 99999999999.99;
    if (fnIsNull(sAmount)) {
        return false;
    }
    if (!fnIsPositiveDecimalNumber(sAmount)) {
        return false;
    }
    //Amount should not contain more than two digits after decimal
    if ((sAmount.indexOf(".") != -1) && ((sAmount.substring(sAmount.indexOf("."))).length-1 > 2)) {
        return false;
    }
    if(sAmount.indexOf("e")!= -1)
    {
    	return false;
    }
    //Amount should not be greater that Max Amount
    if (parseFloat(sAmount) > fMaxAmount) {
        return false;
    }
    return true;
}

//Validates the amount & accepts the amount>=0
function CheckValidAmount(sAmount)
{
    fMaxAmount = 99999999999.99;
    if (fnIsNull(sAmount)) {
        return false;
    }
    //Amount should not contain more than two digits after decimal
    if ((sAmount.indexOf(".") != -1) && ((sAmount.substring(sAmount.indexOf("."))).length-1 > 2)) {
        return false;
    }
    //Amount should not be greater that Max Amount
    if (parseFloat(sAmount) > fMaxAmount) {
        return false;
    }
    return true;
}

function fnRedirect(sPage) {
    document.location.href = sPage;
}

//-----------------------------------
function fnIsPositiveDecimalNumber(strNumber)
{
    var iNumber = 0;

    if(!fnIsNull(strNumber))
    {
        strNumber = fnTrim(strNumber);
        iNumber = Number(strNumber);
        if(iNumber > 0)
            return true;
        else
            return false;
    }
    else
        return false;
}

//-------------------------------------------------

function fnIsPositiveDecimalNumberIncZero(strNumber)
{
    var iNumber = 0;

    if(!fnIsNull(strNumber))
    {
        strNumber = fnTrim(strNumber);
        iNumber = Number(strNumber);
        if(iNumber >= 0)
            return true;
        else
            return false;
    }
    else
        return false;
}

//-------------------------------------------------

function fnCompareDates(a_strDate1, a_strDate2)
{

    var a_strDate = a_strDate1;

    if(a_strDate.indexOf("/") != -1)
        a_strDate = a_strDate.split("/");
    else
    if(a_strDate.indexOf("-") != -1)
        a_strDate = a_strDate.split("-");
    else
    if(a_strDate.indexOf(".") != -1)
        a_strDate = a_strDate.split(".");

    var a_strDay1 = Number(a_strDate[0]);
    var a_strMonth1 = Number(a_strDate[1]);
    var a_strYear1 = Number(a_strDate[2]);


    a_strDate = a_strDate2;
    if(a_strDate.indexOf("/") != -1)
        a_strDate = a_strDate.split("/");
    else
    if(a_strDate.indexOf("-") != -1)
        a_strDate = a_strDate.split("-");
    else
    if(a_strDate.indexOf(".") != -1)
        a_strDate = a_strDate.split(".");

    var a_strDay2 = Number(a_strDate[0]);
    var a_strMonth2 = Number(a_strDate[1]);
    var a_strYear2 = Number(a_strDate[2]);
    if(a_strYear1 < a_strYear2)
        return 1;
    else
    {
        if(a_strYear1 == a_strYear2)
        {
            if(a_strMonth1 < a_strMonth2)
                return 1;
            else
            {
                if(a_strMonth1 == a_strMonth2)
                {
                    if(a_strDay1 < a_strDay2)
                        return 1;
                    else
                    {
                        if(a_strDay1 == a_strDay2)
                            return 0;
                        else
                            return 2;
                    }
                }
                else
                    return 2;
            }
        }
        else
            return 2;
    }
}
//Function to round the given number to the specified no of decimals.
//Included by G Vasudevan on 03-10-2001
function fnRound(number,X)
{
    // rounds number to X decimal places, defaults to 2
    X = (!X ? 2 : X);
    return Math.round(number*Math.pow(10,X))/Math.pow(10,X);
}

/*
    function    :   fnReplaceSingleQuotes
    purpose     :   to search single quote and replace with two single quotes
*/
function fnReplaceSingleQuotes(objName) {
    /*create a search expression for single quote*/
    var regExp = new RegExp("'","gi");

    /*search for any single quote and replace with two single quotes*/
    objName.value = objName.value.replace(regExp, "''");
}
/*
    function    :   fnIsValidPhoneNum
    purpose     :   to check if the phone number is valid
*/

function fnIsValidPhoneNum(a_strString) {
    //trim the text
    a_strString = fnTrim(a_strString);

    //check if it is blank, return true as of now phone num is not mandatory
    //if not blank current validation is, iit should be a whole positive number

    if(fnIsNull(a_strString))
        return true;
    else {
        if(isNaN(a_strString))
            return false;
        else {
            if(a_strString.length < 7)
                return false;
            else
                return true;
        }
    }
}
/*
    Function    : fnToUpper
    Purpose     : Converts the Control's value to Upper Case
*/
function fnToUpper(sControlName){
    objControl = eval("document.forms[0]." + sControlName);
    objControl.value= objControl.value.toUpperCase();
}

//===== validates if the input is a valid percentage

function fnIsValidPercentage(sAmount)
{
    if (parseFloat(sAmount) == 0) {
        return false;
    }
    fMaxAmount = 100;
    if (fnIsNull(sAmount)) {
        return false;
    }
    if (!fnIsPositiveDecimalNumber(sAmount)) {
        return false;
    }
    //Amount should not contain more than two digits after decimal
    if ((sAmount.substring(sAmount.indexOf("."))).length-1 > 2) {
        return false;
    }
    //Amount should not be greater that Max Amount
    if (parseFloat(sAmount) > fMaxAmount) {
        return false;
    }
    return true;
}

//==================================



/********************************************************************
Function name   :   fnCheckValidName
Purpose         :   Checks if the parameter passed contains only
                    text
Parameter       :   frmText - datatype : String
Return Value    :   True if the parameter passed  contains only
                    text & blank space
                    False otherwise
********************************************************************/

function fnCheckValidName(frmText){
    var bCheckText = true;
    var frmTrimText = fnTrim(frmText);
    for(var nCount = 0;nCount < frmTrimText.length;nCount ++ ){
        var nReturnCode = frmTrimText.charCodeAt(nCount);
        //if(!(((nReturnCode >= 65)&&(nReturnCode <= 90)) ||((nReturnCode >= 97)&&(nReturnCode <= 122))))
        if(!(((nReturnCode >= 65)&&(nReturnCode <= 90))||(nReturnCode == 32)||(nReturnCode == 46)||((nReturnCode >= 97)&&(nReturnCode <= 122))||((nReturnCode>=48)&&(nReturnCode<=57)) || ((nReturnCode>=33) && (nReturnCode<=47))
		|| ((nReturncode>=58) && (nReturnCode<=64)) || ((nReturnCode>=123) && (nReturnCode<=126))
		|| ((nReturnCode>=161) && (nReturnCode<=174))
		))
		{
             bCheckText = false;
             return bCheckText;
        }

    }
    return bCheckText;
}

/********************************************************************
Function name   :   fnSetSCSSId
Purpose         :   Generates the Id in <Sol_Id><ID-PREFIX><srlNum> format
            		And sets to the given control text
Parameter       :   objControl, sSolId, sIdPrefix
Author     		:   Natarajan K
********************************************************************/
function fnSetSCSSId(objControl,sSolId,sIdPrefix)
{
	
    var sOldId, sNewId, iOldIdLen;
    objControl = eval('document.'+objControl);
    sOldId = objControl.value;
    sOldId = fnTrim(new String(sOldId));
    iOldIdLen = sOldId.length;
	if(iOldIdLen > 0)
	{
	 sNewId = sIdPrefix+sSolId+sOldId;
	}
	// alert(sNewId);

   /*sNewId=sOldId;
    if((iOldIdLen <= iLenOfSrlNum) && (iOldIdLen > 0)){
        sNewId = sSolId+sIdPrefix;
        for(i=0; i < (iLenOfSrlNum - iOldIdLen); i++)
            sNewId+='0';
        sNewId+=sOldId;
    }*/
    objControl.value = sNewId.toUpperCase();
}


function fnSetSCSSIdIng(objControl,sIdPrefix)
{
	
    var sOldId, sNewId, iOldIdLen;
    objControl = eval('document.'+objControl);
    sOldId = objControl.value;
    sOldId = fnTrim(new String(sOldId));
    iOldIdLen = sOldId.length;
	var ff=document.forms[0].txtAcctSolId.value
	
	if(iOldIdLen > 0 && ff > 0)
	{
	 sNewId = sIdPrefix+ff+sOldId;
	}
	// alert(sNewId);

   /*sNewId=sOldId;
    if((iOldIdLen <= iLenOfSrlNum) && (iOldIdLen > 0)){
        sNewId = sSolId+sIdPrefix;
        for(i=0; i < (iLenOfSrlNum - iOldIdLen); i++)
            sNewId+='0';
        sNewId+=sOldId;
    }*/
    objControl.value = sNewId.toUpperCase();
}

/********************************************************************
Function name   :   fnSetSCSSAccNum
Purpose         :   Generates the Accont number in <Sol_Id><ID-PREFIX><srlNum> formatAnd sets to the given control text
Parameter       :   objControl, sSolId, sIdPrefix, iLenOfSrlNum
Author      :   Natarajan K
********************************************************************/

function fnSetSCSSAccNum(objControl,sSolId,sIdPrefix, iLenOfSrlNum)
 {
    var sOldId, sNewId, iOldIdLen;

    objControl = eval('document.'+objControl);
    sOldId = objControl.value;
    sOldId = fnTrim(new String(sOldId));
    iOldIdLen = sOldId.length;
	
    sNewId=sOldId;
	
	
	
    if((iOldIdLen <= iLenOfSrlNum) && (iOldIdLen > 0)){
        sNewId = sSolId+sIdPrefix;
        for(i=0; i < (iLenOfSrlNum - iOldIdLen); i++)
            sNewId+='0';
        sNewId+=sOldId;
		
    }
    objControl.value = sNewId.toUpperCase();
}


function fnSetSCSSAccNumInq(objControl,sIdPrefix, iLenOfSrlNum)
 {
    var sOldId, sNewId, iOldIdLen;

    objControl = eval('document.'+objControl);
    sOldId = objControl.value;
    sOldId = fnTrim(new String(sOldId));
    iOldIdLen = sOldId.length;
	
    sNewId=sOldId;
	
	var ff=document.forms[0].txtAcctSolId.value
	
    if((iOldIdLen <= iLenOfSrlNum) && (iOldIdLen > 0) && (ff>0)){
        sNewId = ff+sIdPrefix;
        for(i=0; i < (iLenOfSrlNum - iOldIdLen); i++)
            sNewId+='0';
        sNewId+=sOldId;
		
    }
    objControl.value = sNewId.toUpperCase();
}




/********************************************************************
Function name   :   fnSetId
Purpose         :   Generates the Id in <Sol_Id><ID-PREFIX><srlNum> format
            And sets to the given control
                    text
Parameter       :   objControl, sSolId, sIdPrefix, iLenOfSrlNum
Author      :   Pandeya, Ishwarraj
********************************************************************/

function fnSetId(objControl,sSolId,sIdPrefix, iLenOfSrlNum)
 {
    var sOldId, sNewId, iOldIdLen;

    objControl = eval('document.'+objControl);
    sOldId = objControl.value;
    sOldId = fnTrim(new String(sOldId));
    iOldIdLen = sOldId.length;

    sNewId=sOldId;
    if((iOldIdLen <= iLenOfSrlNum) && (iOldIdLen > 0)){
        sNewId = sSolId+sIdPrefix;
        for(i=0; i < (iLenOfSrlNum - iOldIdLen); i++)
            sNewId+='0';
        sNewId+=sOldId;
    }
    objControl.value = sNewId.toUpperCase();
}

/********************************************************************
Function name   :   fnSetId
Purpose         :   Generates the Id in <ID-PREFIX><srlNum> format
            	    and sets to the given control text
Parameter       :   objControl, sIdPrefix, iLenOfSrlNum
Author      	:   Lavanya
********************************************************************/
function fnSetId(objControl,sIdPrefix, iLenOfSrlNum){
    var sOldId, sNewId, iOldIdLen;

    objControl = eval('document.'+objControl);
    sOldId = objControl.value;
    sOldId = fnTrim(new String(sOldId));
    iOldIdLen = sOldId.length;

    sNewId=sOldId;
    if((iOldIdLen <= iLenOfSrlNum) && (iOldIdLen > 0)){
        sNewId = sIdPrefix;
        for(i=0; i < (iLenOfSrlNum - iOldIdLen); i++)
            sNewId+='0';
        sNewId+=sOldId;
    }
    objControl.value = sNewId.toUpperCase();
}



/********************************************************************
Function name       :   fnSetTranId
Purpose             :   Generates the Tran Id in <ID-PREFIX><srlNum> format
                        And sets to the given control text
Parameter           :   objControl,sIdPrefix
Author              :   Dheepan T
Modification History
Modified by         :   Myil vahanan D

Modified by         :   Anand V
Date                :   22 July 2002
Purpose             :   Changed the condition for a validating the given Tran ID

********************************************************************/
function fnSetTranId(objControl,sIdPrefix){
    var sOldId, sNewId;
    var bCheckText = false;

    objControl = eval('document.'+objControl);

    sOldId = objControl.value.toUpperCase();
    sOldId = fnTrim(new String(sOldId));

    if(sOldId.length!=0) {
        if (isNaN(sOldId)){

            /* The following code was commented by Anand V on 22 July 2002 */

            /*
            if(!(((sOldId.length > sIdPrefix.length) && (sOldId.substr(0,3) == sIdPrefix))  &&  !isNaN(sOldId.substr(3,sOldId.length)))){
                alert("Not a Valid Transaction Id");
                objControl.focus();
            }
            */

            /* End of code commented by Anand V

            /* Following code by Anand V */

            objControl.value = sOldId.toUpperCase();

            if ( sOldId.length > sIdPrefix.length ) {

                if ( (sOldId.substr(0,sIdPrefix.length) != sIdPrefix) || (isNaN(sOldId.substr(sIdPrefix.length,sOldId.length))) ) {
                    objControl.value = "";
                    alert("Not a Valid Transaction Id");
                    objControl.focus();
                    return;
                } else {
                    objControl.value = sOldId.toUpperCase();
                    objControl.focus();
                    return;
                }
            } else if ( sOldId.length <= sIdPrefix.length ) {

                if ( sOldId != sIdPrefix ) {
                    objControl.value = "";
                    alert("Not a Valid Transaction Id");
                    objControl.focus();
                    return;
                }
                objControl.value = sIdPrefix.toUpperCase();
                objControl.focus();
                return;

            } else {
                objControl.value = "";
                alert("Not a Valid Transaction Id");
                objControl.focus();
                return;
            }

            /* End of code added by Anand V */

        }
        //sNewId=sOldId;
        sNewId = sIdPrefix;
        sNewId+=sOldId;
        objControl.value = sNewId.toUpperCase();
    }
}

// BFX:SDM:20-SEP-2002:BEGIN
// Store the values present in a Selection List into an array
// Argument(1) : aSelectionList - A Selection List object
// Argument(2) : aTextArray     - An array to store the Text elements of Selection List object
// Argument(3) : aValueArray    - An array to store the Value elements of Selection List object
function fnStoreOptionsIntoArray( aSelectionList, aTextArray, aValueArray ) {
    var iNoOfItems = aSelectionList.length;
    var iLoopVar   = 0;

    if( iNoOfItems > 0 ) {
        for( iLoopVar = 0; iLoopVar < iNoOfItems; iLoopVar++ ) {
            aTextArray[ iLoopVar ]  = aSelectionList.options[ iLoopVar ].text;
            aValueArray[ iLoopVar ] = aSelectionList.options[ iLoopVar ].value;
        }
    }
}

// Fill the Options of a Selection List
// Argument(1) : aSelectionList - A Selection List object
// Argument(2) : aTextArray     - An array containing the Text elements of Selection List object
// Argument(3) : aValueArray    - An array containing the Value elements of Selection List object
function fnFillOptions( aSelectionList, aTextArray, aValueArray ) {
    var iNoOfTextItems  = aTextArray.length;
    var iNoOfValueItems = aValueArray.length;
    var bFlag           = false;
    var iLoopVar        = 0;
    var option;

    if( ( iNoOfTextItems > 0 ) && ( iNoOfValueItems > 0 ) && ( iNoOfTextItems == iNoOfValueItems) ) {
        for( iLoopVar = 0; iLoopVar < iNoOfTextItems; iLoopVar++ ) {
            aSelectionList.options[ iLoopVar ] = new Option( aTextArray[ iLoopVar ], aValueArray[ iLoopVar ] );
        }
    }
}

// Clear the Options in a Selection List
// Argument(1) : aSelectionList - A Selection List object
function fnEmptyOptions( aSelectionList ) {
    var iNoOfItems = aSelectionList.length;
    var iLoopVar   = 0;

    if( iNoOfItems > 0 ) {
        // Nullify the selection from the last option
        for( iLoopVar = iNoOfItems - 1; iLoopVar >= 0; iLoopVar-- ) {
            aSelectionList.options[ iLoopVar ] = null;
        }
    }
}
// BFX:SDM:20-SEP-2002:END


//----------------------------------------------------------------------------------------------

/********************************************************************
Function name   	:   fnDisplayError
Purpose         	:   displays java script error
Parameter       	:   objControl, strMessage
Author      		:   MAdhan S D
********************************************************************/

function fnDisplayError(objControl, strMessage)
{
	alert(strMessage);
	objControl.focus();
	return false;
}

function  fnContainsCharacter (str,alpha)
{
	str=fnTrim(str);
	var i;
	//checking for Alphabets characters
	if(str.length==0 || str==null) {
	    return false;
	}
	// Search through string's characters one by one.
	// If character is aplhabets
	for (i = 0; i < str.length; i++) {
	    // Check that current character isn't whitespace.
	    var c = str.charAt (i);
	    if (alpha.indexOf (c) != -1) return true;
	}
	return false;
}

/************************************************************************************
   Function name   	:   		fnMandatoryCheck
   Purpose         	:   		Displays alert message if any mandatory field
				    	is empty
   Parameter       	:   		objControlId, objControlName
   Returns		:		boolean
   Author      		:   		Mukundhan S
   Date			:   		22-02-2003
************************************************************************************/
function fnMandatoryCheck(objControlId, objControlName)
{
    for(var iCount = 0; iCount<objControlId.length; iCount ++ )
    {
	var objControl = eval(objControlId[iCount]);
	if(objControl.value == "")
	{
	   alert(objControlName[iCount]+" cannot be empty ");
	   objControl.focus();
	   return false;
	   break;
    	}
    }
    return true;
}

/************************************************************************************
   Function name   	:   		checkValidDDMM
   Purpose         	:   		Checks if the given DD is valid for the MM given
   Parameter       	:   		sParamDay, sparamMonth
   Returns			:			boolean
   Author      		:   		Dheepan T
   Date				:   		08-Mar-2003
************************************************************************************/

function checkValidDDMM(sParamDay,sParamMonth){
	var sDate = new Date();
	var sYear = sDate.getFullYear();
	var sDay = parseInt(sParamDay,10);
	var sMonth = parseInt(sParamMonth,10);

	if ( (sMonth > 12) || (sDay > 31) )
		return false;

	if((sMonth == 4) || (sMonth == 6)  || (sMonth == 9) || (sMonth == 11)){
		if(sDay > 30)
			return false;
	}
	if (((sYear % 4 == 0 ) && ( sYear % 100 != 0 )) || ( sYear % 400 == 0 )){
		if ((sMonth == 2 ) && (sDay > 29 )) {
			return false;
		}
	}
	else {
		if (( sMonth == 2 ) && (sDay > 28 )) {
			return false;
		}
	}

	return true;
}

function fnIsValidAmountWithParam(sAmount,iMaxLength)
{
    var sRupees = new String();
    var sMaxRupees = new String();

    if(sAmount.indexOf(".") != -1)
    	sRupees = sAmount.substring(lastIndexOf(sAmount),4);
    else
    	sRupees = sAmount;

    for(i=1;i<=iMaxLength-4; i++){
    	sMaxRupees += "9";
    }
    sMaxRupees = sMaxRupees+".99";

    if (parseFloat(sAmount) == 0) {
        return false;
    }
    fMaxAmount = parseFloat(sMaxRupees);

    if (fnIsNull(sAmount)) {
        return false;
    }
    if (!fnIsPositiveDecimalNumber(sAmount)) {
        return false;
    }
    //Amount should not contain more than two digits after decimal
    if ((sAmount.indexOf(".") != -1) && ((sAmount.substring(sAmount.indexOf("."))).length-1 > 2)) {
        return false;
    }
    //Amount should not be greater that Max Amount
    if (parseFloat(sAmount) > fMaxAmount) {
        return false;
    }
    return true;
}


//prakash TL

function fnIsPositiveNumberPAN(a_strString) {

    if(( fnIsNull(a_strString) ) || ( isNaN(a_strString) ) || ( a_strString.indexOf( " " ) != -1 ) || ( a_strString.indexOf(".") != -1 ))
   	  return false;
    else
        return true;
}







function fnPanCheck(sPanNum)
{
	sCheckNum = new String(sPanNum);
	   for(count=0;count<10;count++)
	   {
		if(count == "0"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
		if(count == "1"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
		if(count == "2"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
		if(count == "3"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
		if(count == "4"){
			if(!fnIsValidName(sCheckNum.charAt(count))){
				if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count))){ // Code added by Raja SP for PAN Validation Change - 04/10/2006
			return false; } } }
		if(count == "5"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "6"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "7"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "8"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "9"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
	  }
	  return true;
}

function fnTanCheck(sTanNum)
{
	sCheckNum = new String(sTanNum);
	   for(count=0;count<10;count++)
	   {
		if(count == "0"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
		if(count == "1"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
		if(count == "2"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
		if(count == "3"){
			if(!fnIsValidName(sCheckNum.charAt(count))){
				if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count))){ // Code added by Raja SP for TAN Validation Change - 04/10/2006
			return false; } } }
		if(count == "4"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "5"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "6"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "7"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "8"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "9"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
	  }
	  return true;
}

function fnTanChkWithForthLetrAlphaNum(sTanNum)
{
	sCheckNum = new String(sTanNum);
	   for(count=0;count<10;count++)
	   {
		if(count == "0"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
		if(count == "1"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
		if(count == "2"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
		if(count == "3"){
			if(!fnIsValidName(sCheckNum.charAt(count))) {
			  if (  !fnIsPositiveNumberPAN(sCheckNum.charAt(count)) )
			return false;} }
		if(count == "4"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "5"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "6"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "7"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "8"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "9"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
	  }
	  return true;
}

function fnAssesseeCheck(sAssessee)
{
	sCheckNum = new String(sAssessee);
	   for(count=0;count<15;count++)
	   {
		if(count == "0"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
		if(count == "1"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
		if(count == "2"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
		if(count == "3"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
		if(count == "4"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
		if(count == "5"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "6"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "7"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "8"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "9"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
		if(count == "10"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
		if(count == "11"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}

		/* Code Modified By M.S.Senthil Varma on 07062008 starts here */

		if(count == "12"){
				  if(fnContainsSpecialChars(sCheckNum.charAt(count)))
				   return false;}
				   if(count == "13"){
				   if(fnContainsSpecialChars(sCheckNum.charAt(count)))
				   return false;}
				   if(count == "14"){
				   if(fnContainsSpecialChars(sCheckNum.charAt(count)))
			return false;}

		/* Code Modified By M.S.Senthil Varma on 07062008 ends here */

		/*if(count == "12"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "13"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "14"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}*/

	  }
	  return true;
}




function fnAssesseeTanCheck(sAssessee)
{
	sCheckNum = new String(sAssessee);
	   for(count=0;count<15;count++)
	   {
		if(count == "0"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
		if(count == "1"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
		if(count == "2"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
		if(count == "3"){
			if(fnContainsSpecialChars(sCheckNum.charAt(count)))
			return false;}
		/*if(count == "4"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
		*/
		if(count == "4"){
			if(!fnIsPositiveNumber(sCheckNum.charAt(count)))
			return false;}

		if(count == "5"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}

		if(count == "6"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "7"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "8"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "9"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
		if(count == "10"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}
		if(count == "11"){
			if(!fnIsValidName(sCheckNum.charAt(count)))
			return false;}

		if(count == "12"){
				if(fnContainsSpecialChars(sCheckNum.charAt(count)))
					return false;}
				if(count == "13"){
					if(fnContainsSpecialChars(sCheckNum.charAt(count)))
					return false;}
				if(count == "14"){
					if(fnContainsSpecialChars(sCheckNum.charAt(count)))
			return false;}

		/*
		if(count == "12"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "13"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}
		if(count == "14"){
			if(!fnIsPositiveNumberPAN(sCheckNum.charAt(count)))
			return false;}*/

	  }
	  return true;
}

/*
 * Function Name : funCheckDateWithinMonth
 * Parameters 	 : Object of the Entered Date, Sol Date, No of months for comparison
 * Return Type   : False if any test case fail
 * Author		 : Arun Neelan
 * Date			 : 09-09-2004
 * Purpose		 : The date value entered in enteredDateObject
 					should not be greater than the SolDate and
 					should be within NoOf months passed as paramter
 */
function funCheckDateWithinMonth(enteredDateObjectTitle,
	enteredDateObject, solDate, noOfMonths){
	//Check if there exists data for enteredDateObject
	//Check if the data entered for enteredDateObject is valid
	if(fnIsNull(enteredDateObject.value)
		|| !fnIsValidDate(enteredDateObject.value)){
	//Pop up the message for the user
	alert("Enter Valid Instrument Date");
	//Set the focus to Instrument Date
	enteredDateObject.focus();
	return false;
   } //End of 	if(fnIsNull(enteredDateObject.value).. block

   //Create an Date object for enteredDateObject
   var instDate = new Date(enteredDateObject.value);
   //Get the Date for enteredDateObject
   var instMonth = instDate.getDate();
   //Get the Month for enteredDateObject
   var instDay = instDate.getMonth() + 1;
   //Get the Year for enteredDateObject
   var instYear = instDate.getYear();
   /*
   * The month and day are appeneded purposefully to frame the format
   * for enteredDateObject
   */
   var instAppenededDate = instMonth + '/' + instDay + '/' + instYear;
   //Create a date object for enteredDateObject
   var instFormattedDate = new Date(instAppenededDate);

   /*
    * Compare InstrumentDate and Sol Date to see if the enteredDateObject
    * is not greater than Sol Date
    */
   if (!fnCompareDate(instAppenededDate ,solDate)){
   		//Display the error message to the user
   		alert("Instrument Date Cannot Be Greater Than Sol Date");
   		//Set the focus to Instrument Date
		enteredDateObject.focus();
		return;
   }else{
   		//Create a date object for Sol Date
		var solDate = new Date(solDate);
		//Get the Date for the SolDate
		var solDay = solDate.getDate();
		//Get the Month for SolDate
		var solMonth = solDate.getMonth() +1;
		//Get the Year for Sol Date
		var solYear = solDate.getYear();

		var monthAge ;
		var yearDiff;
		//Get the difference between SolYear and Instrument Year
        yearDiff = solYear - instYear;
		//Check if the SolMonth is greater than Instrument Date
		if (solMonth >= instMonth) {
	        monthAge = solMonth - instMonth;
	        /*
	         * If the SolMonth is greater than Instrument Date
	         * Make sure that there exists no difference in Year
	         */
	        if(yearDiff != 0){ //If there exists difference in Year
	        	//Pop up the error message to the user
	        	alert('Difference between ' + enteredDateObjectTitle + ' and Sol Date - More than 6 months');
	        	//Set the focus to Instrument Date
	        	enteredDateObject.focus();
	        	return false;
	        } else {
	        	//Do Nothing
	        }
	    } else { //If the Instrument Month is greater than soldate (Incase of previous year)
	    	//Get the difference in SolMonth and Instrument Month
	        monthAge = 12 + solMonth - instMonth;
			//Check if the Year difference is one
	        if(yearDiff != 1) {
	        	//Pop up the error message to the user
	        	alert('Difference between ' + enteredDateObjectTitle + ' and Sol Date - More than 6 months');
	        	//Set the focus to Instrument Date
	        	enteredDateObject.focus();
	        	return false;
	        }else{
	        	//Do Nothing
	        }
	    } //End of if (solMonth >= instMonth) {.. block
		/*
		 * Check if the Month difference beteween Instrument Date and
		 * Sol Date is 6 Months
		 */
		if(monthAge > noOfMonths){
			//Pop up the error message to the user
			alert('Difference between ' + enteredDateObjectTitle + '  and Sol Date - More than 6 months');
			//Set the focus to Insturment Date
        	enteredDateObject.focus();
			return false;
		}else if(monthAge == noOfMonths){ //Incase if the difference is 6, compare the dates
			//Get the Difference in Sol Day and Instrument Day
			var dayDifference = solDay - instDay;
			//Make sure if the day difference is zero
			if(dayDifference != 0){ //If not zero
				//Pop up the error message to the user
				alert('Difference between ' + enteredDateObjectTitle + ' and Sol Date - More than 6 months');
				//Set the focus to Instrument Date
	        	enteredDateObject.focus();
				return false;
			}else{
				//Do Nothing
			}
		} //End of if(monthAge > 6){ ..block
	}// End of if (!fnCompareDate(instAppenededDate ,solDate)){ .. block
	return true;
}

function checkDate(a_strDate1,a_strDate2){
    //Txt_date
    var a_strChqMonth1;
    var a_strChqDay1;
    var a_strChqYear1;
	//Sol_date
    var a_strSolMonth2;
    var a_strSolDay2;
    var a_strSolYear2;

    var daydiff;
    var mondiff;
    var yrDiff;

    var arrDate1;
    var arrDate2;

    if(a_strDate1.indexOf("/") != -1)
	arrDate1 = a_strDate1.split("/");
    else if(a_strDate1.indexOf("-") != -1)
	arrDate1 = a_strDate1.split("-");
    else if(a_strDate1.indexOf(".") != -1)
	arrDate1 = a_strDate1.split(".");


    if(a_strDate2.indexOf("/") != -1)
	arrDate2 = a_strDate2.split("/");
    else if(a_strDate2.indexOf("-") != -1)
	arrDate2 = a_strDate2.split("-");
    else  if(a_strDate2.indexOf(".") != -1)
	arrDate2 = a_strDate2.split(".");

    a_strChqDay1 = arrDate1[0];
    a_strChqMonth1 = arrDate1[1];
    a_strChqYear1 = arrDate1[2];
    a_strSolDay2 = arrDate2[0];
    a_strSolMonth2 = arrDate2[1];
    a_strSolYear2 = arrDate2[2];

    yrDiff=parseInt(a_strSolYear2,10)-parseInt(a_strChqYear1,10);

    if(yrDiff > 1)
		return false;
    else if(yrDiff == 0){
      if ((parseInt(a_strChqMonth1, 10) < parseInt(a_strSolMonth2, 10))) {
	mondiff=parseInt(a_strSolMonth2,10)-parseInt(a_strChqMonth1,10);
	if (mondiff >6){
		return false;
	}/*else {
		daydiff=parseInt(a_strSolDay2,10)-parseInt(a_strChqDay1,10);
		if(daydiff > 0)
			return false;
       }*/
     }
   }else if (yrDiff == 1){
	if(parseInt(a_strSolMonth2,10)>parseInt(a_strChqMonth1,10)){
	  if ((parseInt(a_strSolMonth2,10)>=6 ) && (parseInt(a_strChqMonth1,10)<=6)){
	     mondiff=parseInt(a_strSolMonth2,10)-parseInt(a_strChqMonth1,10);
	     if(mondiff < 6)
		return false;
	     else if(mondiff==6){
	      // if(a_strChqDay1<a_strSolDay2){
		    daydiff=a_strSolDay2-a_strChqDay1;
		    if(daydiff>=0)
		      return false;
		//}
	     }
          }else
		return false;
       }else if(parseInt(a_strChqMonth1,10)>parseInt(a_strSolMonth2,10)){
	  if ((parseInt(a_strChqMonth1,10)>6 ) && (parseInt(a_strSolMonth2,10)<6)){
	     mondiff=parseInt(a_strChqMonth1,10)-parseInt(a_strSolMonth2,10);
	     if(mondiff < 6)
		return false;
             else if(mondiff==6){
              // if(a_strChqDay1<a_strSolDay2){
	            daydiff=a_strSolDay2-a_strChqDay1;
	            if(daydiff>=0)
	              return false;
	      //  }
             }
          }else
		return false;
       }else if(parseInt(a_strChqMonth1,10)==parseInt(a_strSolMonth2,10)){
		return false;
       }

    }
	return true;
}

//Added by R.Rajesh kumar
function fnIsValidAmountForTocShare(sAmount)
{
    if (parseFloat(sAmount) == 0) {
        return true;
    }


    fMaxAmount = 99999999999.99;
    if (fnIsNull(sAmount)) {
        return false;
    }
    if (!fnIsPositiveDecimalNumber(sAmount)) {
        return false;
    }
    //Amount should not contain more than two digits after decimal
    if ((sAmount.indexOf(".") != -1) && ((sAmount.substring(sAmount.indexOf("."))).length-1 > 2)) {
        return false;
    }
    if(sAmount.indexOf("e")!= -1)
    {
    	return false;
    }
    //Amount should not be greater that Max Amount
    if (parseFloat(sAmount) > fMaxAmount) {
        return false;
    }
    return true;
}


function findTable(currDate){
	sGBMTranDate=document.forms[0].txtGBMTranDate.value;
	var cInfo = currDate.split("/");
	currDate = cInfo[1]+"/"+cInfo[0]+"/"+cInfo[2];
	var gTrDate = sGBMTranDate.split("/");
	sGBMTranDate = gTrDate[1]+"/"+gTrDate[0]+"/"+gTrDate[2];
	var  cDate = new Date(currDate);
	var  tDate = new Date(sGBMTranDate);
	diff  = new Date();
	diff.setTime(Math.abs(cDate.getTime() - tDate.getTime()));
	timediff = diff.getTime();
	days = Math.floor(timediff / (1000 * 60 * 60 * 24));
	timediff -= days * (1000 * 60 * 60 * 24);
	return days;
}
//function added by P.Sankari on 29/10/2008
function leftPad(litrl,orgstring,maxlength)
{
var stringpad = orgstring;
var len=maxlength-orgstring.length;
for(cnt=1;cnt<=len;cnt++)
    {
 stringpad =litrl + stringpad;
}
return stringpad;
}

function fnAddress(a_strString)
{
    a_strString = fnTrim(a_strString);
//    if(a_strString.indexOf("_") != -1)
//       return true;
    //if(a_strString.indexOf("\\") != -1)
      // return true;
    //if(a_strString.indexOf("\"") != -1)
      // return true;
    if(a_strString.indexOf("'") != -1)
       return true;
    if(a_strString.indexOf("\"") != -1)
       return true;


return false;

}
