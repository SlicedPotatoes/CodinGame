import sys
import math
def encode_decalage(text, decalage):
    _text = [""] * len(text)
    for i, c in enumerate(text):
        if c.isalpha():
            a = ord('a') if c.islower() else ord('A')
            _c = (ord(c) - a + decalage) % 26
            _text[i] = chr(_c + a)
        else:
            _text[i] = c
    return "".join(_text)
    
def probaTextAnglais(text):
    a = ord('a')
    proba = {0: 8.08, 1: 1.67, 2: 3.18, 3: 3.99, 4: 12.56, 5: 2.17, 6: 1.8, 7: 5.27, 8: 7.24, 9: 0.14, 10: 0.63, 11: 4.04, 12: 2.6, 13: 7.38, 14: 7.47, 15: 1.91, 16: 0.09, 17: 6.42, 18: 6.59, 19: 9.15, 20: 2.79, 21: 1, 22: 1.89, 23: 0.21, 24: 1.65, 25: 0.07}
    frequence = [0] * 26
    text = text.lower()
    for c in text:
        _c = ord(c) - a
        if 0 <= _c <= 25:
            frequence[_c] += 1
    lenStr = len(text)
    score = 0
    for i in range(26):
        p = (frequence[i] / lenStr) * 100
        score += (proba[i] - p) ** 2
    return math.sqrt(score)
def main():
    message = input()
    scoreMin = sys.maxsize
    text = ""
    for i in range(26):
        t = encode_decalage(message, i)
        score = probaTextAnglais(t)
        if score < scoreMin:
            scoreMin = score
            text = t
    print(text)
main()