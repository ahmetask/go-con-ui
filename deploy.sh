docker build -t gocon-ui .
kubectl delete deployment gocon-ui
kubectl delete service gocon-ui
kubectl create -f deployment.yml
kubectl create -f service.yml
