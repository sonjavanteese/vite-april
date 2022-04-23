export const appData = [
  {
    "id": 0,
    "slug": "start",
    "head": {
      "titel": "Nwp-Studio",
      "sub": "Application",
      "bg": "https://nwp-cgn.de/img/poser/imgA02.png"
    },
    "link": {
      "path": "/",
      "name": "Start",
      "icon": "home"
    }
  },
  {
    "id": 1,
    "slug": "jedit",
    "head": {
      "titel": "Nwp-Studio",
      "sub": "Json-Editor",
      "bg": "https://nwp-cgn.de/img/poser/imgA06.png"
    },
    "link": {
      "path": "/editor",
      "name": "Editor",
      "icon": "terminal"
    }
  },
  {
    "id": 2,
    "slug": "bb",
    "head": {
      "titel": "Blackburn-Studio",
      "sub": "Classic-Collection",
      "bg": "https://nwp-cgn.de/img/poser/imgA03.png"
    },
    "link": {
      "path": "/bb",
      "name": "Collection",
      "icon": "film"
    }
  },
  {
    "id": 3,
    "slug": "dlist",
    "head": {
      "titel": "Nwp-Studio",
      "sub": "Data-Store",
      "bg": "https://nwp-cgn.de/img/poser/imgA03.png"
    },
    "link": {
      "path": "/dlist",
      "name": "Database",
      "icon": "database"
    }
  }
];  
export const navData = appData.map((x) => x.head);
export const pageData = appData.map((x) => x.head);

export default appData;

