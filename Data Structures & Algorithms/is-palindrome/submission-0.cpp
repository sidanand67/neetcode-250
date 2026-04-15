class Solution {
public:
    bool isPalindrome(string s){ 
	int l = 0, r = s.size()-1; 
	while (l < r) {
		char a = tolower(s[l]); 
		char b = tolower(s[r]); 
		if (!isalnum(a)) {
			l++; 
			continue; 
		} 
		if (!isalnum(b)) {
			r--; 
			continue; 
		}
		if (a != b) {
			return false; 
		}
		l++, r--; 
	}
	return true; 
}
};
