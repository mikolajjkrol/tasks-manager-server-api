echo 'Deploying files to server'
scp -r server-api/* m@192.168.33.11:/var/www/react/task-manager-api
echo 'Done!'