export const useOss = () => {
  const prefix = import.meta.env.VITE_OSS_PREFIX;
  const getUrl = (name: string) => {
    return `${prefix}${name}`;
  };

  return {
    getUrl
  };
};
