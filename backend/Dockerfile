FROM golang:latest

RUN mkdir -p /api

WORKDIR /api

ADD ./api /api

EXPOSE 5000

# ORM got go api
RUN go get github.com/astaxie/beego
# router for go api
RUN go get github.com/gorilla/mux

RUN go build -o main .

CMD ["/api/main"]


