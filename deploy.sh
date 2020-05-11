docker build -t gocon-ui .
kubectl delete deployment gocon-ui
kubectl delete service gocon-ui
kubectl apply -f deployment.yml
kubectl apply -f service.yml
