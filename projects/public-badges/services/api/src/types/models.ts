import {
  ApprovedOrganization as AO,
  PendingOrganization as PO,
  OrganizationStatus,
  PublicBadge as PB,
  ValueCase as VC,
  ApprovedPublicBadge as APB,
  RejectedPublicBadge as RPB
} from "./generated/graphql";

export type PendingOrganization = Omit<PO, "status"> & {
  status: OrganizationStatus.Pending;
};

export type ApprovedOrganization = Omit<AO, "status"> & {
  status: OrganizationStatus.Approved;
};

export type ValueCase = Omit<VC, "proposedBy"> & {
  proposedBy: string;
};

export type ValueCaseProxy = ValueCase;
export type PublicBadge = Omit<PB, "recipient" | "valueCase">;
export type PublicBadgeProxy = PublicBadge;

export type ApprovedPublicBadge = Omit<APB, "recipient" | "valueCase">;

export type RejectedPublicBadge = Omit<RPB, "recipient" | "valueCase">;
