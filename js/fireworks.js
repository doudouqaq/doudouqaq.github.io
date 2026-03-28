(function() {
    var colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#8B00FF', '#FF69B4', '#00FA9A'];
    
    function createFirework(x, y) {
        var particleCount = 25;
        
        for (var i = 0; i < particleCount; i++) {
            (function(index) {
                var particle = document.createElement('div');
                var color = colors[Math.floor(Math.random() * colors.length)];
                var angle = (index / particleCount) * Math.PI * 2;
                var velocity = 80 + Math.random() * 60;
                var vx = Math.cos(angle) * velocity;
                var vy = Math.sin(angle) * velocity;
                
                particle.style.cssText = 'position:fixed;width:6px;height:6px;background:' + color + ';border-radius:50%;left:' + x + 'px;top:' + y + 'px;z-index:99999;pointer-events:none;opacity:1;box-shadow:0 0 6px ' + color + ';';
                document.body.appendChild(particle);
                
                var posX = x;
                var posY = y;
                var opacity = 1;
                var gravity = 3;
                var vyTemp = vy;
                var decay = 0.015 + Math.random() * 0.01;
                
                function animate() {
                    posX += vx * 0.04;
                    vyTemp += gravity;
                    posY += vyTemp * 0.04;
                    opacity -= decay;
                    vx *= 0.98;
                    
                    if (opacity > 0) {
                        particle.style.left = posX + 'px';
                        particle.style.top = posY + 'px';
                        particle.style.opacity = opacity;
                        requestAnimationFrame(animate);
                    } else {
                        if (particle.parentNode) {
                            particle.parentNode.removeChild(particle);
                        }
                    }
                }
                
                requestAnimationFrame(animate);
            })(i);
        }
    }
    
    document.addEventListener('click', function(e) {
        createFirework(e.clientX, e.clientY);
    });
})();
