# Trajectory analysis - WIP

To answer https://twitter.com/TechSpatiales/status/1599036108989288448

## Process

Transform image to text using https://www.imagetotext.info/ ;

Raw data put in  trajectory_page-XXXX.txt

Clean data for text. Usually the headers and sometimes in the middle.

Duplicate an XXX.0s and change the data const with the content of trajectory_page-XXXX.txt

For the moment, each page has its own .0s to better detect parsing mistakes, makes it easier to work with. 
