# HamSpam

####UI####
1.UI Consists of uploadFile.html you need to write the mail into it and choose either you want it to be a HAM or SPAM
2.Submit click will put that intothe training folder.
3.This HTML page will work only in "IE" not on any other browser.


####Phython######
1.Here we are creating a dictionary of the words using "make_Dictionary" def by passing the training train_dir path.
2.Extracting the word count using "extract_features(mail_dir)"
3.Prepare feature vectors per training mail and its labels
4.Training SVM and Naive bayes classifier and its variants
5.Test the unseen mails for Spam.


####How to execute the application########
1.Phython can be executed directly on Anaconda ediotr Jupytr notebook.
2.Need to change the path of the downloaded lingspam_public folder in the test_dir and DIR in the python code.
3.Then simply you can execte the python file which will give the number of Ham and Spam emails.
4.Now If you need to add some extra email for training purpose then use the UI eneter the mail mark it as HAM or SPAM and submit that file will get created in the train_mails folder and then again execute the "Training SVM and Naive bayes classifier and its variants" you can see the result changing and then can test on the "test-mails" folder


This is basically the Apllication which distinguished between the SPAM and HAM.
Uploaded file lingspam_public zip contains everything including the UI setup that alone can also be used for executing purpose.
