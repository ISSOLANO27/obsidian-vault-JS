## Quick but Problematic

document.[[Write() Method]] is an easy way to insert text or HTML into a page but it comes with performance and usability issues.
### Performance Hit

Every time you call document.write(), the browser has to rebuild the DOM to include the new content. 

This slows down page load and responsiveness
#### Danger after Load

**NEVER** **use it after the page has finished loading,** the browser will wide out the entire page and replace it with whatever you wrote. That why the book says NEVER use it after a load.
##### Best Practice rule of Thumb

- Use it only for small snippets of content.
- Place it inside a `<script>` tag that's embedded directly in the HTML file (so it runs while the page is still being built)
- Avoid using it dynamically after the DOM is ready.
