module.exports = function fields (req, res) {
    res.send(`
      <!DOCTYPE html>
      <html>
      <body>
        <h1 automation="halp">i am jack's form</h1>
        <form>
          <input id="input_1" type="text" value="foo">input_1</input> <br />
          <input id="input_2" type="text" value="bar">input_2</input> <br />
          <input id="input_3" type="text" value="baz">input_3</input> <br />
          <input id="input_4" type="text" value="qux">input_4</input> <br />
          <input id="input_5" type="text" value="quux">input_5</input> <br />
          <input id="input_6" type="text" value="quuz">input_6</input> <br />
          <input id="input_7" type="text" value="wibble">input_7</input> <br />
          <input id="input_8" type="text" value="wobble">input_8</input> <br />
          <input id="input_9" type="text" value="flob">input_9</input> <br />
          <input id="input_10" type="text">input_10</input> <br />
          <input id="input_11" type="text">input_11</input> <br />
          <input id="input_submit" type="submit">input_submit</input> <br />
          <input id="input_disabled" type="text" disabled>input_disabled</input> <br />
        </form>
      </body>
      </html>
    `);
}
