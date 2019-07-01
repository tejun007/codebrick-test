FROM golang:latest

RUN mkdir -p /api

WORKDIR /api

ADD ./api /api

EXPOSE 5000

# Rest API framework for golang
RUN go get github.com/astaxie/beego
RUN go get -u github.com/beego/bee

RUN go build -o main .

CMD ./main


