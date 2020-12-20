if (localStorage.getItem("auth_user") != "") {
    $('#login_view').hide();
    $('#btn_logout').show();
} else {
    $('#login_view').show();
    $('#btn_logout').hide();
}

function logout() {
    localStorage.setItem("auth_user", "");
    localStorage.setItem("auth_admin", "");
    $('#login_view').show();
    $('#btn_logout').hide();

    $('#local_storage').text(localStorage.getItem("auth_user"));
    $('#local_storage_admin').text(localStorage.getItem("auth_admin"));
}

function auth() {
  let auth_user_jsontxt = localStorage.getItem("auth_user");
  console.log("auth_user_jsontxt = " + auth_user_jsontxt);

  if (auth_user_jsontxt == "") {
      login();
  } else {

      alert("Already authenticated: " + auth_user_jsontxt);
  }
}

function login() {
    let username = $("#username").val();
    let password = $("#password").val();
    //alert(username + password);

    $.ajax({
      'type': 'POST',
      'url': 'http://web.fc.utm.my/ttms/web_man_webservice_json.cgi',
      'data': 'entity=authentication&login=' + username + '&password=' + password,
      'success': function(responseTxt, status, xhr) {

        console.log("responseTxt = " + responseTxt);
        console.log((responseTxt != ""));
        console.log((responseTxt != null));
        console.log((responseTxt != "null"));

        if (responseTxt != "") {
            let auth_info = JSON.parse(responseTxt);
            console.log(auth_info);

            localStorage.setItem("auth_user", responseTxt);

            $('#login_view').hide();
            $('#btn_logout').show();

            $('#local_storage').text(localStorage.getItem("auth_user"));

            login_admin();

        } else {
            alert("Wrong username or password - login()");
        }

      },
      'error': function(xhr, status, error) {

      },
      'async': true
    });
  }


[
 {
    "full_name":"MD MIRZA SHIHAB",
    "session_id":"286027665122677",
    "login_name":"A16CS4016",
    "description":"Pelajar FSKSM"
 }
]

function login_admin() {
    let auth_obj_user = JSON.parse(localStorage.getItem("auth_user"));
    $.ajax({
      'type': 'POST',
      'url': 'http://gmm.fc.utm.my/~mrazak/scsx3104/2021-1/TechExp3/auth4.php',
      'data': 'session_id=' + auth_obj_user[0].session_id,
      'success': function(responseTxt, status, xhr) {

        /*console.log("responseTxt = " + responseTxt);
        console.log((responseTxt != ""));
        console.log((responseTxt != null));
        console.log((responseTxt != "null"));*/

        if (responseTxt != "") {
            let auth_info = JSON.parse(responseTxt);
            console.log(auth_info);

            localStorage.setItem("auth_admin", responseTxt);

            $('#local_storage_admin').text(localStorage.getItem("auth_admin"));

        } else {
            alert("Wrong username or password - login_admin()");
        }

      },
      'error': function(xhr, status, error) {

      },
      'async': true
    });
  }