/*---------------------------------page loader---------------------------------*/

var myVar;
/*aantal seconden voor hoelang dit */
        function myFunction() {
            myVar = setTimeout(showPage, 2500);
        }
/*hoe het zal weergegeven worden op de pagina*/
        function showPage() {
            document.getElementById("loader").style.display = "none";
            document.getElementById("myDiv").style.display = "block";
        }