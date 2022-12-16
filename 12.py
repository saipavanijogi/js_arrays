# n=int(input(“enter the number”)
# i=0
# While i<n:
#    b=n//10
#    i=i+1
#    print(b)
# n=int(input("enter the number"))
# i=0
# while i<n:
#    b=n%10
#    print(b)
#    c=c//10
#    print(c)

import json
a={1234:234,"asdfgh":2345,}
with open("pavani.json","w")as f:
   json.dump(a,f)