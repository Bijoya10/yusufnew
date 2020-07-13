class Form{
    constructor(){
        this.input = createInput("username");
        this.password=createInput("","password");
        this.button = createButton("SignUp");
        this.greeting=createElement("h2");
        this.input2 = createInput("username");
        this.password2=createInput("","password");
        this.button2 = createButton("login");
        this.greeting2=createElement("h3");
        this.greeting3=createElement("h3");
                
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.password.hide();
        this.input2.hide();
        this.button2.hide();
        this.password2.hide();
        this.greeting2.hide();
        this.greeting3.hide();
    }

   display(){
        var title = createElement('h2');
        title.html("TimeTable");
        title.position(width/2-40,0);

        this.greeting2.html("(OR)");
        this.greeting2.position(width/2,height/2-150);

        this.greeting3.html("Login (OR)  SignUp");
        this.greeting3.position(width/2-50,height/6);

       this.input.position(width/2+300,height/2-150);
       this.button.position(width/2+300,height/2);
       this.password.position(width/2+300,height/2-100);

       this.input2.position(width/2-400,height/2-150);
       this.button2.position(width/2-400,height/2);
       this.password2.position(width/2-400,height/2-100);
      

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.password.hide();
            this.greeting2.hide();
            this.greeting3.hide();
            this.input2.hide();
            this.button2.hide();
            this.password2.hide();

            user.password= this.password.value();
        

            user.name= this.input.value();
            userCount++;
            user.index=userCount;
            user.update();
            user.updateCount(userCount);
            this.greeting.html("hello "+ user.name);
            this.greeting.position(width/2-400,0);
            console.log(user);
           gameState=1;
        });

        this.button2.mousePressed(()=>{
            this.input2.hide();
            this.button2.hide();
            this.password2.hide();
            this.greeting2.hide();
            this.greeting3.hide();
            this.input.hide();
            this.button.hide();
            this.password.hide();
           
            user.name= this.input2.value();
            user.password= this.password2.value();
            
            for(var plr in allUsers){
              
               if(user.name===allUsers[plr].name && user.password===allUsers[plr].password){
                    user.index=allUsers[plr].index;
                    user.done=allUsers[plr].done;
                    user.progress=allUsers[plr].progress;
                    user.answer=allUsers[plr].answer;


                    flag=1;
                    console.log(user);
                    break;
                }
            }
            
            if(flag===0){
                alert("userName (OR) password is WRONG");
                gameState=0;
                game.start();
                 
                user.name=null;
                user.password=null;
                
            }else if(flag===1){
                gameState=2;
            }
            
           
            
            
           
        });
      
        
    }
}