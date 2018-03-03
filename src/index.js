module.exports = function check(str, bracketsConfig) {
  // your solution
  bracketsConfig.forEach((a, i) => {
		while (str.includes(bracketsConfig[i][0] + bracketsConfig[i][1])) {
			str = str.slice(0, str.indexOf(bracketsConfig[i][0] + bracketsConfig[i][1]))
			+ str.slice(str.indexOf(bracketsConfig[i][0] + bracketsConfig[i][1]) + 2);	
		}		
	})
 	return (str.length > 0) ? false : true;
}
