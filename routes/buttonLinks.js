module.exports = function buttonLinks(req, res) {
 res.send(`
   <!DOCTYPE html>
   <html>
     <head>
         <meta charset="utf-8">
         <title>Duplicate button/link text</title>
         <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
     </head>
     <body>
       <h2 automation="halp">Multi Buttons</h1>
       <form id="btn-form">
         <button id="button-1" type="button" onClick="$('#btn-text-1').show();">Do it!</button>
         <button id="button-2" type="button" onClick="$('#btn-text-2').show();">Do it!</button>
         <button id="button-3" type="button" onClick="$('#btn-text-3').show();">Do it!</button>
       </form>
       <div id="btn-container">
         <span id="btn-text-1">Button 1 clicked...</span><br />
         <span id="btn-text-2">Button 2 clicked...</span><br />
         <span id="btn-text-3">Button 3 clicked...</span><br />
       </div>

       <h2 automation="halp">Multi Links</h1>
         <form id="link-form">
           <a href="#" id="link-1" onClick="$('#link-text-1').show();">Do it!</a>
           <a href="#" id="link-2" onClick="$('#link-text-2').show();">Do it!</a>
           <a href="#" id="link-3" onClick="$('#link-text-3').show();">Do it!</a>
         </form>
       <div id="link-container">
         <span id="link-text-1">Link 1 clicked...</span><br />
         <span id="link-text-2">Link 2 clicked...</span><br />
         <span id="link-text-3">Link 3 clicked...</span><br />
       </div>

       <script>
           var spans = ["btn-text-1", "btn-text-2", "btn-text-3", "link-text-1", "link-text-2", "link-text-3"];
           $.each(spans, function( i, val ) {
             var id = '#' + val
             console.log("Hiding " + id);
             $(id).hide();
           });
       </script>
     </body>
   </html>
 `);
}
