Nested lists can be displayed in an outline style through the use of contextual selectors. 

For example, the following style rules create an outline style for a nested ordered list:
```css
ol {
    list-style-type: upper-roman;
}

ol ol {
    list-style-type: upper-alpha;
}

ol ol ol {
    list-style-type: decimal;
}
```

In this style, the `ol` selector selects the top level of the list, displaying the list items with a Roman numeral. The `ol ol` selector selects the second level, marking the items with capital letters. The third level indicated by the `ol ol ol` selector is marked with decimal values.

---
Back: [[Formatting List]]