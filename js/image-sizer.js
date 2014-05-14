
ImageResizer = (function(){
  f = function() {
    f.margin = 40;
  }

  f.prototype.init = function() {
    this.resize_images();
    $(window).resize(function() {
      console.log("hiya")
      this.resize_images();
    }.bind(this))
  }

  f.prototype.resize_images = function() {
      var $images = get_images()

      $images.each(function(image_index, image) {
        resize_image($(image))
      })
  }


  function get_images() {
    return $(".almost-full-screen")
  }


  function resize_image($image) {
    var resolutions = get_resolutions($image)
    resolutions.sort(function(a, b) {
      return (a[0] * a[1]) - (b[0] * b[1])
    })

    $image.width(resolutions[0][0])
    $image.height(resolutions[0][1])
  }

  function get_resolutions($image) {
    var resolutions = []

    var rawImage = new Image();
    rawImage.src = $image.attr('src'); // path to image
    resolutions.push([rawImage.width, rawImage.height])

    var ratio = resolutions[0][0] / resolutions[0][1]

    resolutions.push([(window.innerHeight - f.margin) * ratio, window.innerHeight - f.margin])
    resolutions.push([window.innerWidth - f.margin, (window.innerWidth - f.margin) / ratio])
    return resolutions
  }

  return f;
}())

$(window).ready(function() {
  //var i = new ImageResizer
  //i.init();
})
