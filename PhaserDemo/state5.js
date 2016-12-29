demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor ='#c2f0c2';
        console.log('state5');
        addChangeStateEventListeners();
    },
    update: function(){}    
};