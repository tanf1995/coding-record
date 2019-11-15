#include <stdio.h>
#include <stdlib.h>

char* getLine();
int strIndex(char s[], char t[]);
int strRightIndex(char s[], char t[]);

int main() {
	char** lines = (char**)malloc(0);
	char* line;
	char str[] = "hello";
	int len;
	
	for (len = 0; (line = getLine())[0] != '\0'; len++)
	{
		char** new_lines = (char**)realloc(lines, (len + 1) * sizeof(char*));
		if (!new_lines) return -1;
		lines = new_lines;
		lines[len] = line;
	}

	printf("\nincludes %s lines: \n", str);
	free(line);
	for (int i = 0; i < len; i++)
	{
		int strI = strIndex(lines[i], str);
		int strRightI = strRightIndex(lines[i], str);

		if (strI != -1) {
			printf("index: %d\n", strI);
			printf("right index: %d\n", strRightI);
			printf("%s\n", lines[i]);
		}
		free(lines[i]);
	}
	return 0;
}

char* getLine() {
	char* str = (char*)malloc(1);
	int c, i;

	i = 0;
	while ((c = getchar()) != '\n')
	{
		str = (char*)realloc(str, i + 2);
		str[i++] = c;
	}
	str[i] = '\0';

	return str;
}

int strIndex(char s[], char t[]) {
	int i, j, k;

	for (i = 0; s[i] != '\0'; i++)
	{
		for (j = i, k = 0; s[j] == t[k] && s[j] != '\0'; j++, k++);
		if (k > 0 && t[k] == '\0') return i;
	}
	return -1;
}

int strRightIndex(char s[], char t[]) {
	int i, j, k, index = -1;

	for (i = 0; s[i] != '\0'; i++)
	{
		for (j = i, k = 0; s[j] == t[k] && s[j] != '\0'; j++, k++);
		if (k > 0 && t[k] == '\0') index = i;
	}
	return index;
}