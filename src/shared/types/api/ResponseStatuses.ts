export enum ResponseStatuses {
	Success = 200,
	Created = 201,
	NoContent = 204,
	Redirect = 301,
	TemporaryRedirect = 302,
	BadRequest = 400,
	Unauthorized = 401,
	PermissionForbidden = 403,
	NotFound = 404,
	Conflict = 409,
	ValidationFailed = 422,
	InternalServerError = 500,
	NoReceived = -1
}
