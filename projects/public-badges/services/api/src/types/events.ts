import {
  PendingOrganization,
  ApprovedOrganization,
  PublicBadgeProxy,
  ApprovedPublicBadgeProxy,
  RejectedPublicBadgeProxy
} from "./index";
import { OpenBadge } from "../generated/graphql";

export interface Event {
  detailType: string;
  detail: any;
}

export enum PublicBadgesEventType {
  ORGANIZATION_REGISTRATION_REQUESTED = "ORGANIZATION_REGISTRATION_REQUESTED",
  ORGANIZATION_APPROVAL_REQUESTED = "ORGANIZATION_APPROVAL_REQUESTED",
  ORGANIZATION_APPROVAL_ACCEPTED = "ORGANIZATION_APPROVAL_ACCEPTED",
  ORGANIZATION_APPROVED = "ORGANIZATION_APPROVED",
  NEW_BADGECLASS_PROPOSED = "NEW_BADGECLASS_PROPOSED",
  BADGE_ISSUANCE_REQUESTED = "BADGE_ISSUANCE_REQUESTED",
  BADGE_ISSUANCE_APPROVAL_REQUESTED = "BADGE_ISSUANCE_APPROVAL_REQUESTED",
  BADGE_ISSUANCE_APPROVED = "BADGE_ISSUANCE_APPROVED",
  BADGE_ISSUANCE_REJECTED = "BADGE_ISSUANCE_REJECTED",
  BADGE_INSTANCE_UPDATED = "BADGE_INSTANCE_UPDATED",
  OPEN_BADGES_ARTIFACT_CREATED = "OPEN_BADGES_ARTIFACT_CREATED"
}

export type PublicBadgesEventPayload =
  | PendingOrganization
  | ApprovedOrganization
  | PublicBadgeProxy
  | OpenBadge;

export interface PBEvent extends Event {
  detailType: PublicBadgesEventType;
  detail: PublicBadgesEventPayload;
}

export interface OrganizationRegistrationRequestedEvent extends PBEvent {
  detailType: PublicBadgesEventType.ORGANIZATION_REGISTRATION_REQUESTED;
  detail: PendingOrganization;
}

export interface OrganizationApprovalRequestedEvent extends PBEvent {
  detailType: PublicBadgesEventType.ORGANIZATION_APPROVAL_REQUESTED;
  detail: PendingOrganization;
}

export interface OrganizationApprovalAcceptedEvent extends PBEvent {
  detailType: PublicBadgesEventType.ORGANIZATION_APPROVAL_ACCEPTED;
  detail: PendingOrganization;
}

export interface OrganizationApprovedEvent extends PBEvent {
  detailType: PublicBadgesEventType.ORGANIZATION_APPROVED;
  detail: ApprovedOrganization;
}

export interface BadgeIssuanceRequestedEvent extends PBEvent {
  detailType: PublicBadgesEventType.BADGE_ISSUANCE_REQUESTED;
  detail: PublicBadgeProxy;
}

export interface BadgeIssuanceApprovalRequestedEvent extends PBEvent {
  detailType: PublicBadgesEventType.BADGE_ISSUANCE_APPROVAL_REQUESTED;
  detail: PublicBadgeProxy;
}

export interface BadgeIssuanceApprovedEvent extends PBEvent {
  detailType: PublicBadgesEventType.BADGE_ISSUANCE_APPROVED;
  detail: ApprovedPublicBadgeProxy;
}

export interface BadgeIssuanceRejectedEvent extends PBEvent {
  detailType: PublicBadgesEventType.BADGE_ISSUANCE_REJECTED;
  detail: RejectedPublicBadgeProxy;
}

export interface BadgeInstanceUpdated extends PBEvent {
  detailType: PublicBadgesEventType.BADGE_INSTANCE_UPDATED;
  detail: PublicBadgeProxy;
}
export interface OpenBadgeArtifactCreated extends PBEvent {
  detailType: PublicBadgesEventType.OPEN_BADGES_ARTIFACT_CREATED;
  detail: OpenBadge;
}

export type PublicBadgesEvent =
  | OrganizationRegistrationRequestedEvent
  | OrganizationApprovalRequestedEvent
  | OrganizationApprovalAcceptedEvent
  | OrganizationApprovedEvent
  | BadgeIssuanceRequestedEvent
  | BadgeIssuanceApprovalRequestedEvent
  | BadgeIssuanceApprovedEvent
  | BadgeIssuanceRejectedEvent
  | BadgeInstanceUpdated
  | OpenBadgeArtifactCreated;
