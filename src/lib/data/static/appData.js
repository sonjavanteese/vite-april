export const appData = [
  {
    "id": 0,
    "slug": "start",
    "head": {
      "titel": "Nwp-Studio",
      "sub": "Startseite",
      "bg": "https://nwp-cgn.de/img/poser/imgA02.png"
    },
    "link": {
      "path": "/",
      "name": "Start",
      "icon": "home",
      "sub": false
    },
    "navi": [
      {
        "path": "/serien",
        "name": "Serien"
      },
      {
        "path": "/studio",
        "name": "Studio"
      }
    ]
  },
  {
    "id": 1,
    "slug": "serien",
    "head": {
      "titel": "Nwp-Studio",
      "sub": "South Park Collection",
      "bg": "https://nwp-cgn.de/img/poser/imgA04.png"
    },
    "link": {
      "path": "/serien",
      "name": "Serien",
      "icon": "database",
      "sub": false
    },
    "navi": [
      {
        "path": "/serien",
        "name": "Serien"
      },
      {
        "path": "/serien/list",
        "name": "Episoden"
      },
      {
        "path": "/serien/editor",
        "name": "Editor"
      },
      {
        "path": "/serien/add",
        "name": "Add"
      }
    ]
  },
  {
    "id": 2,
    "slug": "studio",
    "head": {
      "titel": "Blackburn",
      "sub": "Classic Collection",
      "bg": "https://nwp-cgn.de/img/poser/imgA05.png"
    },
    "link": {
      "path": "/studio",
      "name": "Studio",
      "icon": "film",
      "sub": false
    },
    "navi": []
  },
  {
    "id": 3,
    "slug": "serien",
    "head": {
      "titel": "South Park Collection",
      "sub": "Episoden Liste"
    },
    "link": {
      "path": "/serien/list",
      "name": "Episoden Liste",
      "icon": "database",
      "sub": true
    },
    "navi": []
  },
  {
    "id": 4,
    "slug": "serien",
    "head": {
      "titel": "South Park Collection",
      "sub": "Episoden Editor"
    },
    "link": {
      "path": "/serien/editor",
      "name": "Episoden Editor",
      "icon": "database",
      "sub": true
    },
    "navi": []
  },
  {
    "id": 5,
    "slug": "serien",
    "head": {
      "titel": "South Park Collection",
      "sub": "Add Episode"
    },
    "link": {
      "path": "/serien/add",
      "name": "Add Episoden",
      "icon": "database",
      "sub": true
    },
    "navi": []
  }
];  
export const navData = appData.map((x) => x.head);
export const pageData = appData.map((x) => x.head);

export default appData;

