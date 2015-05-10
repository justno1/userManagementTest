(function(){

 //初始化Parse();
  Parse.initialize("lb68hfMRYgqhmuro8Ook5xux5mORCjF59w6Exfek","PAQaaFUhvx52GXTHFsZ4MeLF2aaQNrJT1xx6je2S");

// 可選-編寫共用函數();
  var pagingCheck = {
    loginRequiredView: function(ViewFunction){
      return function(){
        var currentUser = Parse.User.current();
        if(currentUser){
          ViewFunction();
        }else{
          window.location.hash = "login/";
        }
      }
    },
  };

 var handler = {

  navbarFunc: function(){

    var currentUser = Parse.User.current();    
     if(currentUser){

 //      顯示哪些button();
       document.getElementById('loginButton').style.display = "none"; 
       document.getElementById('logoutButton').style.display = "display"; 
  //     document.getElementById('navbar-brand').value = "none"; 

     } else {

 //      顯示哪些button();    
       document.getElementById('loginButton').style.display = "display"; 
       document.getElementById('logoutButton').style.display = "none"; 
     }

     document.getElementById('logoutButton').addEventListener("click",function(){
      Parse.User.logOut();
      handler.navbarFunc();
      window.location.hash = "login/";
     })
   },

   logInViewFunc: function(redirect){

  //   綁定註冊表單的註冊檢查事件(); // 送出還要再檢查一次，這裡會用Parse.User.signUp和相關函數
     document.getElementById('form-signup').addEventListener('submit',function(j){
      j.preventDefault();
      var user = new Parse.User();
      user.set("username",document.getElementById('form-signup-student-id').value);
      user.set("password",document.getElementById('form-signup-password').value);
      user.set("email",document.getElementById('form-signup-email').value);

      user.signUp(null,{
        success: function(user){
          postAction();
        },
        error: function(user,error){
          document.getElementById('form-signup-message').innerHTML = error.message + '[' + error.code + ']';
        }
      });
    },false);
      }
    };

   //   綁定登入表單的登入檢查事件(); // 送出還要再檢查一次，這裡會用Parse.User.logIn
     document.getElementById('form-signin').addEventListener("submit",function(){
      var signinID = document.getElementById('form-signin-student-id').value;
      var signinPassword = document.getElementById('form-signin-password').value;
      Parse.User.logIn(signinID,signinPassword,{
          success: function(user){
 //           alert("TEST")
          },
          error: function(user,error){
            //alert("something wrong");
            console.log(user);
            console.log(error);
          }
        });
    }, false);

//  Parse.history.start();
  handler.navbarFunc();
  handler.logInViewFunc();


})();