echo 'Deploying files to server'
scp -r server-api/* m@192.168.33.11:/var/server-api/
echo 'Done!'