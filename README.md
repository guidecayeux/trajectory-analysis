# Trajectory analysis - WIP

To answer https://twitter.com/TechSpatiales/status/1599036108989288448

## Process

Transform image to text using https://www.imagetotext.info/ 

Raw data put in  trajectory_page-XXXX.txt

Clean data of any text. Usually the headers and sometimes in the middle.

Duplicate an XXX.js and change the data const with the content of trajectory_page-XXXX.txt

Each page has its own .js to better detect parsing mistakes, makes it easier to work with.

`execute_all.sh` builds the results.csv. 

## TODO

*[ ] Page 1
*[ ] Page 22 (auto parsing failed drastically) 

