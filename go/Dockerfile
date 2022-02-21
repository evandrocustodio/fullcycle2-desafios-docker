##
## Build
##
FROM golang:1.16-buster AS build
WORKDIR /app
COPY go.mod ./
RUN go mod download

COPY *.go ./

RUN go build -o /hello

##
## Deploy
##
FROM alpine

WORKDIR /

COPY --from=build /hello /hello


ENTRYPOINT ["/hello"]