import { INodeProperties } from 'n8n-workflow';

export const ticketsDescription = [
	// ----------------------------------
	//         Fields: ticket
	// ----------------------------------
	{
		displayName: 'User ID',
		name: 'user',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['ticket'],
			},
		},
		description:
			'The ID of the user opening the ticket, an operator ID is required if opening an internal ticket.',
	},
	{
		displayName: 'Department',
		name: 'department',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['ticket'],
			},
		},
		description:
			'The department the ticket is being opened in. It must be assigned to the brand that the ticket is being opened in.',
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['ticket'],
			},
		},
		description: 'The status of the new ticket.',
	},
	{
		displayName: 'Priority',
		name: 'priority',
		type: 'number',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['ticket'],
			},
		},
		description: 'The priority of the new ticket.',
	},
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['ticket'],
			},
		},
		description: 'The ticket subject.',
	},
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['ticket'],
			},
		},
		description: 'The initial ticket message.',
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['update', 'get', 'delete'],
			},
		},
		description: 'The ID of the ticket.',
	},
	{
		displayName: 'Simplify Response',
		name: 'simplify',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['create', 'update', 'get', 'getAll'],
			},
		},
		description: 'Return simplified response. Only returns the ticket data.',
	},
	{
		displayName: 'Additional Fields',
		name: 'optionalFields',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['create'],
			},
		},
		default: {},
		description: 'Additional optional fields of the user.',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'User ID',
				name: 'user',
				type: 'number',
				default: 0,
				description:
					'The ID of the user opening the ticket, an operator ID is required if opening an internal ticket.',
			},
			{
				displayName: 'On Behalf Of',
				name: 'on_behalf_of',
				type: 'number',
				default: 0,
				description:
					'When opening a ticket as an operator, specify a user ID to open the ticket on behalf of.',
			},
			{
				displayName: 'User First Name',
				name: 'user_firstname',
				type: 'string',
				default: '',
				description: 'If a new user, set the first name of the user .',
			},
			{
				displayName: 'User Last Name',
				name: 'user_lastname',
				type: 'string',
				default: '',
				description: 'If a new user, set the last name of the user .',
			},
			{
				displayName: 'User Email',
				name: 'user_email',
				type: 'string',
				default: '',
				description:
					'If a new user, set the email of the user, required if no user ID set. Can be entered instead of the user parameter to find a user by their email address.',
			},
			{
				displayName: 'User Organisation',
				name: 'user_organisation',
				type: 'string',
				default: '',
				description:
					'If a new user, set the organisation of the user, will create a new organisation.',
			},
			{
				displayName: 'User IP Address',
				name: 'user_ip_address',
				type: 'string',
				default: '',
				description: 'The IP address of the user.',
			},
			{
				displayName: 'Brand ID',
				name: 'brand',
				type: 'number',
				default: 0,
				description:
					'The brand the ticket is being opened in, defaults to default brand if not entered.',
			},
			{
				displayName: 'Internal?',
				name: 'internal',
				type: 'boolean',
				default: false,
				description:
					'If the ticket is internal (for operators only). If true, requires the user parameter to be set to an operator ID.',
			},
			{
				displayName: 'Tag IDs',
				name: 'tag',
				type: 'json',
				default: '',
				description: 'An array of tag IDs for the new ticket.',
			},
			{
				displayName: 'Assigned To',
				name: 'assignedto',
				type: 'json',
				default: '',
				description: 'An array of operator IDs that are assigned to the new ticket.',
			},
			{
				displayName: 'Watching',
				name: 'watching',
				type: 'json',
				default: '',
				description: 'An array of operator IDs that are watching the new ticket.',
			},
			{
				displayName: 'Custom Fields',
				name: 'customfield',
				type: 'json',
				default: '',
				description: 'An array of custom fields values, keyed by their ID.',
			},
			{
				displayName: 'CC',
				name: 'cc',
				type: 'json',
				default: '',
				description: 'An array of email addresses to CC on the ticket.',
			},
			{
				displayName: 'Send user email?',
				name: 'send_user_email',
				type: 'boolean',
				default: true,
				description: 'Whether to send an email to the user(s) about the new ticket.',
			},
			{
				displayName: 'Send operator email?',
				name: 'send_operator_email',
				type: 'boolean',
				default: true,
				description: 'Whether to send an email to the operator(s) about the new ticket.',
			},
			{
				displayName: 'Attachments',
				name: 'attachment',
				type: 'json',
				default: '',
				description:
					'A multi-dimensional array of attachments in the format of ‘attachment[n][filename]’ (attachment filename) and ‘attachment[n][contents]’ (base64-encoded file contents).',
			},
			{
				displayName: 'Created At',
				name: 'created_at',
				type: 'number',
				default: 0,
				description: 'If you wish to set a custom created time, must be a UNIX timestamp.',
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'optionalFields',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['update'],
			},
		},
		default: {},
		description: 'Additional optional fields of the user.',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Brand ID',
				name: 'brand',
				type: 'number',
				default: 0,
				description:
					'Update the brand on the ticket. Must also have the department and department_email parameters set that is assigned to the new brand.',
			},
			{
				displayName: 'User ID',
				name: 'user',
				type: 'number',
				default: 0,
				description: 'Update the user on the ticket.',
			},
			{
				displayName: 'Department ID',
				name: 'department',
				type: 'number',
				default: 0,
				description:
					'Update the department email on the ticket, used to send emails notifications for this ticket. It must be assigned to the department and brand that the ticket has been opened in.',
			},
			{
				displayName: 'Department Email',
				name: 'department_email',
				type: 'number',
				default: 0,
				description:
					'Update the department email on the ticket, used to send emails notifications for this ticket. It must be assigned to the department and brand that the ticket has been opened in.',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'number',
				default: 0,
				description: 'Update the status on the ticket.',
			},
			{
				displayName: 'Priority',
				name: 'priority',
				type: 'number',
				default: '',
				description: 'Update the priority on the ticket.',
			},
			{
				displayName: 'Subject',
				name: 'subject',
				type: 'string',
				default: '',
				description: 'Update the subject on the ticket.',
			},

			{
				displayName: 'Tag IDs',
				name: 'tag',
				type: 'json',
				default: '',
				description: 'An array of tag IDs for the ticket (overwrites existing tags).',
			},
			{
				displayName: 'Assigned To',
				name: 'assignedto',
				type: 'json',
				default: '',
				description: 'An array of operator IDs that are assigned to the ticket.',
			},
			{
				displayName: 'Watching',
				name: 'watching',
				type: 'json',
				default: '',
				description: 'An array of operator IDs that are watching the ticket.',
			},
			{
				displayName: 'SLA Plan',
				name: 'sla_plan',
				type: 'number',
				default: 0,
				description: 'Update the SLA plan on the ticket (will also update due time).',
			},
			{
				displayName: 'Due Time',
				name: 'due_time',
				type: 'number',
				default: 0,
				description: 'Manually set the due time on the ticket, set as a UNIX timestamp.',
			},
			{
				displayName: 'Custom Fields',
				name: 'customfield',
				type: 'json',
				default: '',
				description:
					'An array of custom fields values, keyed by their ID. (Overwrites existing custom fields).',
			},
			{
				displayName: 'CC',
				name: 'cc',
				type: 'json',
				default: '',
				description:
					'An array of email addresses to CC on the ticket. (Overwrites existing CC emails).',
			},
			{
				displayName: 'Locked?',
				name: 'locked',
				type: 'boolean',
				default: false,
				description:
					'If the ticket is locked and the user cannot add any further replies. This also closes the ticket.',
			},
		],
	},
] as INodeProperties[];
