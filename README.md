# GraphQL Mesh gRPC defaults bug demo
This project demonstrates a bug in the GraphQL Mesh where the option to load the default gRPC values does not have any effect.

## Reproduce the issue
**Run Demo gRPC service**
* navigate to the `demo_service` folder
* run `go mod download` to download dependencies
* run `make start` to start the gRPC service

**Run GraphQL Mesh**
* open a second terminal
* navigate to the `mesh` folder
* run `yarn install`
* run `yarn start-mesh`

**Example query**
* navigate to `http://localhost:4000/graphql`
* run the following query:

```graphql
{
  DemoService_GetSomeData(input: {}) {
    data {
      someTextData,
      someEnum
    }
  }
}
```

The response:
```graphql
{
  "data": {
    "DemoService_GetSomeData": {
      "data": [
        {
          "someTextData": "data 0",
          "someEnum": null
        },
        {
          "someTextData": "data 1",
          "someEnum": "ENUM_ONE"
        }
      ]
    }
  }
}
```

**The issue**
Please note that the first `someEnum` value is `null`. The gRPC service is responding with `ENUM_ZERO` (the default value) and therefore this response is expected with the default configuration. Nevertheless, when the mesh configuration specifies the load defaults option:
```yaml
    - name: DemoService
      handler:
        grpc:
          endpoint: localhost:9003
          source:
            load:
              defaults: true
            file: ../service_go/service_proto/demo_service.proto

```

Then the expected behavior is to fill the value with the default value and the expected response would be:
```graphql
{
  "data": {
    "DemoService_GetSomeData": {
      "data": [
        {
          "someTextData": "data 0",
          "someEnum": "ENUM_ZERO"
        },
        {
          "someTextData": "data 1",
          "someEnum": "ENUM_ONE"
        }
      ]
    }
  }
}
```

However, currently this is not the case and the configuration does not have any effect.

