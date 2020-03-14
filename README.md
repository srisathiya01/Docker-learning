# Docker-learning


Commands
	1) Docker run <Image Name>  <br>
	2) Docker ps <br>
	3) Docker ps -all <br>
	4) Docker system prune-to delete all cache <br>
	5) Docker create <imagename> <br>
	6) Docker start <imagename> <br>
	7) Docker start -a <imagename> <br>
	8) Docker stop <container>- it will take little bit time to stop <br>
	9) Docker kill <container> -it will immediately <br>
	10) Docker log <container> <br>
	11) Docker exec -it <containerid> <command>- "-it" used to give input after command executes <br>
	12) Docker exec -I -t <containerid> <command>- "-i" for standard in and "-t" for standard out <br>
	13) Docker exec <containerid> sh <br>
	14) Docker build .  -create docker file and redirect to the directory and execute the this line to build docker image <br>
	15) Docker build -t srisathiya01/redis:latest . <br>
				1) Srisathiya01-container id <br>
				2) Redis-image name  <br>
				3) Latest -version of the redis server. <br>
	16) Docker run -p 8080:9099 containerid . <br>
				1) 8080-local host redirect to container(incomming port) <br>
9099-within the container which port to connect <br>
