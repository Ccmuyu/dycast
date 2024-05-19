import json

import pyttsx3

engine = pyttsx3.init()
#
# voices = engine.getProperty("voices")
#
# print(voices[0])
# print(voices[1])
# engine.setProperty("voice",voices[0].id)
#
# engine.say("我每天十几个骚扰电话，全部拒接拉黑，现在一天只有3、4个了，累计拉黑几百个号码了")
#
# engine.runAndWait()

def speak(str):
    engine.say(audio)
    engine.runAndWait()