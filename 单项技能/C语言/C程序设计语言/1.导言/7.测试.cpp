#include <stdio.h>
#include <stdlib.h>

char* inputStr();
int getStrLen(char* str);
char* detab(char* str, int n);
char* entab(char* str, int n);
void delComment(char* line);

int main() {
	char* str = inputStr();
	char* dStr = detab(str, 2);
	char* eStr = entab(dStr, 2);

	printf("origin str: ");
	for (int i = 0; i < getStrLen(str); i++) printf("%c", str[i]);
	printf("\ntransformed str: ");
	for (int i = 0; i < getStrLen(dStr); i++) printf("%c", dStr[i]);
	printf("\ntransformed back str: ");
	for (int i = 0; i < getStrLen(eStr); i++) printf("%c", eStr[i]);
	printf("\n");

	free(str);
	free(dStr);
	free(eStr);
	return 0;
}

char* inputStr() {
	int c, i;
	char* str;

	i = 0;
	str = (char*)malloc(0);
	do
	{
		c = getchar();

		if (c != '\n') {
			str = (char*)realloc(str, (i + 1) * sizeof(char));
			str[i] = c;
			++i;
		}
		else
		{
			str = (char*)realloc(str, (i + 1) * sizeof(char));
			str[i] = '\0';
		}
	} while (c != '\n');

	return str;
}

int getStrLen(char* str) {
	int len = 0;

	while (str[len] != '\0') len++;
	return len;
}

char* detab(char* str, int n) {
	char* dStr = (char*)malloc(0);
	int j = 0;

	for (int i = 0; i < getStrLen(str); i++)
	{
		if (str[i] != '\t') {
			dStr = (char*)realloc(dStr, (j + 1) * sizeof(char));
			dStr[j] = str[i];
			++j;
		}
		else {
			dStr = (char*)realloc(dStr, (j + n) * sizeof(char));
			for (int k = 0; k < n; k++)
			{
				dStr[j] = ' ';
				++j;
			}
		}
	}
	dStr = (char*)realloc(dStr, (j + 1) * sizeof(char));
	dStr[j] = '\0';

	return dStr;
}

char* entab(char* str, int n) {
	char* eStr = (char*)malloc(0);
	int j = 0, spaceCount = 0;

	for (int i = 0; i < getStrLen(str); i++)
	{
		if (str[i] != ' ') {
			for (int i = 0; i < spaceCount; i++)
			{
				eStr = (char*)realloc(eStr, (j + 1) * sizeof(char));
				eStr[j] = ' ';
				++j;
			}

			spaceCount = 0;
			eStr = (char*)realloc(eStr, (j + 1) * sizeof(char));
			eStr[j] = str[i];
			++j;
		}
		else {
			++spaceCount;

			if (spaceCount == n) {
				eStr = (char*)realloc(eStr, (j + 1) * sizeof(char));
				eStr[j] = '\t';
				++j;
				spaceCount = 0;
			}
		}
	}
	eStr = (char*)realloc(eStr, (j + 1) * sizeof(char));
	eStr[j] = '\0';

	return eStr;
}

void delComment(char* line) {

}