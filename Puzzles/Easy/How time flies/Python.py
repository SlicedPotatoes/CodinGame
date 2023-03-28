from datetime import datetime
begin = input().split('.')
end = input().split('.')
diffYears = int(end[2]) - int(begin[2])
diffMonths = int(end[1]) - int(begin[1])
diffDays = int(end[0]) - int(begin[0])
result = ""
if diffMonths < 0:
    diffYears -= 1
    diffMonths += 12
if diffDays < 0:
    diffMonths -= 1
    diffDays = 31+diffMonths
if diffYears > 0:
    if diffYears == 1:
        result = "1 year, "
    else:
        result = str(diffYears) + " years, "
if diffMonths > 0:
    if diffMonths == 1:
        result += "1 month, "
    else:
        result += str(diffMonths) + " months, "
a = datetime.strptime(begin[1] + '.' + begin[0] + '.' + begin[2], '%m.%d.%Y')
b = datetime.strptime(end[1] + '.' + end[0] + '.' + end[2], '%m.%d.%Y')
c = (b - a).total_seconds()
diffD = round(c / (3600 * 24))
print(result + 'total ' + str(diffD) + ' days')
