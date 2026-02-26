The web is for Everyone.

This includes visually impaired individuals who depend on screen readers. ARIA is one standard to assist them.

### Attributes
role attribute
```
<header role="banner">
	content
</header>
```

>role exists to explain meaning when native HTML fails to do it.

Problem: Modern web interfaces started behaving like apps, but HTML alone couldn’t always _describe_ what those things were to assistive technologies.

Solution: role attribute tells assisted technologies what kind of thing an element is suppose to represent. Specially in not so obvious cases.

Screen reader do not see pixels, they semantics

Related: 
- [[Semantic HTML Depends on Browser Support]]
- [[ARIA Supported Role Names]]
back
- [[Writing Effective HTML Code]]
