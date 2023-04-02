package main

import (
	pb "demo_service/service_proto"
	"log"
	"net"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func main() {
	println("Starting grpc service on port 9003...")

	listener, err := net.Listen("tcp", "0.0.0.0:9003")
	if err != nil {
		panic(err)
	}

	s := grpc.NewServer()
	pb.RegisterDemoServiceServer(s, &Service{})
	reflection.Register(s)

	if err := s.Serve(listener); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
