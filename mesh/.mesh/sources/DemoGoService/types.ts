// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace DemoGoServiceTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  Int: number;
  Float: number;
  google_protobuf_Empty_Input: any;
};

export type Query = {
  DemoService_GetSomeData?: Maybe<DemoReply>;
  DemoService_connectivityState?: Maybe<ConnectivityState>;
};


export type QueryDemoService_GetSomeDataArgs = {
  input?: InputMaybe<Scalars['google_protobuf_Empty_Input']>;
};


export type QueryDemoService_connectivityStateArgs = {
  tryToConnect?: InputMaybe<Scalars['Boolean']>;
};

export type DemoReply = {
  data?: Maybe<Array<Maybe<SomeData>>>;
};

export type SomeData = {
  someTextData?: Maybe<Scalars['String']>;
  someEnum?: Maybe<SomeEnum>;
};

export type SomeEnum =
  | 'ENUM_ZERO'
  | 'ENUM_ONE';

export type ConnectivityState =
  | 'IDLE'
  | 'CONNECTING'
  | 'READY'
  | 'TRANSIENT_FAILURE'
  | 'SHUTDOWN';

  export type QuerySdk = {
      /** null **/
  DemoService_GetSomeData: InContextSdkMethod<Query['DemoService_GetSomeData'], QueryDemoService_GetSomeDataArgs, MeshContext>,
  /** undefined **/
  DemoService_connectivityState: InContextSdkMethod<Query['DemoService_connectivityState'], QueryDemoService_connectivityStateArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["DemoGoService"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
