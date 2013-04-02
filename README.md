# Bootstrap the Formstack
A little bit of JavaScript to help embedded Formstack forms fit nicely into Twitter Bootstrap

Created during a Knewton Hack Day. Credit for the code in the first commits (and probably beyond) goes to [Jon Tascher](https://github.com/jontas "Jon Tascher").

## Why?
Formstack is a great little piece of SaaS. But it has a deep, burning hatred for existing CSS. When embedded via JS, the resulting form and CSS will tear through your pretty page.

The answer thus far has been to add lots of CSS overrides to undo the damage and match the existing look & feel. This results in two (or more) stylesheets to maintain: the main CSS and the Formstack overrides CSS that returns things to our main CSS.

### Bootstrap
[Twitter Bootstrap](http://twitter.github.com/bootstrap/ "Twitter Bootstrap") is a great framework for developing websites and web applications. It includes some nice looking form elements.

*Bootstrap the Formstack* parses the output from the embedded Formstack form and *renames the field elements and classes* to what Bootstrap is expecting. This replaces the need for any CSS overrides.

## How to use it
Embed `bootstrap-the-formstack.js` at the end of your web page, below any Formstack embed code, but before the closing `</body>` tag.

### What it does
It will make a basic form look great. It will also handle some common form elements like "Name" (first and last in separate, inline fields) and a US Address including City/State/Zip inline fields.

It starts by stripping out *all* the Formstack styles and then parses through known elements.

#### TODO
* Strip out more Formstack classes
* Handle multiple columns
* Account for more field groups that need to be displayed inline
* Replace or take a scalpel to the datepicker
* Allow users to set the `span` class for an element by setting `cols=` and `size=` where possible in the Formstack builder
* Add the jasny [Bootstrap File Uploader JS](http://jasny.github.com/bootstrap/javascript.html#fileupload) to override the browser's default