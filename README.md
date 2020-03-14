# Docker-learning


Commands
	1) Docker run <Image Name>
	2) Docker ps
	3) Docker ps -all
	4) Docker system prune-to delete all cache
	5) Docker create <imagename>
	6) Docker start <imagename>
	7) Docker start -a <imagename>
	8) Docker stop <container>- it will take little bit time to stop
	9) Docker kill <container> -it will immediately
	10) Docker log <container>
	11) Docker exec -it <containerid> <command>- "-it" used to give input after command executes
	12) Docker exec -I -t <containerid> <command>- "-i" for standard in and "-t" for standard out
	13) Docker exec <containerid> sh
	14) Docker build .  -create docker file and redirect to the directory and execute the this line to build docker image
	15) Docker build -t srisathiya01/redis:latest .
				1) Srisathiya01-container id
				2) Redis-image name 
				3) Latest -version of the redis server.
	16) Docker run -p 8080:9099 containerid .
				1) 8080-local host redirect to container(incomming port)
9099-within the container which port to connec
