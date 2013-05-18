/*egg*/
(function() {
    var _E = function(o, e, f) {
        if (o.attachEvent) {
            o.attachEvent('on' + e, f);
        } else {
            o.addEventListener(e, f, false);
        }
    };
    _E(window, 'load', function(e) {
        var _m = document.createElement('img');
        _m.src = 'img/contra.jpg';
        _m.style.display = 'none';
        _m.style.position = 'fixed';
        _m.style.left = (document.documentElement.clientWidth - 507) / 2 + 'px';
        var imgTop = (document.documentElement.clientHeight - 445) / 2;
        if(imgTop > 0){
        	_m.style.top = imgTop + 'px';
        } else {
        	_m.style.top = '0px';
        }
        document.body.appendChild(_m);
        var _egg = {
            _ss: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
            _s: 0,
            _p: 0,
            bind: function(e) {
                var _e = e || window.event;
                (_e.keyCode == _egg._ss[_egg._s])
				? (_egg._s == _egg._ss.length-1 ? _egg._got() : ++_egg._s) 
				: (_egg._s = 0);
                return true;
            },
            _got: function() {
                _egg._s = 0;
                _m.style.display = 'block';
            }
        };
        _E(document, 'keydown', _egg.bind);
    });
})();