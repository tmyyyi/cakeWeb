define(["jquery"],function($){
    function addcart(){}
    addcart.prototype.init = function(){
        //点击加入购物车
        $(".content_product").on("click",".addcart",function(){
        productIndex = $(this).parent().attr("data-index");            
        name = $(this).parent().children(".name").text();
        price = $(this).parent().children(".price").text();
        img = $(this).parent().find("img").attr("src").split("/")[1];
        console.log(name);
        console.log(price);
        console.log(img);
        // console.log(productIndex);
        $.post("http://localhost/gulpproject/api/vi/order.php",{name:name,price:price,img:img,productIndex:productIndex},function(data){
            console.log(data);
        });

        $.post("http://localhost/gulpproject/api/vi/getCart.php",function(data){
            if(data == 0){
            }else{
                $("#cart1").css({"display":"block"});
                $("#cart1").html(data);
                $("#cart2").css({"display":"block"});
                $("#cart2").html(data);
                }
            });             
        })

        //点击加入购物车
        $(".content_toast_wrap").on("click",".addcart",function(){
        productIndex = $(this).parent().attr("data-index");            
        name = $(this).parent().children(".name").text();
        price = $(this).parent().children(".price").text();
        img = $(this).parent().find("img").attr("src").split("/")[1];
        console.log(name);
        console.log(price);
        console.log(img);
        // console.log(productIndex);
        $.post("http://localhost/gulpproject/api/vi/order.php",{name:name,price:price,img:img,productIndex:productIndex},function(data){
            console.log(data);
        });

        $.post("http://localhost/gulpproject/api/vi/getCart.php",function(data){
            if(data == 0){
            }else{
                $("#cart1").css({"display":"block"});
                $("#cart1").html(data);
                $("#cart2").css({"display":"block"});
                $("#cart2").html(data);
                }
            });             
        })

        //点击加入购物车
        $(".content_gift").on("click",".addcart",function(){
        productIndex = $(this).parent().attr("data-index");            
        name = $(this).parent().children(".name").text();
        price = $(this).parent().children(".price").text();
        img = $(this).parent().find("img").attr("src").split("/")[1];
        console.log(name);
        console.log(price);
        console.log(img);
        // console.log(productIndex);
        $.post("http://localhost/gulpproject/api/vi/order.php",{name:name,price:price,img:img,productIndex:productIndex},function(data){
            console.log(data);
        });

        $.post("http://localhost/gulpproject/api/vi/getCart.php",function(data){
            if(data == 0){
            }else{
                $("#cart1").css({"display":"block"});
                $("#cart1").html(data);
                $("#cart2").css({"display":"block"});
                $("#cart2").html(data);
                }
            });             
        })
    }

    return new addcart();
})