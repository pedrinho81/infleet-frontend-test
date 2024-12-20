export const useSetPageTitle = (title: string) => {
  return () => document.title = title;
};
