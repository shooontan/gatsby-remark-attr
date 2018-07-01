# gatsby-remark-attr

Add attributes to `MarkdownRemark` using [remark-attr](https://github.com/arobase-che/remark-attr).

## Install

`npm install --save gatsby-remark-attr`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        'gatsby-remark-attr'
      ],
    },
  },
]

// allowDangerousDOMEventHandlers option
plugins: [
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-attr",
          options: {
            allowDangerousDOMEventHandlers: true
          },
        },
      ],
    },
  },
]
```

### Images

```markdown
// input
![alt](src){width=100 height=50}

// output
<img src="src" alt="alt" width="100" height="50">
```

### Links

```markdown
// input
[Gatsby](https://github.com/gatsbyjs/gatsby){rel="external"}

// output
<a href="https://github.com/gatsbyjs/gatsby" rel="external">Gatsby</a>
```

## Options

[Options](https://github.com/arobase-che/remark-attr#api)
