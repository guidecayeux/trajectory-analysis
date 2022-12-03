echo > results.csv
for f in data/*.js ;
do
  echo "File : $f";
  echo "File : $f" >> results.csv;
  node.exe "$f" >> results.csv;
done
