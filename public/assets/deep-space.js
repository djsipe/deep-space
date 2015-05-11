$(function(){
    /**
     * Space time continuum
     * @type {HTMLCanvasElement}
     */
    var SpaceTimeContinuum = document.getElementById("stc");

    $(SpaceTimeContinuum).css("background-color", "black");
    $(SpaceTimeContinuum).width(getViewPortSize()[0]);
    $(SpaceTimeContinuum).height(getViewPortSize()[1]);

    var pos,stars = [];

    for (var i=0; i<30; i++) {
        stars[i] = SpaceTimeContinuum.getContext("2d");
        stars[i].fillStyle = 'white';

        pos = [
            _.random(0, SpaceTimeContinuum.width),
            _.random(0, SpaceTimeContinuum.height)
        ];

        console.log(pos);
        stars[i].fillRect(
            pos[0],
            pos[1],
            0.5,
            0.5
        );
       //console.log(stars[i]);
    }

    function getViewPortSize() {
        return [
            Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
            Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        ];
    }

});


