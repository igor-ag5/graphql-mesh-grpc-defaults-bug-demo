package main

import (
	"context"
	pb "demo_service/service_proto"

	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

type Service struct {
	pb.UnimplementedDemoServiceServer
}

func (s *Service) GetSomeData(ctx context.Context, r *emptypb.Empty) (*pb.DemoReply, error) {
	data := []*pb.SomeData{{SomeTextData: "data 0", SomeEnum: pb.SomeEnum_ENUM_ZERO}, {SomeTextData: "data 1", SomeEnum: pb.SomeEnum_ENUM_ONE}}
	return &pb.DemoReply{Data: data}, nil
}
