#include <stdio.h>

void statisticsNumberCount() {
	int c, whiteCount, otherCount;
	int numberList[10];

	whiteCount = otherCount = 0;
	for (int i = 0; i < 10; i++) {
		numberList[i] = 0;
	}
	while ((c = getchar()) != '\n')
	{
		if (c >= '0' && c <= '9') {
			++numberList[c - '0']; // acsii码相减得数值
		}
		else if (c == ' ' || c == '\n' || c == '\t') {
			++whiteCount;
		}
		else {
			++otherCount;
		}
	}
	
	for (int i = 0; i < 10; i++) {
		printf("number %d count: %d\n", i, numberList[i]);
	}
	printf("white count: %d\n", whiteCount);
	printf("other count: %d\n", otherCount);
}

void inputWordHistogram() {
	int c, wordLen, maxLen;
	int lenArray[10];

	wordLen = maxLen = 0;
	for (int i = 0; i < 10; i++) lenArray[i] = 0;

	do
	{
		c = getchar();

		if (c == ' ' || c == '\n') {
			if (maxLen < wordLen) maxLen = wordLen;
			if (wordLen > 0 && wordLen < 10) ++lenArray[wordLen];
			else if (wordLen >= 10) ++lenArray[0];
			wordLen = 0;
		}
		else if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122)){
			++wordLen;
		}
	} while (c != '\n');
	
	for (int i = maxLen;i >= 0; i--) {
		for (int j = 1; j < 10; j++)
		{
			if (i == 0) printf(" len %d ", j);
			else {
				if (lenArray[j] >= i) printf("   *   ");
				else printf("       ");
			}
		}
		// 长度10即以上
		if (i == 0) {
			printf(" len 10+ ");
		}
		else {
			if (lenArray[0] >= i) printf("    *    ");
			else printf("         ");
		}

		printf("\n");
	}
}

void inputLetterHistogram() {
	int letterArray[52];
	int c, maxLen;

	maxLen = 0;
	for (int i = 0; i < 52; i++) letterArray[i] = 0;

	do
	{
		c = getchar();
		if (c >= 'a' && c <= 'z') {
			++letterArray[c - 'a'];
			if (maxLen < letterArray[c - 'a']) {
				maxLen = letterArray[c - 'a'];
			}
		}
		else if (c >= 'A' && c <= 'Z') {
			++letterArray[c - 'A' + 26];
			if (maxLen < letterArray[c - 'A' + 26]) {
				maxLen = letterArray[c - 'A' + 26];
			}
		}
	} while (c != '\n');

	for (int i = maxLen; i >= 0; i--)
	{
		if (i == 0) {
			for (int j = 0; j < 26; j++) {
				int n = j + 'a';
				printf(" %c ", (char)n);
			}
			for (int j = 26; j < 52; j++) {
				int n = j - 26 + 'A';
				printf(" %c ", (char)n);
			}
		}
		else {
			for (int j = 0; j < 52; j++)
			{
				if (letterArray[j] >= i) {
					printf(" * ");
				}
				else
				{
					printf("   ");
				}
			}
		}
		printf("\n");
	}
	printf("max: %d", maxLen);
}

int main() {
	//statisticsNumberCount();
	//inputWordHistogram();
	//inputLetterHistogram();
	return 0;
}