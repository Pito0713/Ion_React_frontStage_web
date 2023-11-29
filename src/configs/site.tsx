// 預設語言
export const LANGUAGE_DEFAULT = "zh-TW";

export const LANGUAGE_LIST = [{ value: "zh-TW", lang: "中文" }];


export const useMENU_LIST= () => {
    return [
    {
      code: 0,
      name: "tablePage",
      route: "tablePage",
    },
    {
      settingPage: [
        {
          code: 11,
          name: "addAdmin",
          route: "/addAdmin",
        },
        {
          code: 12,
          name: "adminPermissions",
          route: "/adminPermissions",
        },
        {
          code: 13,
          name: "changePassWord",
          route: "/changePassWord",
        },
      ],
    },
  ];
}