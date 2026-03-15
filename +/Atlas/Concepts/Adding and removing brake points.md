The browser debugging tools include the ability to run programs in [[break mode]] in which the program execution is suspended to allow the programmer to review the current state of variables and functions. 

Entering break mode **requires inserting breakpoints into the debugger**, where each breakpoint marks the location where execution is suspended.

Once the execution is paused, you use the debugger to view the status of the program at the point at which it was paused.


> Adding a breakpoint does not the alter the code; only how the JavaScript interpreter interacts with the running program.

### Event Listener Breakpoints
The debugger also allows you to set [[event listener breakpoints]], which are breakpoints that are activated when an event occurs within the web page or browser. 

To apply an event listener breakpoint, **click the Event Listener Breakpoints arrow box** within the debugger and **then click the checkbox for the event**. 

The program execution will **pause** at the occurrence of the selected event or events and you can view the status of the program at that point.

---
Back: [[Tracking Program Flow with Debugging Tools]]