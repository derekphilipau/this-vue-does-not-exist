a=1
for i in *.jpg; do
  new=$(printf "%07d.jpg" "$a") #07 pad to length of 7
  mv -i -- "$i" "$new"
  let a=a+1
done