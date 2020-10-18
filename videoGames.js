function buildFranchiseTable(where, tags) {
  table = "<table>";
          "<tr>" +
          "<th>Game</th>" +
          "<th>Posts</th>"
          "</tr>";

    buildTable(where, tags, table);
}

function buildTopicTable(where, tags) {
    table = "<table>";
            "<tr>" +
            "<th>Misc</th>" +
            "<th>Posts</th>" +
            "</tr>";

    buildTable(where, tags, table);
}

function buildTable(where, tags, table) {
    for (i = 0; i < tags.length; ++i) {
        table += "<tr>";
        table += "<td>" + "<a href='" + tags[i].link + "'>" + tags[i].name + "</a></td>";
        table += "<td>" + tags[i].posts + "</td>";
        table += "<td>" + tags[i].type + "</td>";
    }

    table += "</table>"

    document.getElementById(where).innerHTML = table;
}

let tags = [
    {name: 'Flip Ships', posts: 1, type: 'Board Game'},
    {name: 'Stuffed Fables', posts: 2, type: 'Board Game'},
    {name: 'Blades in the Dark', posts: 1, type: 'Tabletop RPG'},
    {name: 'Powered by the Apocalypse', posts: 1, type: 'Tabletop RPG'}
];

buildTable("videoGamesTable", tags);

function sortByName() {
    tags = sortTable(tags, "NAME");
    buildTable("videoGamesTable", tags);
}

function sortByPosts() {
    tags = sortTable(tags, "POSTS");
    buildTable("videoGamesTable", tags);
}