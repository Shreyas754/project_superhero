var canvas = new fabric.canvas('myCanvas');
var block_width = 30;
var block_height = 30;
var player_x = 10;
var player_y = 10;
var object_of_player = "";
var block_image = "";

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
        block_image = Img;
        block_image.scaleToWidth(block_image_width);
        block_image.scaleToHeight(block_image_height);
        block_image.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image);
    });
    
}
