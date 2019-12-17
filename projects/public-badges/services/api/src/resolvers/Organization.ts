import {
  ContactResolvers,
  OrganizationResolvers,
  DomainNameIdentityResolvers,
  IdentityResolvers,
  PendingOrganizationResolvers,
  ApprovedOrganizationResolvers,
  OrganizationStatus
} from "../generated/graphql.js";

const Contact: ContactResolvers = {
  name({ name }) {
    return name;
  },
  email({ email }) {
    return email;
  }
};

const DomainNameIdentity: DomainNameIdentityResolvers = {
  domainName({ domainName }) {
    return domainName;
  }
};

const Identity: IdentityResolvers = {
  __resolveType({ domainName }) {
    return "DomainNameIdentity"
  }
};

const Organization: OrganizationResolvers = {
  __resolveType({ status }) {
    switch (status) {
      case OrganizationStatus.Pending: {
        return "PendingOrganization";
      }
      case OrganizationStatus.Approved: {
        return "ApprovedOrganization";
      }
    }
  },
  organizationId({ organizationId }) {
    return organizationId;
  },
  status({ status }) {
    return status;
  },
  name({ name }) {
    return name;
  },
  contact({ contact }) {
    return contact;
  },
  admin({ admin }) {
    return admin;
  },
  urls({ urls }) {
    return urls;
  },
  identity({ identity }) {
    return identity;
  }
};

const PendingOrganization: PendingOrganizationResolvers = {
  ...Organization
};

const ApprovedOrganization: ApprovedOrganizationResolvers = {
  ...PendingOrganization,
  approvedBy({ approvedBy }) {
    return approvedBy
  },
  approvedOn({ approvedOn }) {
    return approvedOn
  }
}

export {
  Contact,
  Organization,
  ApprovedOrganization,
  PendingOrganization,
  Identity,
  DomainNameIdentity
};
