#!/bin/bash
# Assumes bilingual files like name.lang.md
# Get the first argument which should be just the base filename
for FILE in $1*.md
do
  # get basename from .md file to make folder
  DIR="${FILE%.*.*}"
  # get name with lang
  LANGPRE="${FILE%.*}"
  # get lang string
  LANG="${LANGPRE##*.}"

  # make the folder
  mkdir -p "$DIR"
  # move the files into the folder and rename
  mv "$FILE" "$DIR/index.$LANG.md"

done
ls -la "$DIR"
