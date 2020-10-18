function buildTable(where, tags) {
    table = "<table>";
            "<tr>" +
            "<th>Game</th>" +
            "<th>Posts</th>" +
            "<th>Type</th>" +
            "</tr>";

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
    {name: 'Flip Ships', posts: 1, type: 'Board Game', link: 'https://lucencies.wordpress.com/tag/flip-ships/'},
    {name: 'Stuffed Fables', posts: 2, type: 'Board Game', link: 'https://lucencies.wordpress.com/tag/stuffed-fables/'},
    {name: 'Blades in the Dark', posts: 1, type: 'Tabletop RPG', link: 'https://lucencies.wordpress.com/tag/blades-in-the-dark/'},
    {name: 'Powered by the Apocalypse', posts: 1, type: 'Tabletop RPG', link: 'https://lucencies.wordpress.com/tag/powered-by-the-apocalypse/'}
];

buildTable("tabletopTable", tags);

function sortByName() {
    tags = sortTable(tags, "NAME");
    buildTable("tabletopTable", tags);
}

function sortByPosts() {
    tags = sortTable(tags, "POSTS");
    buildTable("tabletopTable", tags);
}

function sortByType() {
    tags = sortTable(tags, "TYPE");
    buildTable("tabletopTable", tags);
}