


> These are not the only ones that are monitored by JS

- [[Events that are NOT direct result of user action]]


If it’s **hybrid**, the browser is actively interpreting something before firing the event.

| EVENT      | PRIMARY TRIGGER TYPE         | CLASSIFICATION    | WHY (Origin Explanation)                                                                      | DESCRIPTION                                            |
| ---------- | ---------------------------- | ----------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| keydown    | Keyboard                     | User-Generated    | Requires a physical key press. No browser decision logic involved.                            | Fires when a key is pressed down. Repeats if held.     |
| keyup      | Keyboard                     | User-Generated    | Requires a physical key release.                                                              | Fires when a pressed key is released.                  |
| click      | Mouse / Touch                | User-Generated    | Direct result of user activation (mouse click or tap).                                        | Fires when an element is activated by click or tap.    |
| mouseover  | Mouse                        | User-Generated    | Triggered by user physically moving the pointer.                                              | Fires when pointer enters an element.                  |
| mouseout   | Mouse                        | User-Generated    | Triggered by user physically moving the pointer away.                                         | Fires when pointer leaves an element.                  |
| touchstart | Touchscreen                  | User-Generated    | Requires finger/stylus contact.                                                               | Fires when screen is first touched.                    |
| touchmove  | Touchscreen                  | User-Generated    | Requires finger movement on screen.                                                           | Fires when a touch moves across the screen.            |
| touchend   | Touchscreen                  | User-Generated    | Requires lifting finger/stylus.                                                               | Fires when touch contact ends.                         |
| select     | Mouse / Keyboard             | User-Generated    | Requires user highlighting text.                                                              | Fires when text is selected in input/textarea.         |
| focus      | Browser (after user action)  | Hybrid            | User initiates interaction, but browser decides which element gains active state.             | Fires when element becomes active and ready for input. |
| blur       | Browser (after user action)  | Hybrid            | Triggered after user moves away, but browser controls when focus is officially lost.          | Fires when element loses focus.                        |
| change     | Browser (after modification) | Hybrid            | User modifies value, but browser determines when the change is “committed” (usually on blur). | Fires when input value changes and loses focus.        |
| submit     | Browser (after user action)  | Hybrid            | User action (button click or Enter) triggers it, but browser handles form submission event.   | Fires when a form is submitted.                        |
| reset      | Browser (after user action)  | Hybrid            | User clicks reset, but browser restores defaults and then fires event.                        | Fires when form fields return to default values.       |
| load       | Browser Lifecycle            | Browser-Generated | Triggered automatically when resource finishes loading. No direct user interaction required.  | Fires when page or resource fully loads.               |
| unload     | Browser Lifecycle            | Browser-Generated | Triggered when document is being removed from memory.                                         | Fires when navigating away from page.                  |

---


Back:
- [[Understanding Events]]

