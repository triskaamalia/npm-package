(function($, window, undefined){
    $.fn.imageSlide = function(prev, next){
        return this.each(function(){
            $container = $(this).children().eq(0);
            if($container){
                var $foto = $container.children();
                var interval = $foto.length;
                var increment = $foto.outerWidth(true);
                var nextSlide = Math.floor($(this).width() / increment); 
                var primerElement = 2;
                var move = false;
            }

            $container.css('width', (interval + nextSlide) * increment);
            for(var i = 0; i < nextSlide; i++){
                $container.append($foto.eq(i).clone());
            }

            $(next).click(function(e){
                e.preventDefault();
                
                if(!move){
                    
                    if(primerElement > interval){
                        
                        primerElement = 2;
                        $container.css('left', '0px');

                    } else{
                        
                        primerElement++;
                    }
                    
                    move = true;
                    $container.animate({
                        left: '-=' + increment,
                    },'swing', function(){
                        move = false;
                    })
                }

            });

            $(prev).click(function(e){
                e.preventDefault();
                
                if(!move){
                    if(primerElement == 1){
                        $container.css('left', interval * increment * -1);
                        primerElement = interval;
                    } else{
                        primerElement--;
                }
                    move = true;
                    $container.animate({
                        left: '+=' + increment,
                    },'swing', function(){
                        move = false;
                    })
                }
            })
        });
    }
})(jQuery, window)