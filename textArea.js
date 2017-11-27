function WriteToFile(passForm) {
var content = document.getElementById("ms_word_filtered_html").value;
var hamOrSpam = document.querySelector('.HamSpam').checked;
var fso = new ActiveXObject("Scripting.FileSystemObject");
if(hamOrSpam){
  var s = fso.CreateTextFile("C:\\Users\\Ankit.Kumar\\lingspam_public\\lemm_stop\\train-mails\\msg"+Date.now()+".txt", true);
}else{
  var s = fso.CreateTextFile("C:\\Users\\Ankit.Kumar\\lingspam_public\\lemm_stop\\train-mails\\spmsg"+Date.now()+".txt", true);
}
s.WriteLine(content);
s.Close();
}