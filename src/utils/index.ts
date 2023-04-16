// 获取assets静态资源
const modules = import.meta.globEager("../assets/category/**");
export const getAssetsFile = (url: string, pre?: string) => {
    return modules[`${pre ? pre : ''}${url}`].default;
//   return new URL(`./${pre ? pre : ''}${url}`, import.meta.url).href;
};
