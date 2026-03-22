By default, scripts are executed when the code is encountered by the browser as it loads the page content. You can choose other events to initiate the execution of a script. An [[event]] is a specific circumstance (such as an action performed by a user or an action performed by the browser) that is monitored by JavaScript and that your script can respond to in some way. JavaScript events allow users to interact with your web pages. The most common events are actions that users perform. For example, when a user clicks a form button, a click event is generated. You can think of an event as a trigger that runs specific JavaScript code in response to a given situation. User-generated events, however, are not the only kinds of events monitored by JavaScript. Events that are not direct results of user actions, such as the load event, are also monitored. The load event, which is triggered automatically by a web browser, occurs when a document finishes loading in a web browser. Figure 1-14 lists some JavaScript events and explains what triggers them.

## Common Events

| EVENT      | KEYBOARD TRIGGER                                         | MOUSE TRIGGER                                  | TOUCHSCREEN TRIGGER                                                |
| ---------- | -------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------ |
| blur       | An element, such as a radio button, becomes inactive     |                                                |                                                                    |
| change     | The value of an element, such as a text box, changes     |                                                |                                                                    |
| click      | A user presses a key when an element is selected         | A user clicks an element once                  | A user touches an element and then stops touching it               |
| error      | An error occurs when a document or image is being loaded |                                                |                                                                    |
| focus      | An element, such as a command button, becomes active     |                                                |                                                                    |
| keydown    | A user presses a key                                     |                                                |                                                                    |
| keyup      | A user releases a key                                    |                                                |                                                                    |
| load       | A document or image loads                                |                                                |                                                                    |
| mouseout   |                                                          | A user moves the mouse pointer off an element  | A user stops touching an element                                   |
| mouseover  |                                                          | A user moves the mouse pointer over an element | A user touches an element                                          |
| reset      | A form’s fields are reset to its default values          |                                                |                                                                    |
| select     | A user selects text                                      |                                                |                                                                    |
| submit     | A user submits a form                                    |                                                |                                                                    |
| touchend   |                                                          |                                                | A user removes finger or stylus from the screen                    |
| touchmove  |                                                          |                                                | A finger or stylus already touching the screen moves on the screen |
| touchstart |                                                          |                                                | A user touches a finger or stylus to the screen                    |
| unload     | A document unloads                                       |                                                |                                                                    |

Note that not all events happen with all devices. 

For instance, keydown and keyup are triggered only by a keyboard, and touchend, touchmove, and touchstart take place only on a touchscreen device. For this reason, it’s important to choose trigger events that make your scripts available to users on all devices. You’ll explore different methods of doing this as you build your JavaScript skills.

Back: [[Chapter 1 - Introduction to JavaScript]]
related:
- [[Common Events]]
- [[Working with Elements and Events]]
- [[Referencing Web Page Element]]



