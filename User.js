class User{
    constructor(){
        this.name=null;
        this.answer=[];
        this.index=null;
        this.password=null;
        this.progress=0;
        this.done=[false,false,false,false,false,
            false,false,false,false,false,
            false,false,false,false,false,
            false,false,false,false,false,
            false,false,false,false,false,
            false,false,false,false,false,
            false,false,false,false,false];
    }
    update(){
        var userIndex="users/user"+this.index;
        database.ref(userIndex).set({
            index:this.index,
            name:this.name,
            answer:this.answer,
            password:this.password,
            progress:this.progress,
            done:this.done
     
        });
    }
    updateProgress(){
        var userIndex="users/user"+this.index;
        database.ref(userIndex).update({
            progress:this.progress,
            done:this.done
     
        });
    }

    updateCount(count){
        database.ref('/').update({
            userCount:count
        });
    }

    

    getCount(){
        var userCountRef = database.ref('userCount');
        userCountRef.on("value",function(data){
          userCount = data.val();
        })
      }

      getAnswers(){
        var userIndex="users/user"+this.index;
          database.ref(userIndex+"/answer").on("value",function(data){
            this.answers=data.val();
          })
              
          
      }

      static getUserInfo(){
        var UserInfoRef=database.ref('users');
        UserInfoRef.on("value",(data)=>{
            allUsers=data.val();
        });
    }

}