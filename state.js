class Game{
    constructor(){

    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
       
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
    
      start(){
        if(gameState === 0){
          user = new User();
          user.getCount();
          User.getUserInfo();
          form = new Form();
          form.display();
          timetable=new TimeTable();
          timetable.hide();
          homepage=new HomePage();
          homepage.hide();
        }
      }

      signup(){
        //if(gameState === 1){
          form.hide();
          timetable.display();
     // }
    }
      home(){
        User.getUserInfo();
          timetable.hide();
          homepage.display();
       // }
      }
}