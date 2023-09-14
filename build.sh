npm run build

mkdir -p /home/engagebay/Documents/workspace/engagebay-maven/src/main/webapp/proposals/js
mkdir -p /home/engagebay/Documents/workspace/engagebay-maven/src/main/webapp/proposals/css

cd dist/
cp -r main.js /home/engagebay/Documents/workspace/engagebay-maven/src/main/webapp/proposals/js/main.js
cp -r main.*.js.map /home/engagebay/Documents/workspace/engagebay-maven/src/main/webapp/proposal/js/main.js.map

# cd dist/
# cp -r main.*.css $ENGAGEBAY_FOLDER_PATH/src/main/webapp/proposal/css/main.css

# CDN MAPPING
if [ "$1" ]; then
    echo $1
    # /bin/bash theme.sh

    mkdir -p $1
    rm -r $1/*
    cp -r dist/* $1/
    mv $1/js/main.*.js $1/js/main.js
    mv $1/js/main.*.js.map $1/js/main.js.map

    mv $1/css/main.*.css $1/css/main.css

    ## Make the ZIP
    zip -r $1.zip $1

    ## Send to CDN
    scp -i $EC2_PERMISSIONS $1.zip ec2-user@ec2-54-200-136-185.us-west-2.compute.amazonaws.com:~/proposals/
    ssh -i $EC2_PERMISSIONS ec2-user@ec2-54-200-136-185.us-west-2.compute.amazonaws.com "unzip -o proposals/$1 -d proposals/ && rm -r proposals/$1.zip"
    echo "Updated CDN version : $1"

    rm -r $1
    rm -r $1.zip
else
    echo "No CDN2"  


fi   