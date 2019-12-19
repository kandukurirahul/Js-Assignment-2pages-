//document.getElementById('r').innerHTML="Hello"
var v=1
function load()
{
  var request = new XMLHttpRequest()
  url='https://reqres.in/api/users?page='+v;
  request.open('GET',url, true)
  request.onload = function() {
  var data = JSON.parse(this.response)
    var dob=data["data"]
    if(dob.length>0){
      U(dob);
    }
    else
    {
      alert("Reached end of file")
    }
  }
  request.send()
  v=v+1
}  