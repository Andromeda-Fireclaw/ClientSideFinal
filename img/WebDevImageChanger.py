import os
from re import *

FileList = []
for tup in os.walk("weapons - Copy"):
    for x in tup[2]:
        FileList.append(x)

newFileList = []
for file in FileList:
     y = findall('_.|-.', file)
     try:
         fixedWord = file
         for change in y:
           fixedWord = fixedWord.replace(change, (change[1]).upper())
         print(file)
         print(fixedWord)
         os.rename("weapons - Copy/"+file, "weapons - Copy/"+fixedWord)
     except: pass




#for x in FileList:
#    rename('a.txt', 'b.kml')