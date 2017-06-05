import sys, os, webbrowser

dir_path = os.path.dirname(os.path.realpath(__file__))

link = "file://"+dir_path+"/web.dev.redirect.html"
print(link)

webbrowser.open(link)
