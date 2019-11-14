#include <stdio.h>
#include <stdlib.h>

char* expand(char s[]);

int main() {
	char str[] = "sjd-klsd41a-ein1-8alA-G";
	char* expandStr = expand(str);

	printf("expanded str: ");
	for (int i = 0; expandStr[i] != '\0'; i++)
	{
		printf("%c", expandStr[i]);
	}
	printf("\n");

	return 0;
}

char* expand(char s[]) {
	int i, j;
	char* str = (char*)malloc(3);

	str[0] = s[0];
	str[1] = s[1];
	i = j = 2;

	while (s[i] != '\0')
	{
		char start = s[i - 2], gap = s[i - 1], end = s[i];
		int isLowerLetter = start >= 'a' && end <= 'z' && end > start;
		int isUpperLetter = start >= 'A' && end <= 'Z' && end > start;
		int isNumber = start >= '0' && end <= '9' && end > start;

		if (gap == '-' && (isLowerLetter || isUpperLetter || isNumber)) {
			str = (char*)realloc(str, j + end - start + 2);
			j -= 2;
			for (int i = start; i < end + 1; i++)
			{
				str[j++] = (char)i;
			}
		}
		else {
			str = (char*)realloc(str, j + 2);
			str[j++] = s[i];
		}
		i++;
	}
	str[j] = '\0';
	return str;
}