export const isHasAuth = (auth: string) => {
  const permissions: string[] = ['*'];

  const _auth = auth.split(',');

  return permissions.some((item) => _auth.includes(item));
};
