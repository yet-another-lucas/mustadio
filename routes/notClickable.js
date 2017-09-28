//look at this to make the button and covering div always the same size, because of browser specific issues
//http://stackoverflow.com/questions/1205159/html-css-making-two-floating-divs-the-same-height
//http://stackoverflow.com/questions/2997767/how-do-i-keep-two-divs-that-are-side-by-side-the-same-height
//http://stackoverflow.com/questions/16317497/make-floating-divs-the-same-height
module.exports = function notClickable(req, res) {
    res.send(`
      <!DOCTYPE html>
      <html>
      <body>
        <h1 automation="halp">I am jack's obscured element</h1>
        <form id="form">
          <button id="button_1" type="submit">button_1</button>
          <div id="blocker_1" style="position: absolute; display: inline; left: 0; padding-left: 100px;">I should block the button</div>
          <br />
          <button id="button_2" type="submit">button_2</button>
          <div id="blocker_2" style="position: absolute; display: inline; left: 0; padding-left: 100px;" onClick="document.getElementById(&quot;form&quot;).removeChild(document.getElementById(&quot;blocker_2&quot;));">I should unblock the button after one click</div>
          <br />
          <button id="button_3" type="submit" disabled>no click for you</button>
        </form>
      </body>
      </html>
    `);
};
