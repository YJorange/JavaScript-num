module.exports = function main(str) {
	var lcd1 = ['._.','...','._.','._.','...','._.','._.','._.','._.','._.'];
	var lcd2 = ['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'];
	var lcd3 = ['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|'];
	var string = ["","",""];
	for(var i=0;i<str.length;i++){
		string[0]+=lcd1[parseInt(str[i])]+" ";
		string[1]+=lcd2[parseInt(str[i])]+" ";
		string[2]+=lcd3[parseInt(str[i])]+" ";
	}
	return string[0].substr(0,string[0].length-1)+'\n'+
	string[1].substr(0,string[1].length-1)+'\n'+
	string[2].substr(0,string[2].length-1)+'\n';
};
