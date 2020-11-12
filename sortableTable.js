function sortTable(tags, col) {
  if (col == "NAME") {
    tags.sort(function(x, y) {
      if (x.name < y.name) {
        return -1
      }
      if (x.name > y.name) {
        return 1
      }
      return 0
    });
  }
  else if (col == "POSTS") {
    tags.sort(function(x, y) {
      if (x.posts < y.posts) {
        return 1
      }
      if (x.posts > y.posts) {
        return -1
      }
      return 0
    });
  }
  return tags
}