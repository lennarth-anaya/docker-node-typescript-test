docker build -t typescript_test .
docker run -it --rm --name typescript_test_01 typescript_test node build/main.js
