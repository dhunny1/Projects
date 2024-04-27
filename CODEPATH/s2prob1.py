
def val_Parens(s):
    hashT ={
        "]":"[",
        ")":"(",
        "}":"{"
    }
    arr=[]
    for i in s:

        if i not in hashT.keys():
            arr.append(i)
            continue
        else:
            if arr and (arr[-1] == hashT[i]):
                arr.pop()
            else:
                return False
        
    return not(arr)


        





   
  
print(val_Parens("{{{{]}}}}"))