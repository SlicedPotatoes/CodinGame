const sqlQuery = readline();
const ROWS = parseInt(readline());
const tableHeader = readline().split(" ");
let select = getSelect();
let from = getFrom();
let where = getWhere();
let orderBy = getOrderBy();
let data = [];
for (let i = 0; i < ROWS; i++) {
  const tableRow = readline();
  data.push(tableRow.split(" "));
}
writeTableName();
executeQuery();
function getSelect() {
  //Récupére les indexs des colonnes a select depuis TableHeader
  let tab = sqlQuery.substring(7, sqlQuery.indexOf("FROM") - 1).split(", ");
  let tab2 = [];
  if (tab[0] == "*") {
    //Si c'est select * on récupére tout les indexs
    for (let i = 0; i < tableHeader.length; i++) {
      tab2.push(getTableHeaderIndex(tableHeader[i]));
    }
  } else {
    for (let i = 0; i < tab.length; i++) {
      //Sinon on récupére que ceux qui nous serons utile
      tab2.push(getTableHeaderIndex(tab[i]));
    }
  }
  return tab2;
}
function getFrom() {
  //Récupére le from (pas utile en vrai mais pas principe je l'ai fais :3)
  if (sqlQuery.indexOf("WHERE") != -1) {
    //Si Where est présent on retourne le string entre "FROM" et "WHERE"
    return sqlQuery.substring(sqlQuery.indexOf("FROM") + 5, sqlQuery.indexOf("WHERE") - 1);
  } else if (sqlQuery.indexOf("ORDER BY") != -1) {
    //Si OrderBy est présent on retourne le string entre "FROM" et "OrderBy"
    return sqlQuery.substring(sqlQuery.indexOf("FROM") + 5, sqlQuery.indexOf("ORDER BY") - 1);
  } else {
    //Sinon on retourne le string apres le "FROM"
    return sqlQuery.substring(sqlQuery.indexOf("FROM") + 5);
  }
}
function getWhere() {
  //Récupére le where (la colonne est remplacé par son index correspondant)
  let index = sqlQuery.indexOf("WHERE"); //Récupére l'index du début de "WHERE"
  if (index != -1) {
    let tab = [];
    if (sqlQuery.indexOf("ORDER BY") != -1) {
      //Si "ORDER BY" est présent on retourne de "WHERE" a "ORDER BY"
      tab = sqlQuery.substring(index + 6, sqlQuery.indexOf("ORDER BY") - 1).split(" = ");
    } else {
      //Sinon on retourne apres le "WHERE"
      tab = sqlQuery.substring(index + 6).split(" = ");
    }
    tab[0] = getTableHeaderIndex(tab[0]);
    return tab;
  }
  return null;
}
function getOrderBy() {
  //Récupére le Order By (la colonne est remplacé par son index correspondant)
  let index = sqlQuery.indexOf("ORDER BY");
  if (index != -1) {
    let tab = sqlQuery.substring(index + 9).split(" ");
    tab[0] = getTableHeaderIndex(tab[0]);
    return tab;
  }
  return null;
}
function getTableHeaderIndex(str) {
  //Récupére l'index de la colonne correspondant au str
  for (let i = 0; i < tableHeader.length; i++) {
    if (tableHeader[i] == str) {
      return i;
    }
  }
  return -1;
}
function writeTableName() {
  //Ecris le nom des colonnes du Select
  let str = "";
  for (let i = 0; i < select.length; i++) {
    str += tableHeader[select[i]] + " ";
  }
  console.log(str.slice(0, -1));
}
function executeQuery() {
  let dataE = []; //Data de sortie
  for (let i = 0; i < data.length; i++) {
    //Parcours la table par ligne
    let line = []; //Une ligne de data
    if (where) {
      //Si "WHERE" n'est pas null
      if (data[i][where[0]] == where[1]) {
        //Si la valeurs = celle du "WHERE"
        for (let j = 0; j < select.length; j++) {
          line.push(data[i][select[j]]); //On récupére toute les valeurs par rapport a ce qui est demandé dans le select
        }
        dataE.push(line.join(" ")); //On formate par rapport a la sortie
      }
    } else {
      //"WHERE" n'existe pas
      for (let j = 0; j < select.length; j++) {
        line.push(data[i][select[j]]); //On récupére toute les valeurs par rapport a ce qui est demandé dans le select
      }
      dataE.push(line.join(" ")); //On formate par rapport a la sortie
    }
  }
  if (orderBy) {
    //Si "ORDER BY" n'est pas null
    let index = 0;
    for (let i = 0; i < select.length; i++) {
      //On récupére l'index dans le tableau select de la colonne a orderBy
      if (select[i] == orderBy[0]) {
        index = i;
      }
    }
    dataE.sort(function (a, b) {
      let tabA = a.split(" "); //Ca je pense que c'est pas trop opti j'aurais pu le prévoir avant et l'évité :3
      let tabB = b.split(" ");
      let value1 = tabA[index];
      let value2 = tabB[index];
      if (isNumeric(value1)) {
        //Si on compare des nombres on met la valeur en numéric
        value1 = +tabA[index];
        value2 = +tabB[index];
      }
      if (orderBy[1] == "DESC") {
        if (value1 > value2) {
          return -1;
        }
        return 1;
      } else {
        if (value1 > value2) {
          return 1;
        }
        return -1;
      }
    });
  }
  console.log(dataE.join("\n"));
}
function isNumeric(val) {
  return /^-?\d+$/.test(val);
}
