$(window).ready(function() {
  resize_images()
})

function resize_images() {
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

  resolutions.push([$image.width(), $image.height()])

  var ratio = resolutions[0][0] / resolutions[0][1]

  resolutions.push([window.innerHeight * ratio, window.innerHeight])
  resolutions.push([window.innerWidth, window.innerWidth / ratio])
  return resolutions
}
