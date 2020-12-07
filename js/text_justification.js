/**
 * Split the input lines at certain width.
 * @param {[String]} line The input line represented by a list of strings.
 * @param {Number} width  Maixmum allowed width.
 * @returns {[[String], [String]]} Frist array of satisfies the width constraint. Second array is the rest.
 */
function splitLine_loop(line, width) {
  var curr_line = [];
  var rest_line = [];
  var curr_line_width = 0;
  for (i = 0; i < line.length; i++) {
    curr_string = line[i];
    new_line_width =
      curr_line_width + curr_string.length + (curr_line.length > 0 ? 1 : 0);
    if (new_line_width <= width) {
      curr_line_width = new_line_width;
      curr_line.push(curr_string);
    } else {
      break;
    }
  }
  rest_line = line.slice(i);
  return [curr_line, rest_line];
}

function splitLine_rec(line, width) {
  if (line.length === 0) {
    return [[], []];
  }
  if (line[0].length > width) {
    return [[], [...line]];
  }
  [s1, s2] = splitLine_rec(line.slice(1), width - line[0].length - 1);
  return [[line[0], ...s1], [...s2]];
}

module.exports = { splitLine: splitLine_rec };
