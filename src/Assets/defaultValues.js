const themes = {
  yellow: { primary: "#fff6cb", secondary: "#ffee92" },
  mint: { primary: "#e7f6e4", secondary: "#d1ebcb" },
  pink: { primary: "#ffe3f1", secondary: "#ffc5e1" },
  purple: { primary: "#f2e5ff", secondary: "#e2d0f5" },
  blue: { primary: "#e7f3ff", secondary: "#cce7ff" },
  gray: { primary: "#edebe9", secondary: "#dddad8" },
};

const defaultNotes = [
  {
    id: 1,
    title: "Note 1",
    lastModified: "5.12 PM",
    content:
      "Try making so<b>me </b><i><b>of this te</b>xt bold or</i><div><ul><li><i>t<strike>his is <b>bullshit</b></strike></i></li></ul></div><div><i>even italic</i></div>",
    sanitizedContent:
      "Try making some of this text bold or\nthis is bullshit\neven italic",
    theme: themes.yellow,
    images: [],
  },
  {
    id: 2,
    title: "Note 2",
    lastModified: "5.12 PM",
    content:
      '\n<ul><li>      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis. In ante metus dictum at tempor commodo. Amet risus nullam eget felis eget. Eros in </li><li><b>cursus turpis massa tincidunt dui. Vitae tempus quam pellentesque nec. Mauris pharetra et ultrices neque ornare aenean. In arcu cursus euismod quis viverra. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Senectus et netus et malesuada fames ac turpis. Tempus iaculis urna id volutpat lacus </b><i>laoreet non curabitur. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Sed vulputate odio ut enim blandit volutpat maecenas. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Sit amet risus nullam eget felis eget nunc lobortis mattis.</i></li></ul><div>\nMagna fringilla urna porttitor rhoncus dolor purus non enim. Facilisis sed odio morbi quis commodo odio aenean sed. Imperdiet massa tincidunt nunc pulvinar. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Vitae sapien pellentesque habitant morbi. Faucibus in ornare quam viverra. Sed turpis <strike>tincidunt id aliquet risus feugiat in ante. Ac turpis egestas integer</strike> eget aliquet nibh praesent. Arcu non sodales neque sodales ut etiam sit amet nisl. Enim facilisis gravida neque convallis a. Sed risus pretium quam vulputate dignissim suspendisse in. Tempus urna et pharetra pharetra.\n<ul><li>Blandit aliquam etiam erat velit scelerisque. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Purus sit amet luctus venenatis lectus magna fringilla</li></ul><br><span style="letter-spacing: 0.2px;">urna. Pharetra vel turpis nunc eget lo</span><strike style="letter-spacing: 0.2px;">rem dolor sed viverra ipsum. Lectus urna duis conval</strike><span style="letter-spacing: 0.2px;">lis convallis tellus id. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Enim nulla aliquet porttitor lacus luctus. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Feugiat scelerisque varius morbi enim nunc faucibus. Sed libero enim sed faucibus turpis. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Tellus id interdum velit laoreet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero.</span><br><ul><li>Quam pellentesque nec nam aliquam sem et tortor consequat. Aliquam ultrices sagittis orci a scelerisque. Nunc congue nisi vitae suscipit tellus mauris. Blandit libero volutpat sed cras ornare arcu dui. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Imperdiet sed euismod nisi porta lorem. Nibh tellus molestie nunc non blandit. Donec ultrices tincidunt arcu non sodales. Ac felis donec et odio. Sit amet porttitor eget dolor morbi non arcu risus quis. Id faucibus nisl tincidunt eget. Netus et malesuada fames ac turpis egestas sed tempus urna. Viverra vitae congue eu consequat ac felis donec.\nAliquet nibh praesent tristique magna. Eget gravida cum sociis <i>natoque penatibus et magnis dis parturient. Et pharetra pharetra massa massa ultricies mi. Id porta nibh venenatis cras sed felis eget. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Arcu cursus vitae con</i>gue mauris. Urna neque viverra justo nec ultrices dui sapien. Metus dictum at tempor commodo. Senectus et netus et malesuada fames ac. Purus gravida quis blandit turpis cursus in hac habitasse platea. Luctus venenatis lectus magna fringilla urna porttitor. Urna cursus eget nunc scelerisque. Turpis tincidunt id aliquet risus feugiat in ante. Bibendum at varius vel pharetra vel turpis. Lectus arcu bibendum at varius v<strike>el pharetra vel. Mauris vitae ultricies leo integer. Tristique risus nec feugiat in fermentum posuere urna nec. Vel orci porta non pulvinar neque. Eleifend mi in nulla posuere sollicitudin aliquam.\nAnte metus dictum at tempor commodo. Eleifend quam </strike>adipiscing vitae proin. Vestibulum mattis ullamcorper velit sed. Posuere ac ut consequat semper viverra nam libero justo laoreet. Sit amet volutpat consequat mauris nunc congue. Turpis nunc eget lorem dolor sed viverra. Urna cursus eget nunc s<b>celerisque viverra mauris in aliquam sem. Sapien pellentesque habitant morbi tristique senectus et netus. Vitae congue eu consequat ac felis donec. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Auctor augue mauris augue neque gravida in fermentum et. Vitae semper quis lectus nulla at volutpat. Dictum sit amet justo donec enim dia</b>m vulputate. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Vulputate mi sit amet mauris. Morbi tristique senectus et netus et malesuada fames ac. Dui id ornare arcu odio.\nUrna duis convallis convallis tellus. Sem viverra aliquet eget sit amet. Orci a scelerisque purus semper eget. Nec ultrices dui sapien eget mi proin. Vel eros donec ac odio. Viverra nam libero justo laoreet sit amet. Nunc lobortis mattis aliquam faucibus purus in massa. Ultrices neque ornare aenean euismod elementum nisi. Rhoncus mattis rhoncus urna neque. Vitae nunc sed velit dignissim sodales ut eu.\nAt imperdiet dui accumsan sit amet nulla. Semper feugiat nibh sed pulvinar proin gravida. Dignissim enim sit amet venenatis urna. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Est placerat in egestas erat imperdiet sed euismod nisi. Mi eget mauris pharetra et ultrices. Commodo ullamcorper a lacus vestibulum sed. Tristique et egestas quis ipsum suspendisse ultrices. Tristique senectus et netus et malesuada. Ornare aenean euismod elementum nisi quis eleifend.\nTristique et egestas quis ipsum suspendisse. Sit amet aliquam id diam maecenas ultricies mi. Cursus euismod quis viverra nibh cras. Faucibus a pellentesque sit amet porttitor. Eget arcu dictum varius duis at consectetur lorem. Parturient montes nascetur ridiculus mus mauris. Nisl purus in mollis nunc. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Lacinia at quis risus sed vulputate odio ut enim. Non pulvinar neque laoreet suspendisse interdum. In ornare quam viverra orci sagittis eu volutpat odio. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Arcu dui vivamus arcu felis bibendum ut. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Elementum tempus egestas sed sed risus. Turpis </li></ul></div>',
    sanitizedContent:
      "\n\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis. In ante metus dictum at tempor commodo. Amet risus nullam eget felis eget. Eros in \ncursus turpis massa tincidunt dui. Vitae tempus quam pellentesque nec. Mauris pharetra et ultrices neque ornare aenean. In arcu cursus euismod quis viverra. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Senectus et netus et malesuada fames ac turpis. Tempus iaculis urna id volutpat lacus laoreet non curabitur. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Sed vulputate odio ut enim blandit volutpat maecenas. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Sit amet risus nullam eget felis eget nunc lobortis mattis.\n\nMagna fringilla urna porttitor rhoncus dolor purus non enim. Facilisis sed odio morbi quis commodo odio aenean sed. Imperdiet massa tincidunt nunc pulvinar. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Vitae sapien pellentesque habitant morbi. Faucibus in ornare quam viverra. Sed turpis tincidunt id aliquet risus feugiat in ante. Ac turpis egestas integer eget aliquet nibh praesent. Arcu non sodales neque sodales ut etiam sit amet nisl. Enim facilisis gravida neque convallis a. Sed risus pretium quam vulputate dignissim suspendisse in. Tempus urna et pharetra pharetra.\n\nBlandit aliquam etiam erat velit scelerisque. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Purus sit amet luctus venenatis lectus magna fringilla\n\nurna. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Lectus urna duis convallis convallis tellus id. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Enim nulla aliquet porttitor lacus luctus. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Feugiat scelerisque varius morbi enim nunc faucibus. Sed libero enim sed faucibus turpis. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Tellus id interdum velit laoreet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero.\n\nQuam pellentesque nec nam aliquam sem et tortor consequat. Aliquam ultrices sagittis orci a scelerisque. Nunc congue nisi vitae suscipit tellus mauris. Blandit libero volutpat sed cras ornare arcu dui. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Imperdiet sed euismod nisi porta lorem. Nibh tellus molestie nunc non blandit. Donec ultrices tincidunt arcu non sodales. Ac felis donec et odio. Sit amet porttitor eget dolor morbi non arcu risus quis. Id faucibus nisl tincidunt eget. Netus et malesuada fames ac turpis egestas sed tempus urna. Viverra vitae congue eu consequat ac felis donec.\nAliquet nibh praesent tristique magna. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Et pharetra pharetra massa massa ultricies mi. Id porta nibh venenatis cras sed felis eget. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Arcu cursus vitae congue mauris. Urna neque viverra justo nec ultrices dui sapien. Metus dictum at tempor commodo. Senectus et netus et malesuada fames ac. Purus gravida quis blandit turpis cursus in hac habitasse platea. Luctus venenatis lectus magna fringilla urna porttitor. Urna cursus eget nunc scelerisque. Turpis tincidunt id aliquet risus feugiat in ante. Bibendum at varius vel pharetra vel turpis. Lectus arcu bibendum at varius vel pharetra vel. Mauris vitae ultricies leo integer. Tristique risus nec feugiat in fermentum posuere urna nec. Vel orci porta non pulvinar neque. Eleifend mi in nulla posuere sollicitudin aliquam.\nAnte metus dictum at tempor commodo. Eleifend quam adipiscing vitae proin. Vestibulum mattis ullamcorper velit sed. Posuere ac ut consequat semper viverra nam libero justo laoreet. Sit amet volutpat consequat mauris nunc congue. Turpis nunc eget lorem dolor sed viverra. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Sapien pellentesque habitant morbi tristique senectus et netus. Vitae congue eu consequat ac felis donec. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Auctor augue mauris augue neque gravida in fermentum et. Vitae semper quis lectus nulla at volutpat. Dictum sit amet justo donec enim diam vulputate. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Vulputate mi sit amet mauris. Morbi tristique senectus et netus et malesuada fames ac. Dui id ornare arcu odio.\nUrna duis convallis convallis tellus. Sem viverra aliquet eget sit amet. Orci a scelerisque purus semper eget. Nec ultrices dui sapien eget mi proin. Vel eros donec ac odio. Viverra nam libero justo laoreet sit amet. Nunc lobortis mattis aliquam faucibus purus in massa. Ultrices neque ornare aenean euismod elementum nisi. Rhoncus mattis rhoncus urna neque. Vitae nunc sed velit dignissim sodales ut eu.\nAt imperdiet dui accumsan sit amet nulla. Semper feugiat nibh sed pulvinar proin gravida. Dignissim enim sit amet venenatis urna. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Est placerat in egestas erat imperdiet sed euismod nisi. Mi eget mauris pharetra et ultrices. Commodo ullamcorper a lacus vestibulum sed. Tristique et egestas quis ipsum suspendisse ultrices. Tristique senectus et netus et malesuada. Ornare aenean euismod elementum nisi quis eleifend.\nTristique et egestas quis ipsum suspendisse. Sit amet aliquam id diam maecenas ultricies mi. Cursus euismod quis viverra nibh cras. Faucibus a pellentesque sit amet porttitor. Eget arcu dictum varius duis at consectetur lorem. Parturient montes nascetur ridiculus mus mauris. Nisl purus in mollis nunc. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Lacinia at quis risus sed vulputate odio ut enim. Non pulvinar neque laoreet suspendisse interdum. In ornare quam viverra orci sagittis eu volutpat odio. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Arcu dui vivamus arcu felis bibendum ut. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Elementum tempus egestas sed sed risus. Turpis ",
    theme: themes.gray,
    images: [],
  },
  {
    id: 3,
    title: "Note 3",
    lastModified: "5.12 PM",
    content: "This is note 3",
    sanitizedContent: "This is note 2",
    theme: themes.mint,
    images: [],
  },
  {
    id: 4,
    title: "Note 4",
    lastModified: "5.12 PM",
    content: "This is note 4",
    sanitizedContent: "This is note 2",
    theme: themes.pink,
    images: [],
  },
  {
    id: 5,
    title: "Note 5",
    lastModified: "5.12 PM",
    content: "This is note 5",
    sanitizedContent: "This is note 2",
    theme: themes.purple,
    images: [],
  },
];

const defaultBoards = [
  {
    id: 1643890604335,
    title: "Board 1",
    uid: "3b0e9363-f7ad-471b-8bb2-889fedca4221",
    isStarred: false,
    backgroundImage:
      "https://images.unsplash.com/photo-1643304842006-44079673c553",
    boardPanels: [
      {
        id: "estsh8Yx2",
        title: "Item 1",
        position: 0,
        panelItems: [
          {
            content: "Item 1.1",
            lastModified: "",
            position: 0,
            id: "gxCedR1LMd",
          },
        ],
      },
      {
        id: "estsh8Yx3",
        title: "Item 2",
        position: 1,
        panelItems: [
          {
            content: "Item 2.1",
            lastModified: "",
            position: 1,
            id: "gxCedR3LMd",
          },
        ],
      },
    ],
  },
  {
    id: 1643890612041,
    title: "Board 2",
    uid: "3b0e9363-f7ad-471b-8bb2-889fedca4221",
    isStarred: false,
    backgroundImage:
      "https://images.unsplash.com/photo-1494935362342-566c6d6e75b5",
    boardPanels: [
      {
        id: "efzqP8vYm0",
        title: "Item 1",
        position: 0,
        panelItems: [
          {
            content: "Item 1.1",
            lastModified: "",
            position: 0,
            id: "TA60KQD5WT",
          },
        ],
      },
    ],
  },
  {
    id: 1643890619345,
    title: "Board 3",
    uid: "3b0e9363-f7ad-471b-8bb2-889fedca4221",
    isStarred: false,
    backgroundImage:
      "https://images.unsplash.com/photo-1489914023688-f41499faec3f",
    boardPanels: [
      {
        id: "fSXtbcYbbW",
        title: "Item 1",
        position: 0,
        panelItems: [
          {
            content: "Item 1.1",
            lastModified: "",
            position: 0,
            id: "YWlyH31NH",
          },
        ],
      },
    ],
  },
  {
    id: 1643890629457,
    title: "Board 4",
    uid: "3b0e9363-f7ad-471b-8bb2-889fedca4221",
    isStarred: false,
    backgroundImage:
      "https://images.unsplash.com/photo-1515587749518-60a43ef2f892",
    boardPanels: [
      {
        id: "KVNSw5x4od",
        title: "Item 1",
        position: 0,
        panelItems: [
          {
            content: "Item 1.1",
            lastModified: "",
            position: 0,
            id: "TPAnh5qFwQ",
          },
        ],
      },
    ],
  },
  {
    id: 1643890635985,
    title: "Board 5",
    uid: "3b0e9363-f7ad-471b-8bb2-889fedca4221",
    isStarred: false,
    backgroundImage:
      "https://images.unsplash.com/photo-1515514555726-139d17f71d33",
    boardPanels: [
      {
        id: "tUuDoCkZaD",
        title: "Item 1",
        position: 0,
        panelItems: [
          {
            content: "Item 1.1",
            lastModified: "",
            position: 0,
            id: "LVYZ2bUbwO",
          },
        ],
      },
    ],
  },
  {
    id: 1643890645784,
    title: "Board 6",
    uid: "3b0e9363-f7ad-471b-8bb2-889fedca4221",
    isStarred: false,
    backgroundImage:
      "https://images.unsplash.com/photo-1528702089051-073df03e151b",
    boardPanels: [
      {
        id: "vWhxXgDYOX",
        title: "Item 1",
        position: 0,
        panelItems: [
          {
            content: "Item 1.1",
            lastModified: "",
            position: 0,
            id: "2vTWH5pgyf",
          },
        ],
      },
    ],
  },
  {
    id: 1643890656994,
    title: "Board 7",
    uid: "3b0e9363-f7ad-471b-8bb2-889fedca4221",
    isStarred: false,
    backgroundImage:
      "https://images.unsplash.com/photo-1550668180-3205f7bb6a9e",
    boardPanels: [
      {
        id: "esofgZ7nk1",
        title: "Item 1",
        position: 0,
        panelItems: [
          {
            content: "Item 1.1",
            lastModified: "",
            position: 0,
            id: "NFTfVeqZuP",
          },
        ],
      },
    ],
  },
  {
    id: 1643890665962,
    title: "Board 8",
    uid: "3b0e9363-f7ad-471b-8bb2-889fedca4221",
    isStarred: false,
    backgroundImage:
      "https://images.unsplash.com/photo-1611748663584-15bb3cd33166",
    boardPanels: [
      {
        id: "PICvn5QevV",
        title: "Item 1",
        position: 0,
        panelItems: [
          {
            content: "Item 1.1",
            lastModified: "",
            position: 0,
            id: "sWiB4Fh0Py",
          },
        ],
      },
    ],
  },
];
export { defaultNotes, defaultBoards, themes };
