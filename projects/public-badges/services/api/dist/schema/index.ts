import * as Schema from "./Schema.graphql";
import * as Query from "./Query.graphql";
import * as Mutation from "./Mutation.graphql";
import * as PublicBadge from "./PublicBadge.graphql";
import * as ValueCase from "./ValueCase.graphql";
import * as Organization from "./Organization.graphql";
import * as Status from "./Status.graphql";
import * as OpenBadge from "./OpenBadge.graphql";

const typeDefs = [
  Schema,
  Query,
  Mutation,
  Status,
  OpenBadge,
  PublicBadge,
  ValueCase,
  Organization
];

export default typeDefs;
