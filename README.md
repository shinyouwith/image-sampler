# Image Sampler

CLI helper for gettting a sample random image URL from [Unsplash](https://unsplash.com/).
You can get a sample image URL with the appropriate size you need.

## Getting Started

### Installing

```javascript
npm install -g image-sampler
```

## Size options

### Predefined size options

You can get small, medium, large size sample image url with the predefined option.

```
// small size (400x300)
image-sampler -s
image-sampler -small

// medium size (800x600)
image-sampler -m
image-sampler -medium

// large size (1200x960)
image-sampler -l
image-sampler -large
```

### Custom size option

You can get custom sized image with `-c` or `-custom` option

```
image-sampler -c 300x400
image-sampler -custom 300x400
```
> option value should be formated as `{width}x{height}`

## Built With

* [Unsplash Source API](https://source.unsplash.com/)
* [commander.js](https://github.com/tj/commander.js/)

## Authors

* [Shinyou](https://github.com/shinyouwith)

## License

This project is licensed under the MIT License.
