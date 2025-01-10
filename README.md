
<!--#echo json="package.json" key="name" underline="=" -->
bool2str
========
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
(cond ? yes : no) but throw if arg types are not (bool, string, string).
<!--/#echo -->


Why?
----

* To help with situations like YAML bool/string accidents: When you evaluate
  an unquoted YAML `no` as a naive `if ()` condition in JavaScript or PHP,
  it becomes equivalent to `yes`, since both are non-empty strings.



API
---

This module exports one function that holds some others:

### bool2str(cond, yes, no, trace)

If `cond` is a boolean, and `yes` and `no` both are strings,
return `(cond ? yes : no)`.
If any of the arguments have the wrong type, instead throw an error complaining
about them.
The `trace` (ideally a string with a hint) will be appended to the error
message in order to help you find where the problem originated.


### bool2str.curry(yes, no, trace) (alias: .c)

Verify that the `yes` and `no` arguments are strings. Throw an error otherwise.
If they are, prepare (and return) a function that takes one argument `cond` in
order to then call `bool2str` with the other, pre-defined arguments.



Usage
-----

see [test/usage.mjs](test/usage.mjs).


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key="license" -->
ISC
<!--/#echo -->
