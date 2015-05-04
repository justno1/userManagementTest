(function(){

 //初始化Parse();
  Parse.initialize("lb68hfMRYgqhmuro8Ook5xux5mORCjF59w6Exfek","PAQaaFUhvx52GXTHFsZ4MeLF2aaQNrJT1xx6je2S");

 var handler = {

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
          document.getElementById('form-signin-message').innerHTML = error.message + '[' + error.code + ']';
        }
      });
    },false);
      }
    }

  this.Router = new router();
  Parse.history.start();
  handler.logInViewFunc();

})();