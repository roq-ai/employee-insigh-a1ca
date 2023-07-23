interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['CEO'],
  customerRoles: ['Guest'],
  tenantRoles: ['CEO', 'Managing Director', 'Administrator', 'Manager', 'Employee', 'Sr Manager', 'Editor', 'Writer'],
  tenantName: 'Agency',
  applicationName: ' Employee Insights Tracker - Promotix Media',
  addOns: ['chat', 'notifications', 'file'],
};
