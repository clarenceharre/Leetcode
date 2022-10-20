const test = "IX";

/*
TOP 97.5% (PERFORMANCE) and 17% (MEMORY)
*/

function convertRomanToInteger(s) {
  const map = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let result = 0;

  for (var i = 0; i < s.length; i++) {
    if (map[s[i]] < map[s[i + 1]]) {
      result += map[s[i + 1]] - map[s[i]];
      i++;
    } else {
      result += map[s[i]];
    }
  }
  return result;
}

console.log(convertRomanToInteger(test));

/*

First, the getEditableContentConfig API is called. It returns the templates, editableFields, and conditionalSections. 

Currently we have the setEditableField and getEditableField APIs for setting and getting the customisable content in the report. On the backend, these fields are saved in and fetched from systemConfig. During report generation, these fields are added to the JSON that is sent to js-report. They are in this format:

"editableFields": {
  "executive-summary": "<h2>Executive Summary</h2>",
  "comments-on-network-throughput": ""
}

There is also the getEditableContentConfig API that returns 

For conditional sections, we’re looking at doing the same thing.
*/
