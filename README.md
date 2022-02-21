# server

using nestjs

{
"ipcMode": "task",
"containerDefinitions": [
{
"dnsSearchDomains": [],
"logConfiguration": {
"logDriver": "awslogs",
"secretOptions": [],
"options": {
"awslogs-group": "/ecs/로그이름",
"awslogs-region": "리전",
"awslogs-stream-prefix": "ecs"
}
},
"entryPoint": [],
"portMappings": [
{
"hostPort": 80,
"protocol": "tcp",
"containerPort": 3000
}
],
"command": [],
"linuxParameters": [],
"environment": [
{
"name": "환경변수",
"value": "환경변수 값"
}
],
"resourceRequirements": [],
"ulimits": [],
"dnsServers": [],
"mountPoints": [],
"secrets": [],
"dockerSecurityOptions": [],
"memoryReservation": 512,
"volumesFrom": [],
"stopTimeout": 2,
"image": "ecr 이미지 이름",
"startTimeout": 2,
"dependsOn": [],
"workingDirectory": "도커파일 workdir과 매칭",
"interactive": true,
"healthCheck": {
"command": ["CMD-SHELL", "curl -f http://localhost/ || exit 1"],
"interval": 300,
"timeout": 30,
"retries": 3,
"startPeriod": 0
},
"essential": true,
"links": [],
"pseudoTerminal": true,
"name": "people"
}
],
"placementConstraints": [],
"family": "people",
"pidMode": "task",
"requiresCompatibilities": ["EC2"],
"networkMode": "bridge",
"inferenceAccelerators": [],
"volumes": []
}
