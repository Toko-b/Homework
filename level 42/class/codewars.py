# task 1
def mouth_size(animal): 

    if animal.lower() == "alligator":
        return "small"
    else:
        return "wide"
    
# task 2
def past(h, m, s):
    h_m = h * 3600000
    m_m = m * 60000
    s_m = s * 1000
    return h_m + m_m + s_m

# task 3
def replace_exclamation(st):
    res = ''
    for i in st:
        if i == 'a' or i == 'e' or i =='i' or i=='o' or i =='u' or i=='A' or i=='E' or i=="I" or i=="O" or i=='U':
            res+="!"
        else:
            res += i
    return res        
    
# task 4

def count_positives_sum_negatives(arr):
    if not arr: 
        return []

    pos = 0
    neg = 0
    for i in arr:
        if i > 0:
            pos += 1
        if i < 0:
            neg += i
            
    return [pos, neg]