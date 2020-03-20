$(".img-thumbnail-DCL").on("mouseover", function(){
    var thumbnailLabel = $(this).next()
    thumbnailLabel.css("display", "block")
})

$(".img-thumbnail-DCL").on("mouseleave", function(){
    var thumbnailLabel = $(this).next()
    thumbnailLabel.css("display", "none")
})