

---

# 🌍 [[GLOBAL / UNIVERSAL]] 

These come from `HTMLElement`.

|Property|Type|Default|R|W|Controls|Practical Meaning|
|---|---|---|---|---|---|---|
|id|string|""|✔|✔|Unique identifier|Used for referencing|
|classList|object|empty|✔|✔ (methods)|CSS classes|Dynamic styling|
|textContent|string|""|✔|✔|Text inside element|Change visible text|
|innerHTML|string|""|✔|✔|HTML inside element|Inject markup|
|style|object|{}|✔|✔|Inline CSS styles|Direct visual control|
|hidden|boolean|false|✔|✔|Visibility|Hide/show element|
|tabIndex|number|-1|✔|✔|Keyboard focus order|Accessibility control|

---

# 🔘 [[BUTTON ELEMENT]]

|Property|Type|Default|R|W|Controls|Practical Meaning|
|---|---|---|---|---|---|---|
|disabled|boolean|false|✔|✔|Interactivity|true = not clickable|
|type|string|"submit" (in form)|✔|✔|Behavior|button / submit / reset|
|value|string|""|✔|✔|Submitted form value|Data sent on submit|

Classification: Interactive Form Control

---

# 📝 [[INPUT / TEXTAREA]]

|Property|Type|Default|R|W|Controls|Practical Meaning|
|---|---|---|---|---|---|---|
|value|string|""|✔|✔|Current user input|Core data retrieval|
|type|string|"text"|✔|✔|Input behavior|password/email/etc|
|checked|boolean|false|✔|✔|Selection state|Checkbox/radio|
|disabled|boolean|false|✔|✔|Interactivity|Enable/disable|
|required|boolean|false|✔|✔|Validation|Required field|
|placeholder|string|""|✔|✔|Hint text|UX helper|
|maxLength|number|-1|✔|✔|Character limit|Input control|

Classification: Data Entry Control

---

# 📄 [[FORM ELEMENT]]

|Property|Type|Default|R|W|Controls|Practical Meaning|
|---|---|---|---|---|---|---|
|action|string|current URL|✔|✔|Submit destination|Where data goes|
|method|string|"get"|✔|✔|HTTP method|GET or POST|
|elements|collection|—|✔|✖|Child controls|Access inputs|
|length|number|—|✔|✖|Number of controls|Loop through fields|

Classification: Data Submission Container

---

# 🔗 [[ANCHOR (`<a>`)]]

|Property|Type|Default|R|W|Controls|Practical Meaning|
|---|---|---|---|---|---|---|
|href|string|""|✔|✔|Destination URL|Change link|
|target|string|""|✔|✔|Open location|_blank etc|
|rel|string|""|✔|✔|Relationship|Security attributes|
|hash|string|""|✔|✖|URL fragment|#section|

Classification: Navigation Element

---

# 🖼 [[IMAGE (`<img>`)]]

|Property|Type|Default|R|W|Controls|Practical Meaning|
|---|---|---|---|---|---|---|
|src|string|""|✔|✔|Image source|Swap images dynamically|
|alt|string|""|✔|✔|Accessibility text|Screen readers|
|width|number|intrinsic|✔|✔|Display width|Resize|
|height|number|intrinsic|✔|✔|Display height|Resize|
|naturalWidth|number|—|✔|✖|Real image width|Diagnostics|

Classification: Media Element

---

# 🎥 [[VIDEO / AUDIO]]

|Property|Type|Default|R|W|Controls|Practical Meaning|
|---|---|---|---|---|---|---|
|src|string|""|✔|✔|Media source|Change file|
|currentTime|number|0|✔|✔|Playback position|Seek|
|paused|boolean|true|✔|✖|Playback state|Is playing?|
|volume|number|1|✔|✔|Volume level|0–1|
|muted|boolean|false|✔|✔|Mute state|Silence|
|duration|number|—|✔|✖|Media length|Info display|

Classification: Time-Based Media Control

---

# 📋 SELECT / OPTION

[[SELECT]]

|Property|Type|Default|R|W|Controls|
|---|---|---|---|---|---|
|value|string|first option|✔|✔|Selected value|
|selectedIndex|number|0|✔|✔|Index of selection|
|options|collection|—|✔|✖|All option elements|
|multiple|boolean|false|✔|✔|Multi-select mode|

[[OPTION]]

|Property|Type|Default|R|W|Controls|
|---|---|---|---|---|---|
|value|string|text|✔|✔|Submitted value|
|text|string|—|✔|✔|Visible text|
|selected|boolean|false|✔|✔|Selection state|

Classification: Selection Control

---

# 📏 [[LAYOUT & POSITIONING (Any Visible Element)]]

|Property|Type|R|W|Controls|
|---|---|---|---|---|
|offsetWidth|number|✔|✖|Width incl. padding|
|offsetHeight|number|✔|✖|Height|
|clientWidth|number|✔|✖|Visible width|
|scrollTop|number|✔|✔|Scroll position|
|scrollHeight|number|✔|✖|Total scrollable size|

Classification: Layout Measurement

---

# 🧠 Pattern Recognition Layer

Now step back.

Notice patterns:

Form controls → value, disabled, required  
Media → src, time, volume  
Navigation → href, target  
Visibility → hidden, style, classList

This is not memorization.

It’s interface literacy.

You don’t need to remember 200 properties.

You need to remember categories.

Once you know the category, you can infer likely properties.

That’s professional thinking.

---

If you want to level up again, we can next classify:

• Frequently mutated properties (UI state control)  
• Rarely touched properties (structural)  
• Dangerous ones (innerHTML and security implications)  
• Attribute vs property differences (where many devs stumble)

That last one is a subtle trap even for experienced developers.