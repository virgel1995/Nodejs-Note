#!/bin/sh

echo "start all (y/n) ?";
read Answer;
if [$Answer = "y"]
then
echo "going to install all deps"
npm install 
fi

echo "start application (y/n)?"
read Answer2

if [$Answer2 = "y"]
then
npm start
fi


