import { Type, Static } from "@sinclair/typebox";
import { ProjectMemberRole } from "./project-member-role";

export const AcceptInvitationRequest = Type.Object({
    token: Type.String()
})
export type AcceptInvitationRequest = Static<typeof AcceptInvitationRequest>;

export const AddProjectMemberRequestBody = Type.Object({
    email: Type.String(),
    role: Type.Enum(ProjectMemberRole),
    activateMembership: Type.Optional(Type.Boolean()),
});

export type AddProjectMemberRequestBody = Static<typeof AddProjectMemberRequestBody>;

export const ListProjectMembersRequestQuery = Type.Object({
    cursor: Type.Optional(Type.String()),
    limit: Type.Optional(Type.Number()),
});

export type ListProjectMembersRequestQuery = Static<typeof ListProjectMembersRequestQuery>;

export const AcceptProjectResponse = Type.Object({
    registered: Type.Boolean(),
});

export type AcceptProjectResponse = Static<typeof AcceptProjectResponse>;
