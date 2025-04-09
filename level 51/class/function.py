# task 1

def open_or_senior(data):
    list = []
    for i,b in data:
        if i >= 55 and b > 7:
            list.append("Senior")
        else:
            list.append("Open")
    return list        
    

# task 2

def printer_error(s):
    err = 0;
    
    for i in s:
        if i < 'a' or i > 'm':
            err += 1;

    return f"{err}/{len(s)}"
        

#js
# const printerError = s =>{
#   let err = 0;
#   for(let i = 0; i < s.length; i++){
#     if (s[i] < 'a' || s[i] > 'm'){
#       err++
#     }
#   }
#   return `${err}/${s.length}`
# }